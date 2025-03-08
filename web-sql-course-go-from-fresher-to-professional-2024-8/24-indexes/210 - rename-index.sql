-- Renaming the index

/*
Renaming the table name-> apple:bat
Renaming the column name-> A:Aunty

Renaming the index name-> index_fan:index_fan1
*/


create table index_table_fan(A int,B float,C varchar(10));
insert into index_table_fan values(1,23.45,'bat');
insert into index_table_fan values(2,13.45,'cat');
insert into index_table_fan values(3,33.45,'fat');

select * from index_table_fan;
create index index_fan on index_table_fan(A,B,C);
show index from index_table_fan;

-- alter table <table_name> rename index <old_index_name> to <new_index_name>;

alter table index_table_fan rename index index_fan to index_fan1;
show index from index_table_fan;











