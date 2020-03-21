DROP DATABASE IF EXISTS departments_DB;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Karceo1024!';
CREATE database departments_DB;

USE departments_DB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  
  department_name VARCHAR(30) NOT NULL,
  
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT NOT NULL,
 
  title VARCHAR(30) NOT NULL,
  salary INT,
  department VARCHAR(30) NOT NULL,

  PRIMARY KEY (id)
);

CREATE TABLE employees (
  id INT NOT NULL,

  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  title VARCHAR(30) NOT NULL,
  department VARCHAR(30) NOT NULL,
  salary INT,
  manager VARCHAR(30) NOT NULL,

  PRIMARY KEY (id)
);


