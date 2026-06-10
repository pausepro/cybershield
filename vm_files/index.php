<?php
// Simple vulnerable PHP script for training purposes

$html = "<html><body><h1>User Lookup</h1>";

// 1. SQL Injection Vulnerability
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $db = new SQLite3('test.db');
    // Create dummy table if not exists
    $db->exec("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)");
    $db->exec("INSERT OR IGNORE INTO users (id, username, password) VALUES (1, 'admin', 'super_secret_password_123')");
    $db->exec("INSERT OR IGNORE INTO users (id, username, password) VALUES (2, 'guest', 'guest')");

    // VULNERABLE: Direct concatenation of user input into SQL query
    $query = "SELECT username FROM users WHERE id = " . $id;
    $html .= "<p>Executing query: " . htmlspecialchars($query) . "</p>";
    
    $result = $db->query($query);
    if ($result) {
        $html .= "<ul>";
        while ($row = $result->fetchArray()) {
            $html .= "<li>Found user: " . htmlspecialchars($row['username']) . "</li>";
        }
        $html .= "</ul>";
    } else {
        $html .= "<p>Database error.</p>";
    }
} else {
    $html .= "<p>Please provide an id parameter (e.g. ?id=1)</p>";
}

// 2. Local File Inclusion (LFI) Vulnerability
$html .= "<h2>File Viewer</h2>";
if (isset($_GET['page'])) {
    $page = $_GET['page'];
    // VULNERABLE: Includes file directly from user input without sanitization
    // Use @ to suppress warnings if file doesn't exist, to simulate a common bad practice
    $html .= "<p>Including file: " . htmlspecialchars($page) . "</p>";
    ob_start();
    @include($page);
    $content = ob_get_clean();
    $html .= "<pre>" . htmlspecialchars($content) . "</pre>";
} else {
    $html .= "<p>Please provide a page parameter (e.g. ?page=about.txt)</p>";
}

// 3. Command Injection Vulnerability
$html .= "<h2>Ping Utility</h2>";
if (isset($_POST['ip'])) {
    $ip = $_POST['ip'];
    // VULNERABLE: Direct execution of system command using user input
    $html .= "<p>Pinging " . htmlspecialchars($ip) . "</p>";
    // Redirect stderr to stdout to see errors if any
    $output = shell_exec("ping -c 1 " . $ip . " 2>&1");
    $html .= "<pre>" . htmlspecialchars($output) . "</pre>";
} else {
    $html .= "<p>Please POST an ip parameter to ping.</p>";
}

$html .= "</body></html>";

echo $html;
?>
