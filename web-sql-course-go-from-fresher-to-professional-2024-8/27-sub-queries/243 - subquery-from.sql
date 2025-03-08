-- Subquery + From

select A from jio;

select A from avgs;

-- alias - as(nick name)
select A from (select A from avgs) as A;

/*
select A from (20,2,3,4,20,32);

A: 20,2,3,4,20,32
*/