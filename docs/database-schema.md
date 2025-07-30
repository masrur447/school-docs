# Database Schema

The Student Management System uses a MySQL database with the following schema:

**Students Table**

| Column Name   | Data Type              | Description                                    |
| ------------- | ---------------------- | ---------------------------------------------- |
| id            | int                    | Unique student identifier                      |
| name          | varchar(255)           | Student full name                              |
| email         | varchar(255)           | Student email address                          |
| date_of_birth | date                   | Student date of birth                          |
| gender        | enum('male', 'female') | Student gender                                 |
| address       | text                   | Student address                                |
| phone_number  | varchar(255)           | Student phone number                           |
| created_at    | timestamp              | Timestamp when student record was created      |
| updated_at    | timestamp              | Timestamp when student record was last updated |

**Teachers Table**

| Column Name   | Data Type              | Description                                    |
| ------------- | ---------------------- | ---------------------------------------------- |
| id            | int                    | Unique teacher identifier                      |
| name          | varchar(255)           | Teacher full name                              |
| email         | varchar(255)           | Teacher email address                          |
| date_of_birth | date                   | Teacher date of birth                          |
| gender        | enum('male', 'female') | Teacher gender                                 |
| address       | text                   | Teacher address                                |
| phone         | varchar(255)           | Teacher phone number                           |
| created_at    | timestamp              | Timestamp when teacher record was created      |
| updated_at    | timestamp              | Timestamp when teacher record was last updated |

**Subjects Table**

| Column Name | Data Type    | Description                                    |
| ----------- | ------------ | ---------------------------------------------- |
| id          | int          | Unique subject identifier                      |
| name        | varchar(255) | Subject name                                   |
| created_at  | timestamp    | Timestamp when subject record was created      |
| updated_at  | timestamp    | Timestamp when subject record was last updated |

**Classes Table**

| Column Name | Data Type    | Description                                  |
| ----------- | ------------ | -------------------------------------------- |
| id          | int          | Unique class identifier                      |
| name        | varchar(255) | Class name                                   |
| subject_id  | int          | Foreign key referencing the subjects table   |
| teacher_id  | int          | Foreign key referencing the teachers table   |
| created_at  | timestamp    | Timestamp when class record was created      |
| updated_at  | timestamp    | Timestamp when class record was last updated |

**Grades Table**

| Column Name | Data Type    | Description                                  |
| ----------- | ------------ | -------------------------------------------- |
| id          | int          | Unique grade identifier                      |
| student_id  | int          | Foreign key referencing the students table   |
| class_id    | int          | Foreign key referencing the classes table    |
| grade       | decimal(4,2) | Student grade                                |
| created_at  | timestamp    | Timestamp when grade record was created      |
| updated_at  | timestamp    | Timestamp when grade record was last updated |
