FROM php:7.2-apache

WORKDIR /var/www

# Environment Variables
ARG DEBCONF_NOWARNINGS=yes
ENV LANG C.UTF-8
ENV NODE_VERSION v10.15.3

# Copy docker files into container
COPY docker/docker-entrypoint.sh /usr/local/bin/
COPY docker/php.ini /usr/local/etc/php/
COPY docker/ssl.conf /etc/apache2/

# Install server dependencies
RUN apt-get update && apt-get install -qqy sudo less nano git subversion openssl openssh-server libpng-dev libjpeg-dev
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
RUN docker-php-ext-configure gd --with-png-dir=/usr --with-jpeg-dir=/usr

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash \
  && export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" \
  && nvm install $NODE_VERSION \
  && nvm alias default $NODE_VERSION

RUN mkdir -p /root/.ssh
RUN chmod 700 /root/.ssh
RUN a2enmod rewrite expires ssl
RUN mkdir -p /etc/apache2/ssl
RUN openssl req \
    -new \
    -newkey rsa:2048 \
    -days 365 \
    -nodes \
    -x509 \
    -subj "/C=US/ST=California/L=San Diego/O=Woodlan/OU=Development/CN=localhost" \
    -out /etc/apache2/ssl/server.crt \
    -keyout /etc/apache2/ssl/server.key
RUN cat /etc/apache2/ssl.conf >> /etc/apache2/apache2.conf \
  && rm /etc/apache2/ssl.conf \
  && rm -rf /var/lib/apt/lists/*

# ENTRYPOINT and CMD
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["apache2-foreground"]
