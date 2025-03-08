-- Group by -> max()

select * from group_data;

select A,count(B),max(C) from group_data group by A;

/*
C: first row: 1,1,3,0 -> 3
	second row: 4,4,8,3 -> 8
*/