-- Drop index

/*
Drop database -> deleting the databases
Drop table -> deleting the table

Drop index -> deleting the index
*/


-- alter table <table_name> drop index <index_name>;

show index from index_table_fan;
alter table index_table_fan drop index index_fan1;
show index from index_table_fan;
