-- SubQuies - ALL

select * from jio;
select * from avgs;


-- Comparison Operator: = > < <= >= <>

select * from jio where A = all(select A from avgs);
-- (24,12,3,90,20) = all(20,2,3,4,20,32)


select * from jio where A > all(select A from avgs);
-- (24,12,3,90,20) > all(20,2,3,4,20,32)

-- 90

select * from jio where A < all(select A from avgs);
-- (24,12,3,90,20) < all(20,2,3,4,20,32)


select * from jio where A >= all(select A from avgs);
-- (24,12,3,90,20) >= all(20,2,3,4,20,32)

select * from jio where A <= all(select A from avgs);
-- (24,12,3,90,20) <= all(20,2,3,4,20,32)

select * from jio where A <> all(select A from avgs);
-- (24,12,3,90,20) <> all(20,2,3,4,20,32)
/*
24
12
90
*/













