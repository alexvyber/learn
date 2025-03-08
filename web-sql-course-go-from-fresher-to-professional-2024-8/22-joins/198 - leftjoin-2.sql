-- Left Join: more than 2 tables


left_joins
left_joins1
left_joins3


create table left_joins3(A int,B varchar(5));
insert into left_joins3 values(1,'F'),(6,'P');
select * from left_joins3;


select * from left_joins left join left_joins1 on left_joins.A = left_joins1.A left join left_joins3 on left_joins1.A=left_joins3.A;


