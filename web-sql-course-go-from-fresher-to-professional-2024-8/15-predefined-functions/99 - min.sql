/*
Minimum - min(<column_name>)

mins A int:1,2,3,4,5 B: 34,67,23,12,91


min(A) -> 1

min(B) -> 12
*/


create table mins(A int);

insert into mins values(1),(2),(3),(4);

select min(A) from mins;







