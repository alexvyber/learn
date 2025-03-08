-- group by -> avg() average

select * from group_data;

/*

average = sum of values / number of values

C: first row: 1,1,3,0 -> 1+1+3+0/4 = 5/4 = 1.25
	second row: 4,4,8,3 -> 4+4+8+3/4 = 19/4 = 4.75
*/


select A,count(B),avg(C) from group_data group by A;


