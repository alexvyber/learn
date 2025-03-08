-- SubQuery - Exists


select * from avgs;
select * from jio;

select * from jio where A in (select A from avgs);
select * from jio where A = any (select A from avgs);
select * from jio where A = all (select A from avgs);

/*
If some data is coming as output from subquery then it is true and we do not what
data is coming in the output, we only want whether data is coming or not
*/

create table jiko(A int);

select * from jiko;

select * from jio where exists (select A from avgs);
select * from jio where exists (select A from jiko);


-- A: 1,2,3,4,5 : YES, NO