SELECT name, language, percentage from countries, languages where language = 'Slovene' and countries.id = languages.country_id order by percentage DESCSELECT COUNTRIES.name, Count(cities.country_id) as 'Number of Cities'FROM COUNTRIES, CITIES WHERE cities.country_id = COUNTRIES.ID Group By countries.name
SELECT countries.name, count(cities.name) as 'number of cities' from countries, cities where countries.id = cities.country_id group by countries.name order by count(cities.name) DESC
SELECT cities.name, cities.population from cities where cities.population > 500000 and cities.country_id = (SELECT COUNTRIES.ID from Countries where countries.name = 'Mexico') ORDER BY cities.population DESC
SELECT languages.language, languages.percentage, countries.name as 'country name' FROM languages, countries where percentage > 89 and countries.id = languages.country_id ORDER BY languages.percentage DESC
SELECT countries.name, countries.surface_area, countries.population from countries where countries.surface_area < 501 and countries.population > 100000
SELECT COUNTRIES.NAME, countries.government_form, countries.capital, countries.life_expectancy from countries where countries.government_form = 'Constitutional Monarchy'and countries.capital > 200 and countries.life_expectancy > 75
SELECT countries.name as 'country name', cities.name as 'city name', cities.district, cities.population from countries, cities where cities.district = 'Buenos Aires' and countries.id = cities.country_id and cities.population > 500000
SELECT COUNTRIES.Region, Count(countries.id) as 'number of countries' FROM COUNTRIES GROUP BY countries.region ORDER BY Count(countries.id) DESC