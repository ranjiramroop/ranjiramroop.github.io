DROP DATABASE IF EXISTS employee_managerdb;
CREATE database employee_managerdb;

USE employee_managerdb;

CREATE TABLE employee_table (
  ID INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (role_id) REFERENCES role_table (ID),
  FOREIGN KEY (manager_id) REFERENCES employee_table (ID)
);

CREATE TABLE department_table (
  ID INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(100) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE role_table (
  ID INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  salary INT NOT NULL,
  department_ID INT NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (department_ID) REFERENCES department_table (ID)
);
