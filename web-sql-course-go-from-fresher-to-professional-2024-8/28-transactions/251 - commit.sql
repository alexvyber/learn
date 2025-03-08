-- Autocommit: Auto(Automatic) + Commit(Saving) -> Automatic Saving

select * from y;



-- i created the table and inserted the data and i closed the "Mysql workbench"

-- Did i save anything

-- ***** when we installed MySQL workbench the command is like below

set autocommit = 1;

set autocommit = 0;

create table z1(B int);
insert into z1 values(3);

select * from z1;

commit;















