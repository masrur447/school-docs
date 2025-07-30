# Getting Started

Welcome to the Student Management System! This guide will help you get up and running quickly with your new educational institution management platform.

## Prerequisites

Before installing the Student Management System, ensure your server meets the following requirements:

### System Requirements

- **PHP**: 8.2 or higher
- **Composer**: Latest version
- **Node.js**: 18.x or higher
- **NPM**: 9.x or higher
- **Database**: MySQL 8.0+ or PostgreSQL 13+
- **Web Server**: Apache 2.4+ or Nginx 1.18+

### PHP Extensions

Ensure the following PHP extensions are installed and enabled:

```bash
# Required PHP extensions
php-bcmath
php-ctype
php-curl
php-dom
php-fileinfo
php-json
php-mbstring
php-openssl
php-pcre
php-pdo
php-tokenizer
php-xml
php-zip
php-gd
php-intl
```

## Installation

### Step 1: Download the System and unzip

cd file-name

````

### Step 2: Install Dependencies

```bash
# Install PHP dependencies
composer install

# Install Node.js dependencies
npm install

# Build frontend assets
npm run build
````

### Step 3: Environment Configuration

```bash
# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate
```

### Step 4: Database Configuration

Edit the `.env` file with your database credentials:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=student_management
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

### Step 5: Database Setup

```bash
# Run database migrations
php artisan migrate --force

# Seed the database with sample data
php artisan db:seed --force

# Or run migrations and seeding together
php artisan migrate:fresh --seed
```

### Step 6: Storage Configuration

```bash
# Create symbolic link for storage
php artisan storage:link

# Set proper permissions
chmod -R 755 storage
chmod -R 755 bootstrap/cache
```

### Step 7: Shield Configuration

```bash
# Install and Setup Filament Shield
php artisan shield:generate --all
php artisan shield:super-admin --user=1
```

### Step 8: Start the Application

```bash
# Start the development server
php artisan serve

# The application will be available at http://localhost:8000
# or if you are using herd, check the herd instructions
```

## Initial Setup

### Default Admin Account

After installation, you can log in with the default administrator super-admin account:

- **Email**: admin@example.com
- **Password**: 12345678

> ⚠️ **Important**: Change the default password immediately after first login!

### First Login Steps

1. **Access the Admin Panel**: Navigate to `/admin` in your browser
2. **Login**: Use the default credentials above
3. **Change Password**: Go to Profile → Change Password
4. **Update Profile**: Complete your administrator profile information
5. **Configure Settings**: Set up basic system settings

## Basic Configuration

### General Settings

Navigate to **General Settings** to configure:

- **Institution Information**: Name, address, contact details
- **Currency**: Set default currency for fee management

### User Management

Set up additional users:

1. Go to **Access → Users**
2. Click **Create User**
3. Fill in user details and assign appropriate roles
4. Send login credentials to new users

### Academic Structure

Set up your institution's academic structure:

1. **Sessions**: Create academic years/semesters
2. **Classes**: Add grade levels or classes
3. **Sections**: Create sections within classes
4. **Subjects**: Add subjects for each class
5. **Departments**: Set up academic departments
6. **Shifts**: Set up academic shifts
7. **Designations**: Set up designations for employees

## Quick Tour

### Dashboard Overview

The main dashboard provides:

- **Student Statistics**: Total students, new admissions, attendance rates
- **Teacher Information**: Staff count, attendance, assignments
- **Academic Calendar**: Upcoming events and important dates
- **Many More**

### Navigation Structure

- **Academic Management**: Sessions, classes, subjects, assignments
- **Student Management**: Registration, profiles, attendance, ID cards
- **Teacher Management**: Staff profiles, attendance, assignments
- **Exam Management**: Exams, marks, report cards
- **Timetable**: Schedule creation and management
- **Library**: Book management and issue tracking
- **Reports**: Various analytical reports
- **Communications**: Messages, announcements, events
- **Administration**: Users, roles, system settings
- **App Settings**: Backups, application health
- **HR & Payroll**: Manage salary

## Common Tasks

### Adding a New Student

1. Navigate to **Student Management → Students**
2. Click **Create Student**
3. Fill in personal and academic information
4. Assign to appropriate class and section
5. Save and generate student ID

### Marking Attendance

1. Navigate to **Student Management → Attendance**
2. Select class, section, and date
3. Mark attendance for each student
4. Save attendance records

### Generating Reports

1. Go to **Reporting** section
2. Choose the type of report needed
3. Set date ranges and filters

## Troubleshooting

### Common Issues

**Issue**: White screen or 500 error
**Solution**: Check file permissions and ensure storage directories are writable

**Issue**: Database connection error
**Solution**: Verify database credentials in `.env` file

**Issue**: Assets not loading
**Solution**: Run `npm run build` and `php artisan storage:link`

**Issue**: Email not sending
**Solution**: Configure mail settings in `.env` file

### Getting Help

- **Documentation**: Comprehensive guides available in this documentation
- **Community Forum**: Join our community for peer support
- **Issue Tracker**: Report bugs on GitHub
- **Professional Support**: Contact us for enterprise support

## Next Steps

Now that your system is installed and configured:

1. **Explore Features**: Familiarize yourself with all available modules
2. **Import Data**: Import existing student and teacher data if available
3. **Train Users**: Provide training to staff members
4. **Customize**: Adjust settings to match your institution's needs
5. **Backup**: Set up regular backup procedures

## Security Recommendations

- Change all default passwords
- Enable two-factor authentication
- Regular system updates
- Implement proper backup procedures
- Monitor system logs regularly
- Use HTTPS in production
- Restrict admin access to trusted IPs

Congratulations! Your Student Management System is now ready to use. Explore the various features and modules to see how they can streamline your institution's operations.
