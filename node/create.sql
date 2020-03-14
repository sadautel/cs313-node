CREATE DATABASE recipeDb;


CREATE TABLE person
(
	id SERIAL NOT NULL PRIMARY KEY,
	firstName VARCHAR(50) NOT NULL,
	lastName  VARCHAR(50) NOT NULL,
	phone     VARCHAR(100) NOT NULL,
	email     VARCHAR(100) NOT NULL
);

INSERT INTO person(firstName, lastName, phone, email) VALUES
  ('Thomas'
  , 'Burton'
  , '801-530-9905'
  ,'sadautel@gmail.com'
  );

CREATE USER savannah WITH PASSWORD =  'sadautel';
GRANT SELECT, UPDATE, DELETE, INSERT ON sudoku TO jordan;
GRANT USAGE, SELECT ON SEQUENCE sudoku_id_seq TO jordan;