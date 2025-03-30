CREATE DATABASE IF NOT EXISTS ${MYSQL_DATABASE};

USE ${MYSQL_DATABASE};

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,       
    studentID VARCHAR(50) UNIQUE NOT NULL,   
    hash_password VARCHAR(255) NOT NULL,
    isAdmin BOOLEAN DEFAULT FALSE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);