-- Show views


show databases;
show tables;

-- Way 1: No need to change anything, everything is predefined
SHOW FULL TABLES WHERE table_type LIKE "%VIEW";


-- Way 2
SELECT * FROM information_schema.views WHERE table_schema = 'database_name';

SELECT * FROM information_schema.views WHERE table_schema = 'grapes';
SELECT * FROM information_schema.views WHERE table_schema = 'fruits';