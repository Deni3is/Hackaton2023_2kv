FROM php:7.4-fpm-alpine
RUN set -xe && \
    curl -LO https://github.com/jbboehr/php-psr/archive/v1.2.0.tar.gz && \
    tar xzf ${PWD}/v1.2.0.tar.gz && \
    curl -LO https://github.com/phalcon/cphalcon/archive/v4.1.3.tar.gz && \
    tar xzf ${PWD}/v4.1.3.tar.gz && \
    docker-php-ext-install -j $(getconf _NPROCESSORS_ONLN) \
        ${PWD}/php-psr-1.2.0 \
        ${PWD}/cphalcon-4.1.3/build/php7/64bits && \
    rm -r ${PWD}/v1.2.0.tar.gz ${PWD}/php-psr-1.2.0 \
          ${PWD}/v4.1.3.tar.gz ${PWD}/cphalcon-4.1.3 && \
    curl -sS https://getcomposer.org/installer | \
    php -- --install-dir=/usr/bin/ --filename=composer
RUN set -xe && \
    apk add --no-cache postgresql-client postgresql-dev && \
    docker-php-ext-configure pdo_pgsql && \
    docker-php-ext-configure pgsql && \
    docker-php-ext-install pdo_pgsql pgsql && \
    docker-php-ext-install pdo_mysql