-- Views

create table view_table1(A int,B varchar(5));
insert into view_table1 values(1,'A'),(2,'B'),(3,'C');
select * from view_table1;

drop table view_table1;

create table view_table2(C int,D date);
insert into view_table2 values(1,'2024-05-23'),(2,'2024-03-12'),(3,'2023-02-15');
select * from view_table2;

-- One Table View

-- create view <view_name> as select <column_names> from <table_names>;

create view ball_view as select A from view_table1;
select * from ball_view;
select A from ball_view;


-- Important point: we can use all concepts of select which ever we learnt till now
create view ball_view1 as select A from view_table1 where A>1;
select A from ball_view1;



-- More Than one table view (Here we have 2 tables)

create view ball_view2 as select view_table1.A,view_table2.C from view_table1,view_table2;
select A,C from ball_view2;


create view ball_view3 as select view_table1.A,view_table2.C from view_table1,view_table2 where view_table1.A = view_table2.C;
select A,C from ball_view3;
/*

view_table1			view_table2

A						C

1						1
2						2
3						3

JOIN: Cross Join

1	1
1	2
1	3

2	1
2	2
2	3

3	1
3	2
3	3

-- only the columns data
A	C
1	1
2	2
3	3


*/




