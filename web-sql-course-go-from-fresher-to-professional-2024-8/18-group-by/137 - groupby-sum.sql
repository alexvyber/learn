-- Group by -> sum()


select * from group_data;


select A,sum(B) from group_data group by A;

alter table group_data add column C int;

desc group_data;

insert into group_data values(1,'J',1),(2,'E',4);
insert into group_data values(1,'J',1),(2,'E',4);

select A,count(B),sum(C) from group_data group by A;

A B	C
1 A NULL
2 B NULL
3 C NULL
1 D NULL
2 U NULL
1 J 1
2 E 4
1 J 1
2 E 4

-- Ouput Before applying aggregated functions-> count() sum(), only applied group by
A	B			C
1	A,D,J,J		1,1
2	B,U,E,E		4,4
3	C			NULL

-- Output After applying aggregated functions-> count() sum() and also group by
A	B	C
1	4	2
2	4	8
3	1	NULL











