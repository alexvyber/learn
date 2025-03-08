-- Savepoint -> save + point

/*
savepoint <user_defined_name>;

Important Points:
~~~~~~~~~~~~~~~~~~

1. We can give any number of savepoints between start transaction and rollback.
2. Rollback concept starts from the bottom of line. That means ity starts from line
above roolback and ends at the start transaction line.

*/

select * from school;

start transaction;

update school set A=1000 where A=100;

savepoint spp2;

update school set A=2000 where A=200;

savepoint spp1;

update school set A=3000 where A=3;
update school set A=4000 where A=4;

rollback to spp1;

rollback to spp2;

rollback;


