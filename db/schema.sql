create database burgers_db;

use burgers_db;

create table burgers (
id INT (10) auto_increment not null,
burger_name varchar (100) not null,
devoured boolean default false,
date timestamp,
primary key (id)
);
