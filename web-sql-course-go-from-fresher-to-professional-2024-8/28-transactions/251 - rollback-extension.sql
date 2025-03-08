-- Rollback concept extension

select * from school;

start transaction;
update school set A=30 where A=3;
update school set A=40 where A=4;
update school set A=100 where A=10;
rollback;

