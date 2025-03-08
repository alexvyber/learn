-- Group by -> min()
/*
select * from group_data;

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


select A,B,C from group_data group by A;

A 	B			C
1. A,D,J,J		1,1
2. B,U,E,E		4,4
3. C			null
*/

select A,count(B),min(C) from group_data group by A;

/*
A	B	C
1.  4	1
2	4	4
3	1	null
*/

insert into group_data values(1,'K',3),(2,'L',8);
select * from group_data;

insert into group_data values(1,'K',0),(2,'L',3);

select A,count(B),min(C) from group_data group by A;

/*
C: first row: 1,1,3,0 -> 0
	second row: 4,4,8,3 -> 3

*/







