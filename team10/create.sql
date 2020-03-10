CREATE TABLE person
( id         SERIAL       NOT NULL PRIMARY KEY
, first_name VARCHAR(50)  NOT NULL
, last_name  VARCHAR(50)  NOT NULL
, birth_date VARCHAR(100)  NOT NULL
);

CREATE TABLE relationship 
(relationship INT NOT NULL REFERENCES person(id)
);

INSERT INTO person(first_name, last_name, birth_date) VALUES
                  ('Savannah'
                  ,'Dautel'
                  , '04/08/1997'
                  ),
                  ('Andrew'
                  ,'Dautel'
                  , '04/06/1992'
                  )
                  
