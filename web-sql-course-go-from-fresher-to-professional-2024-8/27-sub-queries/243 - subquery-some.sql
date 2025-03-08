-- SubQuery - SOME


select * from avgs;
select * from jio;


-- Comparison Operator: = > < <= >= <>

select * from jio where A = any(select A from avgs);

-- ***** ANY and SOME concepts are same, we do not even have one difference also

select * from jio where A = any(select A from avgs);
select * from jio where A = some(select A from avgs);

select * from jio where A > any(select A from avgs);
select * from jio where A > some(select A from avgs);

select * from jio where A < any(select A from avgs);
select * from jio where A < some(select A from avgs);

select * from jio where A >= any(select A from avgs);
select * from jio where A >= some(select A from avgs);

select * from jio where A <= any(select A from avgs);
select * from jio where A <= some(select A from avgs);

select * from jio where A <> any(select A from avgs);
select * from jio where A <> some(select A from avgs);

/*
1. It is comfortable to use two words for same purpose according to the situation
2. It evolved time to time so the changed the word ANY to SOME
*/




