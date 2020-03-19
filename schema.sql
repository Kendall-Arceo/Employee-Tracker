DROP DATABASE IF EXISTS departments_DB;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Karceo1024!';
CREATE database departments_DB;

USE departments_DB;

CREATE TABLE department (
  position INT NOT NULL,
  team VARCHAR(30) NOT NULL,

  PRIMARY KEY (position)
);

CREATE TABLE employee_roles (
  position INT NOT NULL,
  manager VARCHAR(30) NOT NULL,
  employee VARCHAR(30) NOT NULL,
  
  PRIMARY KEY (position)
);

CREATE TABLE employees (
  position INT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (position)
);

SELECT * FROM departments;
SELECT * FROM employee_roles;
SELECT * FROM employees;
