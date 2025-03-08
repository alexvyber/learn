-- Comparison operators: =  >  <  >=  <=  <>


create table ops(A int);
insert into ops values(1),(2),(3),(4);
insert into ops values(1);
select * from ops;

-- 1. where

select A from ops where A=2;
select A from ops where A>2;
select A from ops where A<2;
select A from ops where A>=2;
select A from ops where A<=2;
select A from ops where A<>2;

-- 2. Having

select count(A) from ops group by A having count(A)=2;

/*
Ouput only after group by:

1,1 : 2
2 : 1
3 : 1
4 : 1

*/

select count(A) from ops group by A having count(A)>2;

/*
Ouput only after group by:

no condition is satisfying
1,1 : 2
2 : 1
3 : 1
4 : 1

*/


select count(A) from ops group by A having count(A)<2;

/*
Ouput only after group by:


1,1 : 2
2 : 1
3 : 1
4 : 1

*/


select count(A) from ops group by A having count(A)>=2;

/*
Ouput only after group by:


1,1 : 2
2 : 1
3 : 1
4 : 1

*/

select count(A) from ops group by A having count(A)<=2;

/*
Ouput only after group by:


1,1 : 2
2 : 1
3 : 1
4 : 1

*/

select count(A) from ops group by A having count(A)<>2;

/*
Ouput only after group by:


1,1 : 2
2 : 1
3 : 1
4 : 1

*/
