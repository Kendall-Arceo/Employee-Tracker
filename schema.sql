DROP DATABASE IF EXISTS departments_DB;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Karceo1024!';
CREATE database departments_DB;

USE departments_DB;

CREATE TABLE department (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  title VARCHAR(30) NOT NULL,
  department VARCHAR(30) NOT NULL,
  salary INT,
  manager VARCHAR(30) NOT NULL,

  PRIMARY KEY (id)
);

INSERT INTO departments (first_name, last_name, title, department, salary, manager)
VALUES ("Kendall","Arceo","Data Analysis","Engineering", 75000, "Paul Viola"),
("Angela","Li","MySQL Database Coordinator","Engineering", 75000, "Paul Viola"),
("Aaron","Ealdama","Lead C# Database","Engineering", 75000, "Paul Viola"),
("Jordon","Grunge","Lead Systems AI","Engineering", 75000, "Paul Viola"),
("Ike","Ekwueme","Front End Devlopment","Engineering", 75000, "Paul Viola"),
("Andrea","Danao","UI/UX developer","Product Design", 80000, "Paul Viola"),
("Vincent","Tran","Cyber Security","Engineering", 75000, "Paul Viola"),
("Jude","Paredes","Assistant Recruitment","Human Resources", 75000, "Paul Viola"),
("Christiane","Dimaranan","Lead Recruitment","Human Resources", 75000, "Paul Viola"),
("David","Belleza","Robotics Division","Engineering", 75000, "Paul Viola");


-- CREATE TABLE employee_roles (
--   id INT NOT NULL,
--   manager VARCHAR(30) NOT NULL,
--   employee VARCHAR(30) NOT NULL,
  
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE employees (
--   position INT NOT NULL,
--   name VARCHAR(30) NOT NULL,
--   PRIMARY KEY (position)
-- );

SELECT * FROM departments;
-- SELECT * FROM employee_roles;
-- SELECT * FROM employees;
