-- Grant previligies on multiple users at once

GRANT PREVILIGES ON database_name.* TO 'username'@'host';



GRANT PREVILIGES ON database_name.* TO 'username1'@'host','username2'@'host',...;

GRANT select, insert ON grapes.* TO 'john'@'localhost','bunny'@'localhost';