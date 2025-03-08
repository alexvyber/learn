-- alter table: add, rename, modify, delete columns in an existing table

-- lion: A int, B int, C int  -> created: D

-- use grapes;
-- create table lion(A int,B int,C int);

-- add: D
-- alter table <table_name> add <column_name datatype>;
-- alter table grapes.lion add D int;
-- alter table grapes.lion add E int;

-- rename: E -> fan, D -> john
-- alter table <table_name> rename column <old_column_name> to <new_column_name>;
-- alter table grapes.lion rename column E to fan;
-- alter table grapes.lion rename column D to john;


-- modify: changing the datatype of column, example: int -> blob

-- alter table <table_name> modify column <column_name> <new_datatype>;
-- alter table grapes.lion modify column A blob;
-- alter table grapes.lion modify column B blob;


-- delete
-- alter table <table_name> drop column <column_name>;
-- alter table grapes.lion drop column fan;

alter table grapes.lion drop column john;






