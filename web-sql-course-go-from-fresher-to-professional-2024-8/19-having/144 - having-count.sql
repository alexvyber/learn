-- having
-- ***** we have to apply the having concept only with group by concept


select * from group_data;

/*
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
1 K 3
2 L 8
1 K 0
2 L 3
*/

select A,B,C from group_data group by A;
/*
A	B			C
1 A,D,J,J,K,K.  1,1,3,0
2 B,U,E,E,L,L	4,4,8,3
3 C				NULL	
*/

select A,count(B),count(C) from group_data group by A;
/*
A	B	C
1.  6	4
2	6	4
3	1	0
*/

-- purpose of where(on any concept) and having(group by) is same
select A,count(B),count(C) from group_data group by A having count(C)>2;

/*
A	B	C
1.  6	4
2	6	4
*/



/*
where A>2

A: 1,2,3,4,5 -> 3,4,5
A: 1,2,3,4,5,6,7 -> 3,4,5,6,7
*/

select A,count(B),count(C) from group_data group by A having count(C)<2;

/*
A	B	C
3	1	0

*/












