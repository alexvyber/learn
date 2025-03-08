-- Union All (Duplicate values are allowed in this concept)


create table unions_table1(A int,B varchar(5));
insert into unions_table1 values(1,'A'),(2,'B'),(3,'C');
select * from unions_table1;

create table unions_table2(A int,B varchar(5));
insert into unions_table2 values(4,'A'),(5,'B'),(3,'C');
select * from unions_table2;


-- select <column_names> from <table1_name> UNION ALL select <column_names> from <table2_name>;


select * from unions_table1 UNION ALL select * from unions_table2;








