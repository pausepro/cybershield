FROM alpine:latest

# Install necessary network and utility tools, plus php, sqlite3, and curl
RUN apk add --no-cache bash net-tools iputils grep coreutils php83 php83-sqlite3 php83-session sqlite curl

# Create fake auth.log in /root so the grep command works natively
RUN echo "Oct 14 10:22:15 cybershield sshd[1234]: Failed password for root from 192.168.1.200 port 54321 ssh2" > /root/auth.log && \
    echo "Oct 14 10:22:17 cybershield sshd[1235]: Failed password for root from 192.168.1.200 port 54323 ssh2" >> /root/auth.log && \
    echo "Oct 14 10:22:19 cybershield sshd[1236]: Failed password for admin from 192.168.1.200 port 54325 ssh2" >> /root/auth.log && \
    echo "Oct 14 10:30:00 cybershield sshd[1240]: Accepted password for admin from 10.0.0.5 port 22 ssh2" >> /root/auth.log

# Create a symlink for php
RUN ln -s /usr/bin/php83 /usr/bin/php

# Setup vulnerable web app
RUN mkdir -p /var/www/html
COPY vm_files/index.php /var/www/html/index.php
RUN echo "This is a secret file not meant for the web." > /etc/secret.txt
RUN chmod -R 777 /var/www/html

# Setup bashrc
COPY vm_files/.bashrc /root/.bashrc

# Set prompt
ENV PS1="user@cybershield:~$ "

WORKDIR /root
CMD ["/bin/bash"]
