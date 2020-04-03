CREATE DATABASE recipeDb;

CREATE TABLE person
(
	id SERIAL NOT NULL PRIMARY KEY,
	firstName VARCHAR(50) NOT NULL,
	lastName  VARCHAR(50) NOT NULL,
	username VARCHAR(32) NOT NULL,
    password_hash VARCHAR(500) NOT NULL
);

CREATE TABLE login
(
	id SERIAL NOT NULL PRIMARY KEY,
	fName INT NOT NULL REFERENCES person(id),
	password VARCHAR(50) NOT NULL
);


CREATE TABLE add_recipes
( id SERIAL NOT NULL PRIMARY KEY
, recipe_name VARCHAR(50) NOT NULL
, recipe_description VARCHAR(100) NOT NULL
, image_url TEXT
, prep_time VARCHAR(100) NOT NULL
, cook_time VARCHAR(100) NOT NULL
,  ingredient TEXT NOT NULL
);

CREATE TABLE allergy
(allergy_id INT NOT NULL REFERENCES person(id)
, allergen VARCHAR(100) NOT NULL
);

CREATE TABLE comments
(user_id INT NOT NULL REFERENCES person(id)
, comments VARCHAR(100) NOT NULL
);

