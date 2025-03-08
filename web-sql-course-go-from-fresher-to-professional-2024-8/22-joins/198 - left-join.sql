-- Left Join


create table left_joins(A int,B varchar(5));
insert into left_joins values(1,'A'),(2,'B'),(3,'C');
select * from left_joins;


create table left_joins1(A int,B varchar(5));
insert into left_joins1 values(1,'A'),(2,'B'),(4,'C');
select * from left_joins1;


-- select <column_names> from <table1_name> left join <table2_join> on <column_names>;


select * from left_joins left join left_joins1 on left_joins.A = left_joins1.A;








