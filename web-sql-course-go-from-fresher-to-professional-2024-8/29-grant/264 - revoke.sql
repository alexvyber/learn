-- Revoke(reverse) Previliges


grant insert,select,update on fruits.orange to 'john'@'localhost';

-- REVOKE privilege_name ON database_name.table_name FROM 'username'@'host';

revoke insert,select,update on fruits.orange from 'john'@'localhost';

revoke select,update on fruits.orange from 'john'@'localhost';


