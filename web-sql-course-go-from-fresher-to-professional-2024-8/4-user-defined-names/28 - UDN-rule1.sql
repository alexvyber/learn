-- Rule 1: Character set and Length

-- 1. UDN can consists of Numbers(only positive numbers, no negative numbers), Alphabets, Underscore, Dollar
-- create database $;

-- 2. UDN can have combination of all these as well
-- create database aB23_$;
-- create database aS_;
-- create database 123_$ghi;


-- 3. UDN do not only have numbers, they must combine with atleast one other category
-- create database 123k; 4
-- create database 123_; 4
-- create database 123$; 4
-- create database 123egH_$; 8


-- 4. Maximum length of UDN is 64 characters (cRyvJ7poMUvAINXthztFz9SqmWqJFIgLZcIFXMGbwhJVjzIkt4z0jVbeZgMfulLM)

-- create database Hit1; 4
-- create database cRyvJ7poMUvAINXthztFz9SqmWqJFIgLZcIFXMGbwhJVjzIkt4z0jVbeZgMfulLM123;




