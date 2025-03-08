-- Distinct: unique(non repeated data)
/*
A: 1,2,3
B: 1,2,3,1,2
*/

/*
create table disco(A int);
insert into disco values(1);
insert into disco values(2);
insert into disco values(3);
*/
/*
insert into disco values(1);
insert into disco values(2);
*/

-- select * from disco;


-- insert into disco values(3);

-- select distinct A from disco;




/*
create table disco_1(A int, B int);
insert into disco_1(A,B) values(1,11),(2,22),(3,33);
*/

-- insert into disco_1 values(1,12);



/*
1,11 -> distinct
1,12 -> distinct

1,11 -> duplicate(repeated data)
*/

-- insert into disco_1 values(1,11);

select distinct A,B from disco_1;



1. If we apply distinct on one column then it will only consider that column
2. If we apply distinct on more than one column then combination of values in the row
must be unique

A.  B. C
1, 11, 21
2, 22, 31
3, 33, 41

1, 11, 51
2, 22, 31




