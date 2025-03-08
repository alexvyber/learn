-- Where
select * from jio where A in (select A from avgs);
select * from jio where A = any (select A from avgs);
select * from jio where A = some (select A from avgs);
select * from jio where A = all (select A from avgs);
select * from jio where exists (select A from avgs);
select * from jio where not exists (select A from avgs);


-- Having

-- Aggregated Functions: count() sum() min() max( avg()

select * from jio group by A having sum(A) in (select A from avgs);
select * from jio group by A having sum(A) = any (select A from avgs);
select * from jio group by A having sum(A) = some (select A from avgs);
select * from jio group by A having sum(A) = all (select A from avgs);
select * from jio group by A having exists (select A from avgs);
select * from jio group by A having not exists (select A from avgs);






