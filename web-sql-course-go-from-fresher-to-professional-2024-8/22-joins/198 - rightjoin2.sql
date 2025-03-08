-- Right Join on more than 2 tables

/*
right_joins1
right_joins2
*/

create table right_joins3(A int,B varchar(5));
insert into right_joins3 values(1,'G'),(2,'L'),(8,'F');
select * from right_joins3;


select * from right_joins1 right join right_joins2 on right_joins1.A=right_joins2.A right join right_joins3 on right_joins2.A=right_joins3.A;