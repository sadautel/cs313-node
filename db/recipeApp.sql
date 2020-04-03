DROP TABLE IF EXISTS auser_tag;
DROP TABLE IF EXISTS auser_recipe;
DROP TABLE IF EXISTS recipe_tag;
DROP TABLE IF EXISTS tag;
DROP TABLE IF EXISTS recipe;
DROP TABLE IF EXISTS auser;

CREATE TABLE auser (
id SERIAL NOT NULL PRIMARY KEY,
  fname VARCHAR(100) NOT NULL,
  lname VARCHAR(100) NOT NULL,
  uname VARCHAR(32) NOT NULL,
  pword_hash VARCHAR(500) NOT NULL
);

CREATE TABLE recipe (
  id SERIAL NOT NULL PRIMARY KEY,
  category VARCHAR(100) NOT NULL, 
  title VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  prep_time VARCHAR(50) NOT NULL,
  cook_time VARCHAR(50) NOT NULL,
  ingredient TEXT [] NOT NULL, 
  method TEXT [] NOT NULL
);

CREATE TABLE tag (
  id SERIAL NOT NULL PRIMARY KEY,
  title VARCHAR(100) NOT NULL
);

CREATE TABLE recipe_tag (
  recipe_id INT REFERENCES recipe(id),
  tag_id INT REFERENCES tag(id)
);

CREATE TABLE auser_recipe(
  auser_id INT REFERENCES auser(id),
  recipe_id INT REFERENCES recipe(id)
);

CREATE TABLE auser_tag (
  tag_id INT REFERENCES tag(id),
  auser_id INT REFERENCES auser(id)
);
 
INSERT INTO recipe (title, category, description, ingredient, prep_time, cook_time, method)
 VALUES (
  'Spaghetti',
  'Dinner',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget urna turpis. Nulla ullamcorper neque et orci pulvinar venenatis. Fusce in vestibulum lectus. Fusce tempus nisl vel risus mattis scelerisque. Praesent blandit sed nisl mattis suscipit. Sed at congue mi. Integer tristique nulla eu diam fringilla, id euismod augue fermentum. Sed luctus feugiat arcu non congue. Quisque ullamcorper viverra lorem, et sodales ex aliquam in. Suspendisse ullamcorper euismod risus non elementum. Quisque eu ligula semper, tempor turpis sit amet, bibendum eros. Duis tincidunt leo sed risus convallis euismod vitae cursus sem. Morbi eu aliquam lectus, sed venenatis ligula. Phasellus sollicitudin egestas ipsum eu maximus. Nam commodo, purus vitae facilisis luctus, eros quam ornare arcu, sit amet semper dui lacus malesuada turpis.',
  ARRAY [
    'pasta',
    'tomato sauce',
    'sausage'
  ],
  '5 mins',
  '20 mins',
  ARRAY [
    'Bring water to boil.',
    'Add pasta to boiling water and cook for 12 minutes.',
    'Brown sausage and add to sauce.',
    'serve.'
  ]
);

INSERT INTO recipe (title, category, description, ingredient, prep_time,cook_time, method) 
VALUES (
  'Chili',
  'Dinner',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget urna turpis. Nulla ullamcorper neque et orci pulvinar venenatis. Fusce in vestibulum lectus. Fusce tempus nisl vel risus mattis scelerisque. Praesent blandit sed nisl mattis suscipit. Sed at congue mi. Integer tristique nulla eu diam fringilla, id euismod augue fermentum. Sed luctus feugiat arcu non congue. Quisque ullamcorper viverra lorem, et sodales ex aliquam in. Suspendisse ullamcorper euismod risus non elementum. Quisque eu ligula semper, tempor turpis sit amet, bibendum eros. Duis tincidunt leo sed risus convallis euismod vitae cursus sem. Morbi eu aliquam lectus, sed venenatis ligula. Phasellus sollicitudin egestas ipsum eu maximus. Nam commodo, purus vitae facilisis luctus, eros quam ornare arcu, sit amet semper dui lacus malesuada turpis.',
  ARRAY [
    'beans',
    'tomatos',
    'ground beef',
    'spices'
  ],
  '5 mins',
  '30 mins',
  ARRAY [
    'Add all ingredients to pot.',
    'Bring to boil and simmer for 20 minutes.',
    'serve.'
  ]
 
);

INSERT INTO tag (title) VALUES ('Dinner');
INSERT INTO tag (title) VALUES ('Italian');

INSERT INTO recipe_tag VALUES (1, 1);
INSERT INTO recipe_tag VALUES (1, 2);