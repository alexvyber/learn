-- Generally

create table general(A int); -- -1, 90, 56
insert into general values(-1),(90),(56);

select * from general;

show tables; 
 
-- Special Case: if decimal value: 8.79, 5.67
-- Case 1: if value after decimal point(.) is greater than or equal to 5

/*
8.79 -> 9
9.67 -> 10
4.78 -> 5
4.56 -> 5
8.56 -> 9
*/

insert into general values(8.79);
insert into general values(9.67);

insert into general values(4.78),(4.56),(8.56);

select * from general;




-- Case 2: if value after decimal point(.) is less than 5

/*
7.43 -> 7
6.23 -> 6
7.123 -> 7
8.432 -> 8
7.23 -> 7
*/

insert into general values(7.43);
insert into general values(6.23),(7.123),(8.432),(7.23);

select * from general;











