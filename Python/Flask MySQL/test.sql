SELECT * FROM USERS;
SELECT * FROM FAVES;
SELECT * FROM FOLLOWS;
SELECT * FROM TWEETS;
SELECT * FROM users;
SELECT first_name 
FROM users;
SELECT first_name, last_name
FROM users;
SELECT first_name
FROM users
WHERE id = 2;
SELECT last_name
FROM users
WHERE id = 2 OR id = 3;
SELECT *
FROM users
WHERE id > 2;
SELECT *
FROM users
WHERE id <= 3;
SELECT * 
FROM users
WHERE first_name LIKE "%e";
SELECT * 
FROM users
WHERE first_name LIKE "K%";
SELECT *
FROM users
ORDER BY birthday DESC;
SELECT *
FROM users
ORDER BY birthday ASC;
SELECT *
FROM users
WHERE first_name LIKE "%e"
ORDER BY birthday DESC;
SELECT first_name
FROM users
ORDER BY first_name;