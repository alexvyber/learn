-- Union ALL (Extension)

-- 1. Datatypes of columns must be same
-- 2. No need to use all column names
-- 3. Number of columns must be same
-- 4. Duplicate values are allowed

create table puppy1(A int,B varchar(5),C float,D time);
insert into puppy1 values(1,'A',3.24,'03:32:14');
insert into puppy1 values(2,'B',2.86,'09:16:23');
insert into puppy1 values(3,'c',7.14,'11:52:11');

create table puppy2(A int,B varchar(5));
insert into puppy2 values(1,'A');
insert into puppy2 values(2,'B');
insert into puppy2 values(3,'c');

select * from puppy1;
select * from puppy2;


select A,B from puppy1 union all select A,B from puppy2;





