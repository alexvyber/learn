

grant select,insert,update on grapes.avgs to 'john'@'localhost'; 


grant select,insert,update on grapes.avgs to 'bunny'@'localhost'; 


-- Grant All

GRANT ALL PRIVILEGES ON grapes.* TO 'john'@'localhost';


REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'john'@'localhost';




