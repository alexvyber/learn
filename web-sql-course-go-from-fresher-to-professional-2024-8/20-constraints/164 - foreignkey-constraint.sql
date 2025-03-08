-- primary key
-- 1. If we are using primary key contraint then the values in the column must be unique

-- my question: then what is difference between unique constraint and primary key constraint

-- ***** 2. If we declare primary key in any table then only foreign key concept will possible

-- 3. Only one primary key is allowed in one table


-- Foreign Key



create table table1(A int primary key,B varchar(5));
insert into table1 values(1,'A'),(2,'B'),(3,'C');
select * from table1;

create table table2(A int,B varchar(5),foreign key(A) references table1(A));
insert into table2 values(1,'A');
insert into table2 values(9,'A');

insert into table2 values(3,'A');
insert into table2 values(10,'A');

select * from table2;