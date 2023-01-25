DROP DATABASE if exists usersdb;

CREATE DATABASE usersdb charset utf8mb4;

USE usersdb;

create table users (
    id int primary key auto_increment,
    name varchar(255) not null
)
