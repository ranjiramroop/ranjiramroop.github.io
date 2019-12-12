USE employee_managerdb;

INSERT INTO department_table (department_name)
VALUES ("Sales");

INSERT INTO department_table (department_name)
VALUES ("Engineering");

INSERT INTO department_table (department_name)
VALUES ("Finance");

INSERT INTO department_table (department_name)
VALUES ("Legal");

-- inserting 3 rows into role table --
INSERT INTO role_table (title, salary, department_id)
VALUES ("Salesperson", 80000, 1);

INSERT INTO role_table (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1);

INSERT INTO role_table (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 2);

INSERT INTO role_table (title, salary, department_id)
VALUES ("Software Engineer", 120000, 2);

INSERT INTO role_table (title, salary, department_id)
VALUES ("Accountant", 125000, 3);

INSERT INTO role_table (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 4);

INSERT INTO role_table (title, salary, department_id)
VALUES ("Lawyer", 190000, 3);

-- inserting 3 rows into employee table --
INSERT INTO employee_table (first_name, last_name, role_id, manager_id)
VALUES ("Jesse", "Ventura", 1, NULL);

INSERT INTO employee_table (first_name, last_name, role_id, manager_id)
VALUES ("Josephine", "Jumper", 1, 1);

INSERT INTO employee_table (first_name, last_name, role_id, manager_id)
VALUES ("Jack", "Johnson", 2, NULL);

INSERT INTO employee_table (first_name, last_name, role_id, manager_id)
VALUES ("Jill", "Johnston", 3, NULL);

INSERT INTO employee_table (first_name, last_name, role_id, manager_id)
VALUES ("Justin", "This", 4, NULL);

INSERT INTO employee_table (first_name, last_name, role_id, manager_id)
VALUES ("Lieve", "Roberts", 4, NULL);

INSERT INTO employee_table (first_name, last_name, role_id, manager_id)
VALUES ("Jacqueline", "Last", 2, NULL);