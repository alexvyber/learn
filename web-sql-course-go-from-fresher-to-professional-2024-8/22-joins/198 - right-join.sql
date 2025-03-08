-- Right Join


create table right_joins1(A int,B varchar(5));
insert into right_joins1 values(1,'A'),(2,'B'),(3,'C');
select * from right_joins1;

create table right_joins2(A int,B varchar(5));
insert into right_joins2 values(1,'A'),(2,'B'),(4,'C');
select * from right_joins2;


select * from right_joins1 right join right_joins2 on right_joins1.A=right_joins2.A;