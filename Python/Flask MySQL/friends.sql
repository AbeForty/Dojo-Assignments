SELECT users.first_name, users.last_name, user2.first_name as friend_first_name, user2.last_name as friend_last_name FROM USERS
LEFT JOIN friendships ON friendships.user_id = users.id 
LEFT JOIN users as user2 ON friendships.friend_id =  user2.id
ORDER BY users.id ASC, user2.last_name ASC 