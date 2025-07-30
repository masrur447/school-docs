# API Reference

The Student Management System provides a comprehensive RESTful API that allows you to integrate with external systems and build custom applications. This API follows REST principles and returns JSON responses.

## Authentication

### API Token Authentication

The API uses Bearer token authentication. Include your API token in the Authorization header:

```http
Authorization: Bearer your-api-token
```

### Obtaining API Tokens

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password"
}
```

**Response:**
```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "token_type": "bearer",
  "expires_in": 3600,
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "user@example.com",
    "role": "admin"
  }
}
```

## Base URL

All API requests should be made to:
```
https://your-domain.com/api/v1
```

## Response Format

All API responses follow a consistent format:

### Success Response
```json
{
  "success": true,
  "data": {
    // Response data
  },
  "message": "Operation completed successfully",
  "meta": {
    "pagination": {
      "current_page": 1,
      "total_pages": 10,
      "per_page": 15,
      "total": 150
    }
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The given data was invalid.",
    "details": {
      "email": ["The email field is required."]
    }
  }
}
```

## Students API

### List Students

```http
GET /api/v1/students
```

**Query Parameters:**
- `page` (integer): Page number for pagination
- `per_page` (integer): Number of items per page (max 100)
- `search` (string): Search by name or student ID
- `class_id` (integer): Filter by class
- `section_id` (integer): Filter by section
- `status` (string): Filter by status (active, inactive, graduated)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "student_id": "STU001",
      "first_name": "John",
      "last_name": "Doe",
      "email": "john.doe@example.com",
      "phone": "+1234567890",
      "date_of_birth": "2005-06-15",
      "gender": "male",
      "address": "123 Main St, City, State",
      "class": {
        "id": 1,
        "name": "Grade 10",
        "section": {
          "id": 1,
          "name": "A"
        }
      },
      "guardian": {
        "name": "Jane Doe",
        "phone": "+1234567891",
        "email": "jane.doe@example.com"
      },
      "status": "active",
      "admission_date": "2023-09-01",
      "created_at": "2023-08-15T10:30:00Z",
      "updated_at": "2023-08-15T10:30:00Z"
    }
  ],
  "meta": {
    "pagination": {
      "current_page": 1,
      "total_pages": 5,
      "per_page": 15,
      "total": 75
    }
  }
}
```

### Get Student Details

```http
GET /api/v1/students/{id}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "student_id": "STU001",
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "date_of_birth": "2005-06-15",
    "gender": "male",
    "address": "123 Main St, City, State",
    "profile_photo": "https://example.com/storage/photos/student1.jpg",
    "class": {
      "id": 1,
      "name": "Grade 10",
      "section": {
        "id": 1,
        "name": "A"
      }
    },
    "guardian": {
      "name": "Jane Doe",
      "phone": "+1234567891",
      "email": "jane.doe@example.com",
      "relationship": "mother"
    },
    "emergency_contact": {
      "name": "Bob Doe",
      "phone": "+1234567892",
      "relationship": "father"
    },
    "medical_info": {
      "blood_group": "O+",
      "allergies": "None",
      "medical_conditions": "None"
    },
    "academic_info": {
      "admission_number": "ADM2023001",
      "roll_number": "10A001",
      "previous_school": "ABC Elementary School"
    },
    "status": "active",
    "admission_date": "2023-09-01",
    "created_at": "2023-08-15T10:30:00Z",
    "updated_at": "2023-08-15T10:30:00Z"
  }
}
```

### Create Student

```http
POST /api/v1/students
Content-Type: application/json

{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "date_of_birth": "2005-06-15",
  "gender": "male",
  "address": "123 Main St, City, State",
  "class_id": 1,
  "section_id": 1,
  "guardian_name": "Jane Doe",
  "guardian_phone": "+1234567891",
  "guardian_email": "jane.doe@example.com",
  "guardian_relationship": "mother",
  "admission_date": "2023-09-01"
}
```

### Update Student

```http
PUT /api/v1/students/{id}
Content-Type: application/json

{
  "first_name": "John",
  "last_name": "Smith",
  "phone": "+1234567890",
  "address": "456 Oak St, City, State"
}
```

### Delete Student

```http
DELETE /api/v1/students/{id}
```

## Teachers API

### List Teachers

```http
GET /api/v1/teachers
```

**Query Parameters:**
- `page` (integer): Page number
- `per_page` (integer): Items per page
- `search` (string): Search by name or employee ID
- `department_id` (integer): Filter by department
- `status` (string): Filter by status

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "employee_id": "EMP001",
      "first_name": "Sarah",
      "last_name": "Johnson",
      "email": "sarah.johnson@school.com",
      "phone": "+1234567890",
      "department": {
        "id": 1,
        "name": "Mathematics"
      },
      "subjects": [
        {
          "id": 1,
          "name": "Algebra",
          "code": "MATH101"
        },
        {
          "id": 2,
          "name": "Geometry",
          "code": "MATH102"
        }
      ],
      "qualification": "M.Sc. Mathematics",
      "experience_years": 5,
      "joining_date": "2019-08-15",
      "status": "active",
      "created_at": "2019-08-01T10:30:00Z",
      "updated_at": "2023-08-15T10:30:00Z"
    }
  ]
}
```

### Get Teacher Details

```http
GET /api/v1/teachers/{id}
```

### Create Teacher

```http
POST /api/v1/teachers
Content-Type: application/json

{
  "first_name": "Sarah",
  "last_name": "Johnson",
  "email": "sarah.johnson@school.com",
  "phone": "+1234567890",
  "department_id": 1,
  "qualification": "M.Sc. Mathematics",
  "experience_years": 5,
  "joining_date": "2019-08-15",
  "salary": 50000,
  "address": "789 Pine St, City, State"
}
```

## Classes API

### List Classes

```http
GET /api/v1/classes
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Grade 10",
      "code": "G10",
      "description": "Tenth grade students",
      "sections": [
        {
          "id": 1,
          "name": "A",
          "capacity": 30,
          "current_strength": 28
        },
        {
          "id": 2,
          "name": "B",
          "capacity": 30,
          "current_strength": 25
        }
      ],
      "subjects": [
        {
          "id": 1,
          "name": "Mathematics",
          "code": "MATH10",
          "teacher": {
            "id": 1,
            "name": "Sarah Johnson"
          }
        }
      ],
      "created_at": "2023-08-01T10:30:00Z",
      "updated_at": "2023-08-15T10:30:00Z"
    }
  ]
}
```

## Attendance API

### Mark Attendance

```http
POST /api/v1/attendance
Content-Type: application/json

{
  "class_id": 1,
  "section_id": 1,
  "date": "2023-12-01",
  "attendance_records": [
    {
      "student_id": 1,
      "status": "present"
    },
    {
      "student_id": 2,
      "status": "absent"
    },
    {
      "student_id": 3,
      "status": "late"
    }
  ]
}
```

### Get Attendance

```http
GET /api/v1/attendance
```

**Query Parameters:**
- `class_id` (integer): Required - Class ID
- `section_id` (integer): Required - Section ID
- `date` (string): Date in YYYY-MM-DD format
- `start_date` (string): Start date for range
- `end_date` (string): End date for range
- `student_id` (integer): Specific student ID

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "date": "2023-12-01",
      "class": {
        "id": 1,
        "name": "Grade 10"
      },
      "section": {
        "id": 1,
        "name": "A"
      },
      "records": [
        {
          "student_id": 1,
          "student_name": "John Doe",
          "status": "present",
          "marked_at": "2023-12-01T09:00:00Z",
          "marked_by": {
            "id": 1,
            "name": "Sarah Johnson"
          }
        }
      ],
      "summary": {
        "total_students": 30,
        "present": 28,
        "absent": 2,
        "late": 0,
        "attendance_percentage": 93.33
      }
    }
  ]
}
```

## Exams API

### List Exams

```http
GET /api/v1/exams
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Mid-term Examination",
      "type": "midterm",
      "academic_session": "2023-2024",
      "start_date": "2023-12-01",
      "end_date": "2023-12-15",
      "classes": [
        {
          "id": 1,
          "name": "Grade 10"
        }
      ],
      "subjects": [
        {
          "id": 1,
          "name": "Mathematics",
          "max_marks": 100,
          "pass_marks": 40
        }
      ],
      "status": "scheduled",
      "created_at": "2023-11-01T10:30:00Z"
    }
  ]
}
```

### Create Exam

```http
POST /api/v1/exams
Content-Type: application/json

{
  "name": "Final Examination",
  "type": "final",
  "academic_session": "2023-2024",
  "start_date": "2024-03-01",
  "end_date": "2024-03-15",
  "class_ids": [1, 2],
  "subject_configurations": [
    {
      "subject_id": 1,
      "max_marks": 100,
      "pass_marks": 40,
      "exam_date": "2024-03-01",
      "duration": 180
    }
  ]
}
```

### Submit Marks

```http
POST /api/v1/exams/{exam_id}/marks
Content-Type: application/json

{
  "subject_id": 1,
  "class_id": 1,
  "section_id": 1,
  "marks": [
    {
      "student_id": 1,
      "obtained_marks": 85,
      "remarks": "Excellent performance"
    },
    {
      "student_id": 2,
      "obtained_marks": 72,
      "remarks": "Good work"
    }
  ]
}
```

## Reports API

### Attendance Report

```http
GET /api/v1/reports/attendance
```

**Query Parameters:**
- `class_id` (integer): Class ID
- `section_id` (integer): Section ID
- `start_date` (string): Start date (YYYY-MM-DD)
- `end_date` (string): End date (YYYY-MM-DD)
- `format` (string): Response format (json, pdf, excel)

### Performance Report

```http
GET /api/v1/reports/performance
```

**Query Parameters:**
- `exam_id` (integer): Exam ID
- `class_id` (integer): Class ID
- `subject_id` (integer): Subject ID
- `format` (string): Response format

### Fee Report

```http
GET /api/v1/reports/fees
```

**Query Parameters:**
- `class_id` (integer): Class ID
- `payment_status` (string): paid, pending, overdue
- `start_date` (string): Start date
- `end_date` (string): End date

## Webhooks

The system supports webhooks for real-time notifications:

### Available Events

- `student.created`
- `student.updated`
- `student.deleted`
- `attendance.marked`
- `exam.created`
- `marks.submitted`
- `fee.payment.received`

### Webhook Payload Example

```json
{
  "event": "student.created",
  "timestamp": "2023-12-01T10:30:00Z",
  "data": {
    "student": {
      "id": 1,
      "student_id": "STU001",
      "name": "John Doe",
      "class_id": 1,
      "section_id": 1
    }
  },
  "webhook_id": "wh_123456789"
}
```

## Rate Limiting

API requests are rate-limited to prevent abuse:

- **Authenticated requests**: 1000 requests per hour
- **Unauthenticated requests**: 100 requests per hour

Rate limit headers are included in responses:
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
```

## Error Codes

| Code | Description |
|------|-------------|
| 400 | Bad Request - Invalid request format |
| 401 | Unauthorized - Invalid or missing authentication |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource not found |
| 422 | Unprocessable Entity - Validation errors |
| 429 | Too Many Requests - Rate limit exceeded |
| 500 | Internal Server Error - Server error |

## SDKs and Libraries

### PHP SDK

```php
composer require sms/php-sdk

use SMS\Client;

$client = new Client('your-api-token');
$students = $client->students()->list(['class_id' => 1]);
```

### JavaScript SDK

```javascript
npm install sms-js-sdk

import SMS from 'sms-js-sdk';

const client = new SMS('your-api-token');
const students = await client.students.list({ class_id: 1 });
```

### Python SDK

```python
pip install sms-python-sdk

from sms import Client

client = Client('your-api-token')
students = client.students.list(class_id=1)
```

This API reference provides comprehensive documentation for integrating with the Student Management System. For additional support or custom integration requirements, please contact our development team.