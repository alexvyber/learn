-- primary key
-- 1. If we are using primary key contraint then the values in the column must be unique

-- my question: then what is difference between unique constraint and primary key constraint

-- ***** 2.



create table pk_table(A int primary key,B varchar(5));

insert into pk_table values(1,'pine');

insert into pk_table values(2,'hut');

insert into pk_table values(1,'pine');

insert into pk_table values(2,'hut');

select * from pk_table;



