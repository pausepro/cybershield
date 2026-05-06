FROM alpine:latest

# Install necessary network and utility tools
RUN apk add --no-cache bash net-tools iputils grep coreutils

# Create fake auth.log
RUN mkdir -p /var/log && \
    echo "Oct 14 10:22:15 cybershield sshd[1234]: Failed password for root from 192.168.1.200 port 54321 ssh2" > /var/log/auth.log && \
    echo "Oct 14 10:22:17 cybershield sshd[1235]: Failed password for root from 192.168.1.200 port 54323 ssh2" >> /var/log/auth.log && \
    echo "Oct 14 10:22:19 cybershield sshd[1236]: Failed password for admin from 192.168.1.200 port 54325 ssh2" >> /var/log/auth.log && \
    echo "Oct 14 10:30:00 cybershield sshd[1240]: Accepted password for admin from 10.0.0.5 port 22 ssh2" >> /var/log/auth.log

# Set prompt
ENV PS1="user@cybershield:~$ "

WORKDIR /root
CMD ["/bin/bash"]
