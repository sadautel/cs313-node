CREATE DATABASE recipeDb;

CREATE TABLE person
(
	id SERIAL NOT NULL PRIMARY KEY,
	firstName VARCHAR(50) NOT NULL,
	lastName  VARCHAR(50) NOT NULL,
	phone     VARCHAR(100) NOT NULL,
	email     VARCHAR(100) NOT NULL
);

CREATE TABLE login
(
	id SERIAL NOT NULL PRIMARY KEY,
	username VARCHAR(50) NOT NULL ,
	password VARCHAR(50) NOT NULL
);


CREATE TABLE add_recipes
( id SERIAL NOT NULL PRIMARY KEY
, account_user INT NOT NULL REFERENCES person(id)
, recipe_name VARCHAR(50) NOT NULL
, ingredients VARCHAR(100) NOT NULL
);

CREATE TABLE allergy
(allergy_id INT NOT NULL REFERENCES person(id)
, allergen VARCHAR(100) NOT NULL
);

CREATE TABLE comments
(user_id INT NOT NULL REFERENCES person(id)
, comments VARCHAR(100) NOT NULL
);

INSERT INTO person(firstName, lastName, phone, email) VALUES
  ('Savannah'
  , 'Dautel'
  , '801-530-9905'
  ,'sadautel@gmail.com'
  );

