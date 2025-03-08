-- Cross Join


create table cross_joins1(A int,B varchar(5));
insert into cross_joins1 values(1,'A'),(2,'B'),(3,'C');
select * from cross_joins1;

create table cross_joins2(A int,B varchar(5));
insert into cross_joins2 values(1,'A'),(2,'B'),(8,'C');
select * from cross_joins2;

-- select <column_name> from <table1_name> cross join <table2_name>;

select * from cross_joins1 cross join cross_joins2;