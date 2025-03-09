CREATE DATABASE IF NOT EXISTS users_db;
USE users_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,       
    studentID VARCHAR(50) UNIQUE NOT NULL,   
    hash_password VARCHAR(255) NOT NULL
);

