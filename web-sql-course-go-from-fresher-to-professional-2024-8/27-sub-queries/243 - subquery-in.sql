-- Subquery - IN

create table jio(A int);
insert into jio values(24),(12),(3),(90);
select * from jio;

select A from avgs; - (A: 20,2,3,4,20,32)


select * from jio where A in (1,2,3,4,5);


select * from jio where A in (select A from avgs);


select * from jio where A in (select A from avgs where A in (select A from jio));
-- 1								2								3

														
select * from jio where A in (select A from avgs where A in (24,12,3,90));


select * from jio where A in (3);


-- 3

















