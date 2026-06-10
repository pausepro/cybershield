const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');
const os = require('os');
const pty = require('node-pty');
const { spawn } = require('child_process');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

io.on('connection', (socket) => {
    console.log(`[Socket] New client connected: ${socket.id}`);

    // Create a new Docker container for this session
    // Using a lightweight alpine image that we will build called 'cybershield-vm'
    // Alternatively, we can spawn directly with node-pty.
    
    // We use windows executable if on windows
    const command = 'docker';
    const containerName = `cybershield-vm-${socket.id}`;
    const args = ['run', '-it', '--rm', '--name', containerName, 'cybershield-vm', '/bin/bash'];

    // Spawn the pty process
    let ptyProcess;
    try {
        ptyProcess = pty.spawn(command, args, {
            name: 'xterm-color',
            cols: 80,
            rows: 24,
            cwd: process.env.HOME,
            env: process.env
        });

        ptyProcess.onData((data) => {
            socket.emit('terminal.inc', data);
        });

        socket.on('terminal.out', (data) => {
            if (ptyProcess) {
                ptyProcess.write(data);
            }
        });

        socket.on('terminal.resize', (size) => {
            if (ptyProcess) {
                try {
                    ptyProcess.resize(size.cols, size.rows);
                } catch (e) {
                    console.error("Resize error:", e);
                }
            }
        });

        socket.on('disconnect', () => {
            console.log(`[Socket] Client disconnected: ${socket.id}`);
            if (ptyProcess) {
                ptyProcess.kill();
            }
            // Force remove the docker container to ensure it is destroyed when the terminal is closed
            spawn('docker', ['rm', '-f', containerName]);
        });

    } catch (err) {
        console.error("Failed to spawn pty process:", err);
        socket.emit('terminal.inc', `\r\n[Error] Failed to connect to Virtual Machine: ${err.message}\r\n`);
    }
});

server.listen(PORT, () => {
    console.log(`🚀 CyberShield Server running on http://localhost:${PORT}`);
});
