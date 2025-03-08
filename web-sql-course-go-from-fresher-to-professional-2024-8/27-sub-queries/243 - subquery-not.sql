-- SubQuery - NOT Exists


select * from avgs;
select * from jio;

select * from jio where A in (select A from avgs);
select * from jio where A = any (select A from avgs);
select * from jio where A = all (select A from avgs);


create table jiko(A int);

select * from jiko;

select * from jio where not exists (select A from avgs);


select * from jio where not exists (select A from jiko);

-- A: 1,2,3,4,5 : YES, NO