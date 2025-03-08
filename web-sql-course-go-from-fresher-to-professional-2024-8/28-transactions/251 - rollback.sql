-- Rollback (Undo) -> reversing the actions

-- windows: ctrl + Z Mac: command + Z


create table school(A int);
insert into school values(1),(2),(3),(4);
select * from school;


start transaction;
update school set A=20 where A=2;
rollback;











