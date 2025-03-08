-- How to give priviliges(permissions) to users - john, bunny


-- GRANT privilege_name ON database_name.* TO 'username'@'host';

-- privilges: select, update, show, drop, delete .......


grant select on grapes.check_table to 'john'@'localhost';
grant select on grapes.avgs to 'john'@'localhost';


grant insert on grapes.check_table to 'john'@'localhost';
grant insert on grapes.avgs to 'john'@'localhost';



grant select,insert,update on grapes.check_table to 'john'@'localhost';

desc check_table;

show tables;

show databases;



