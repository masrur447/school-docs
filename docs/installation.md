# Installation Guide

This comprehensive guide will walk you through the complete installation process of the Student Management System. Follow these steps carefully to ensure a successful setup.

## Pre-Installation Checklist

### Server Requirements

#### Minimum System Requirements

- **CPU**: 2 cores, 2.4 GHz
- **RAM**: 4 GB minimum, 8 GB recommended
- **Storage**: 20 GB available space
- **Network**: Stable internet connection

#### Software Requirements

- **Operating System**: Linux (Ubuntu 20.04+, CentOS 8+), Windows Server 2019+, or macOS 10.15+
- **Web Server**: Apache 2.4+ or Nginx 1.18+
- **PHP**: 8.2 or higher
- **Database**: MySQL 8.0+ or PostgreSQL 13+
- **Composer**: Latest version
- **Node.js**: 18.x or higher
- **NPM**: 9.x or higher

#### PHP Extensions

Ensure the following PHP extensions are installed:

```bash
# Ubuntu/Debian
sudo apt-get install php8.2-bcmath php8.2-ctype php8.2-curl php8.2-dom \
php8.2-fileinfo php8.2-json php8.2-mbstring php8.2-openssl php8.2-pcre \
php8.2-pdo php8.2-tokenizer php8.2-xml php8.2-zip php8.2-gd php8.2-intl \
php8.2-mysql php8.2-sqlite3

# CentOS/RHEL
sudo yum install php82-bcmath php82-ctype php82-curl php82-dom \
php82-fileinfo php82-json php82-mbstring php82-openssl php82-pcre \
php82-pdo php82-tokenizer php82-xml php82-zip php82-gd php82-intl \
php82-mysql php82-sqlite3
```

## Installation Methods

### Method 1: Manual Installation

#### Step 1: Download the Application and Unzip

#### Step 2: Install Dependencies

```bash
# Install PHP dependencies
composer install
# For development environment, use:
# composer install

# Install Node.js dependencies
npm install

# Build frontend assets
npm run build

# For development, use:
# npm run dev
```

#### Step 3: Environment Configuration

```bash
# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Generate JWT secret (if using JWT authentication)
php artisan jwt:secret
```

#### Step 4: Configuration

```bash
# Configure environment
cp .env.example .env
php artisan key:generate

# Run migrations
php artisan migrate:fresh --seed

# Start the application
php artisan serve


# Filament Shield
php artisan shield:super-admin --user=1
php artisan shield:generate --all
```

#### Step 5: Configure Environment Variables

Edit the `.env` file with your specific configuration:

```env
# Application Configuration
APP_NAME="Student Management System"
APP_ENV=production
APP_KEY=base64:your-generated-key
APP_DEBUG=false
APP_URL=https://your-domain.com

# Database Configuration
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=student_management
DB_USERNAME=your_username
DB_PASSWORD=your_secure_password

# Mail Configuration
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@your-domain.com
MAIL_FROM_NAME="${APP_NAME}"

# Queue Configuration
QUEUE_CONNECTION=database

# Cache Configuration
CACHE_DRIVER=file
SESSION_DRIVER=file

# File Storage
FILESYSTEM_DISK=local

# OPEN AI
OPENAI_API_KEY=
OPENAI_ORGANIZATION=

# SMS Configuration (Optional)
TWILIO_SID=
TWILIO_TOKEN=
TWILIO_SENDER_NUMBER=your twilio whatsapp sender number
TWILIO_SMS_NUMBER=your twilio sms sender number

# Payment Gateway (Optional)
STRIPE_KEY=your-stripe-public-key
STRIPE_SECRET=your-stripe-secret-key
```

#### Step 5: Database Setup

```bash
# Create database (MySQL example)
mysql -u root -p
CREATE DATABASE student_management CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'sms_user'@'localhost' IDENTIFIED BY 'secure_password';
GRANT ALL PRIVILEGES ON student_management.* TO 'sms_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;

# Run database migrations
php artisan migrate

# Seed the database with initial data
php artisan db:seed

# Or run both together
php artisan migrate --seed
```

#### Step 6: File Permissions

```bash
# Set proper permissions for Laravel
sudo chown -R www-data:www-data /path/to/file-name
sudo chmod -R 755 /path/to/file-name
sudo chmod -R 775 /path/to/file-name/storage
sudo chmod -R 775 /path/to/file-name/bootstrap/cache

# Create symbolic link for storage
php artisan storage:link
```

#### Step 7: Web Server Configuration

##### Apache Configuration

Create a virtual host file `/etc/apache2/sites-available/student-management.conf`:

```apache
<VirtualHost *:80>
    ServerName your-domain.com
    DocumentRoot /path/to/student-management-system/public

    <Directory /path/to/student-management-system/public>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/student-management-error.log
    CustomLog ${APACHE_LOG_DIR}/student-management-access.log combined
</VirtualHost>

# For HTTPS (recommended)
<VirtualHost *:443>
    ServerName your-domain.com
    DocumentRoot /path/to/student-management-system/public

    SSLEngine on
    SSLCertificateFile /path/to/your/certificate.crt
    SSLCertificateKeyFile /path/to/your/private.key

    <Directory /path/to/student-management-system/public>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/student-management-ssl-error.log
    CustomLog ${APACHE_LOG_DIR}/student-management-ssl-access.log combined
</VirtualHost>
```

Enable the site:

```bash
sudo a2ensite student-management
sudo a2enmod rewrite ssl
sudo systemctl reload apache2
```

##### Nginx Configuration

Create a server block `/etc/nginx/sites-available/student-management`:

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/student-management-system/public;
    index index.php index.html;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}

# HTTPS configuration (recommended)
server {
    listen 443 ssl http2;
    server_name your-domain.com;
    root /path/to/student-management-system/public;
    index index.php index.html;

    ssl_certificate /path/to/your/certificate.crt;
    ssl_certificate_key /path/to/your/private.key;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/student-management /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Method 2: Docker Installation

#### Prerequisites

- Docker 20.10+
- Docker Compose 2.0+

#### Step 1: Download Docker Configuration

```bash
# Clone repository with Docker configuration
git clone https://github.com/your-repo/student-management-system.git
cd student-management-system
```

#### Step 2: Configure Environment

```bash
# Copy environment file
cp .env.docker .env

# Edit environment variables as needed
nano .env
```

#### Step 3: Build and Start Containers

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Run database migrations
docker-compose exec app php artisan migrate --seed
```

#### Docker Compose Configuration

```yaml
version: "3.8"

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
    volumes:
      - .:/var/www/html
      - ./storage:/var/www/html/storage
    environment:
      - APP_ENV=production
    depends_on:
      - database
      - redis

  database:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: root_password
      MYSQL_DATABASE: student_management
      MYSQL_USER: sms_user
      MYSQL_PASSWORD: sms_password
    volumes:
      - mysql_data:/var/lib/mysql
    ports:
      - "3306:3306"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./public:/var/www/html/public
    depends_on:
      - app

volumes:
  mysql_data:
```

## Post-Installation Setup

### Step 1: Initial Configuration

```bash
# Clear and cache configuration
php artisan config:cache
php artisan route:cache
php artisan view:cache

# For production, also run:
php artisan optimize
```

### Step 2: Admin account already created when run seeder

### Step 3: Configure Cron Jobs

Add the following to your crontab (`crontab -e`):

```bash
# Laravel Scheduler
* * * * * cd /path/to/student-management-system && php artisan schedule:run >> /dev/null 2>&1

# Backup (daily at 2 AM)
0 2 * * * cd /path/to/student-management-system && php artisan backup:run

# Queue worker restart (every hour)
0 * * * * cd /path/to/student-management-system && php artisan queue:restart
```

### Step 4: Configure Queue Workers

For production environments, set up queue workers:

```bash
# Install Supervisor
sudo apt-get install supervisor

# Create worker configuration
sudo nano /etc/supervisor/conf.d/student-management-worker.conf
```

Supervisor configuration:

```ini
[program:student-management-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /path/to/student-management-system/artisan queue:work --sleep=3 --tries=3 --max-time=3600
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=www-data
numprocs=2
redirect_stderr=true
stdout_logfile=/path/to/student-management-system/storage/logs/worker.log
stopwaitsecs=3600
```

Start the workers:

```bash
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start student-management-worker:*
```

## Security Hardening

### Step 1: SSL Certificate

```bash
# Using Let's Encrypt (Certbot)
sudo apt-get install certbot python3-certbot-apache

# For Apache
sudo certbot --apache -d your-domain.com

# For Nginx
sudo certbot --nginx -d your-domain.com
```

### Step 2: Firewall Configuration

```bash
# UFW (Ubuntu)
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable

# Fail2ban for additional security
sudo apt-get install fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

### Step 3: Database Security

```bash
# Secure MySQL installation
sudo mysql_secure_installation

# Create dedicated database user with limited privileges
mysql -u root -p
CREATE USER 'sms_user'@'localhost' IDENTIFIED BY 'strong_password';
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER ON student_management.* TO 'sms_user'@'localhost';
FLUSH PRIVILEGES;
```

## Troubleshooting

### Common Issues

#### Permission Errors

```bash
# Fix Laravel permissions
sudo chown -R www-data:www-data storage bootstrap/cache
sudo chmod -R 775 storage bootstrap/cache
```

#### Database Connection Issues

```bash
# Test database connection
php artisan tinker
DB::connection()->getPdo();
```

#### Composer Memory Issues

```bash
# Increase PHP memory limit
php -d memory_limit=2G composer install
```

#### Asset Compilation Issues

```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Log Files

Monitor these log files for issues:

- Application logs: `storage/logs/laravel.log`
- Web server logs: `/var/log/apache2/` or `/var/log/nginx/`
- PHP logs: `/var/log/php8.2-fpm.log`
- Database logs: `/var/log/mysql/error.log`

## Performance Optimization

### PHP Configuration

Optimize `php.ini` settings:

```ini
memory_limit = 512M
max_execution_time = 300
max_input_vars = 3000
upload_max_filesize = 100M
post_max_size = 100M
```

### Database Optimization

```sql
-- MySQL optimization
SET GLOBAL innodb_buffer_pool_size = 1G;
SET GLOBAL query_cache_size = 256M;
SET GLOBAL max_connections = 200;
```

### Caching Configuration

```bash
# Enable Redis for better performance
composer require predis/predis

# Update .env
CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis
```

## Backup and Maintenance

### Automated Backups

```bash
# Backup system already added
```

### Regular Maintenance

```bash
# Weekly maintenance script
#!/bin/bash
cd /path/to/student-management-system

# Clear logs older than 30 days
find storage/logs -name "*.log" -mtime +30 -delete

# Optimize database
php artisan optimize:clear
php artisan optimize

# Update composer dependencies (monthly)
composer update --no-dev --optimize-autoloader
```

Your Student Management System is now successfully installed and configured. Access the admin panel at `https://your-domain.com/admin` and begin setting up your institution's data.
