ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Karceo1024!';

INSERT INTO employees (first_name, last_name, title, department, salary, manager)
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



SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;