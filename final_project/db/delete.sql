CREATE TABLE create_account
( id SERIAL NOT NULL PRIMARY KEY
, first_name VARCHAR(50) NOT NULL
, last_name VARCHAR(50) NOT NULL
, email VARCHAR(100) NOT NULL
);

CREATE TABLE login
( name INT NOT NULL REFERENCES create_account(id)
, username VARCHAR(100) NOT NULL
, password VARCHAR(100) NOT NULL
);

CREATE TABLE add_recipes
( id SERIAL NOT NULL PRIMARY KEY
, user INT NOT NULL REFERENCES create_account(id)
, r_name VARCHAR(50) NOT NULL
, ingredients VARCHAR(100) NOT NULL
, photos
);

CREATE TABLE allergens
(rec INT NOT NULL REFERENCES create_account(id)
, allergen VARCHAR(100) NOT NULL
);

CREATE TABLE comments
(person_name INT NOT NULL REFERENCES create_account(id)
, comments VARCHAR(100) NOT NULL
);