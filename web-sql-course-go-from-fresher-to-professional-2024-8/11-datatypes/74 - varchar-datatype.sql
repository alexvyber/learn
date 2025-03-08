create table fan(A varchar(3));

/*
int
float
varchar(3): maximum characters allowed in the column

example:

ok -> 2: allowed
ukg -> 3: allowed
lion -> 4: not allowed
apple -> 5: not allowed
A -> 1: allowed
*/

/*
int -> 2, 5, 6
float -> 4.56, 2.34, -9.87
varchar -> '' 'ok' 'ukg' 'lion'
*/

insert into fan values('ok');
insert into fan values('ukg');
insert into fan values('lion');
insert into fan values('apple');

insert into fan values('@');
insert into fan values('kiL&$#');
insert into fan values('K#l');

insert into fan values(K#l); -- missing single quotes


select * from fan;









