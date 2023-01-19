CREATE TABLE users (
    id int primary key auto_increment,
    email varchar (100) not null unique,
    password_hash varchar(1000),
    full_name varchar(100)
);

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    status VARCHAR(200) NOT NULL,
    type ENUM('nonfiction', 'fiction') NOT NULL,
    LIMIT 1, 20
);