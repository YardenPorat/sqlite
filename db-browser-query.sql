CREATE TABLE PRODUCTS(
ID INT PRIMARY KEY NOT NULL,
TITLE TEXT NOT NULL,
PRICE REAL,
RATING INT NOT NULL
);

INSERT INTO PRODUCTS (ID,TITLE,PRICE,RATING)
VALUES (1, 'Soap', 32, 98 );
INSERT INTO PRODUCTS (ID,TITLE,PRICE,RATING)
VALUES (2, 'Shampoo', 25, 90 );
INSERT INTO PRODUCTS (ID,TITLE,PRICE,RATING)
VALUES (3, 'Conditioner', 23, 93 );
INSERT INTO PRODUCTS (ID,TITLE,PRICE,RATING)
VALUES (4, 'Rubber Duck', 10, 100 );
INSERT INTO PRODUCTS (ID,TITLE,PRICE,RATING)
VALUES (5, 'Bubble Soap', 20, 95 );

UPDATE PRODUCTS 
SET RATING = 97
WHERE ID=2;

DELETE FROM PRODUCTS
WHERE ID=5;

