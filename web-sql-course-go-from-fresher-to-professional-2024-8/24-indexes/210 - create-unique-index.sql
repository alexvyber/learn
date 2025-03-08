-- Create unique index


create table index_table_bat(A int,B float,C varchar(10));
insert into index_table_bat values(1,23.45,'bat');
insert into index_table_bat values(2,13.45,'cat');
insert into index_table_bat values(3,33.45,'fat');

insert into index_table_bat values(3,33.45,'fat');

delete from index_table_bat where A=3;

select * from index_table_bat;

create unique index index_bat on index_table_bat(A,B,C);
show index from index_table_bat;

insert into index_table_bat values(2,13.45,'cat');

insert into index_table_bat values(2,13.45,'bat');

/*
The combination of all values in table must be unique, but if alteast one value
in the row is different then we can called that row is unique
*/

insert into index_table_bat values(2,13.45,'bat');
insert into index_table_bat values(2,23.45,'bat');






