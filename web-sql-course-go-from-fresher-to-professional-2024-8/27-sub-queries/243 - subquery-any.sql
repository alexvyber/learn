-- SubQuies - ANY
-- any(random): 1,2,3 : random values

insert into jio values(20);
select * from jio;

select * from avgs;



-- Comparison Operator: = > < <= >= <>

select * from jio where A = any(select A from avgs);
-- (24,12,3,90,20) = any(20,2,3,4,20,32)


select * from jio where A > any(select A from avgs);
/*
(24,12,3,90,20) > any(20,2,3,4,20,32)

24
12
3
90
20
*/


select * from jio where A < any(select A from avgs);
/*
(24,12,3,90,20) < any(20,2,3,4,20,32)

24
12
3
20
*/

select * from jio where A >= any(select A from avgs);
/*
(24,12,3,90,20) >= any(20,2,3,4,20,32)

24
12
3
90
20

*/


select * from jio where A <= any(select A from avgs);
/*
(24,12,3,90,20) <= any(20,2,3,4,20,32)

24
12
3
20
*/

select * from jio where A <> any(select A from avgs);
/*

(24,12,3,90,20) <> any(20,2,3,4,20,32)

24
12
3
90
20

*/













