-- drop database if exists burgers_db;

-- create database burgers_db;

use uczq7s8mmrrg7l3n;

create table burgers (
id INT (10) auto_increment not null,
burger_name varchar (100) not null,
devoured boolean default false,
primary key (id)
);
