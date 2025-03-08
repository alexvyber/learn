/*
Average - avg(<column_name>)

Average = sum of values / number of values

avgs: A int:1,2,3,4, B int: 1,2,3

1+2+3+4 / 4 = 10/4 = 2.5

avg(A) -> 2.5

1+2+3 / 3 = 6/3 = 2

avg(B) -> 2
*/




create table avgs(A int);

insert into avgs values(1),(2),(3),(4);


select avg(A) from avgs;




















