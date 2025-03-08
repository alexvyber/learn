/*
Addition - sum(<column_name>)

sums: A int: 1,2,3,4,5 B: 1,2,3,4,5,6

1+2+3+4+5 = 15

sum(A) -> 15

1+2+3+4+5+6 = 21

sum(B) -> 21
*/





create table sums(A int);

insert into sums values(1),(2),(3),(4),(5);

select sum(A) from sums;



