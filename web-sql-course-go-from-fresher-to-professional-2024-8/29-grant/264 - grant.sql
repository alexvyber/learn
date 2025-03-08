-- Admins have to create the username and password for the users

-- CREATE USER 'username'@'host' IDENTIFIED BY 'password';

-- IP address for server: 191.23.10.10

/*
1. User1: John -> john, john@123
2. User2: Bunny -> bunny, bunny@123
3. User3: ecourses -> ecourses, ecourses@123
4. User4: library -> library, library@123
*/



create user 'john'@'localhost' identified by 'john@123';
create user 'bunny'@'localhost' identified by 'bunny@123';
create user 'ecourses'@'localhost' identified by 'ecourses@123';
create user 'library'@'localhost' identified by 'library@123';


