-- Create Index
-- 1. Purpose of the index concept is to retrieve the data from table fastly
-- 2. We have to create index on columns only


-- create index <index_name> on <table_name>(<column_names>);

create table index_table(A int,B float,C varchar(10));
insert into index_table values(1,23.45,'bat');
insert into index_table values(2,13.45,'cat');
insert into index_table values(3,33.45,'fat');

select * from index_table;


create table index_table_11(A int,B float,C varchar(10));
insert into index_table_11 values(1,23.45,'bat');
insert into index_table_11 values(2,13.45,'cat');
insert into index_table_11 values(3,33.45,'fat');

select * from index_table_11;



-- Scenario 1: On All Columns
select * from index_table;
create index index_for_table1 on index_table(A,B,C);
select * from index_table;

Duration: 0.00066 sec / Fetch Time: 0.000016 sec -> Before creating the index
Duration: 0.00063 sec / Fetch Time: 0.000014 sec -> After creating Index



-- Scenario 2: Only on some columns
select * from index_table_11;
create index index_for_table11 on index_table_11(A,B);
select * from index_table_11;


Duration: 0.00082 sec / Fetch Time: 0.000012 sec -> Before creating index
Duration: 0.00067 sec / Fetch Time: 0.000013 sec -> After creating index

****** Important point: If we apply index concept on all columns then definetly fetch time
after creating index will be low compare to before creating the index but if we apply 
index concept only on some columns then there is no guarentee of fetch time










