SELECT city.city_id, city.city, customer.first_name, customer.last_name, customer.email, address.address
FROM customer
JOIN address ON address.address_id = customer.address_id
JOIN city ON city.city_id = address.city_id
WHERE address.city_id = 312;
 
SELECT film.title, film.description, film.release_year, film.rating, film.special_features, category.name
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE category.name = "Comedy";

SELECT actor.actor_id, CONCAT(actor.first_name, " ", actor.last_name) as 'actor_name', film.film_id, film.title, film.description, film.release_year
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE actor.actor_id = 5;

SELECT store.store_id, customer.first_name, customer.last_name, customer.email, address.address
FROM store
JOIN customer ON customer.store_id = store.store_id
JOIN address ON customer.address_id = address.address_id
WHERE store.store_id = 1 AND (address.city_id = 1 
OR address.city_id = 42
OR address.city_id =312
OR address.city_id =459);

SELECT film.title, film.description, film.release_year, film.rating, film.special_features
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film.rating = "G" 
AND film.special_features LIKE "%behind the scenes%"
AND actor.actor_id = 15;

SELECT film.film_id, film.title, CONCAT(actor.first_name, " ", actor.last_name) as actor_name, actor.actor_id
FROM film 
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film.film_id = 369;

SELECT film.title, film.description, film.release_year, film.rating, film.special_features, category.name as 'genre'
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE film.rental_rate = 2.99
AND category.name = "Drama";

SELECT actor.actor_id, CONCAT(actor.first_name, " ", actor.last_name) as actor_name, film.title, film.description, film.release_year, film.rating, film.special_features, category.name as 'genre'
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE category.name = "Action"
AND CONCAT(actor.first_name, " ", actor.last_name) = "SANDRA KILMER";


