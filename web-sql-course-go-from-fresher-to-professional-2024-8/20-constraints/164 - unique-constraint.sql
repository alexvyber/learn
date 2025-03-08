-- Unique

create table table1(A int unique);

insert into table1 values(1);
insert into table1 values(2);
insert into table1 values(1);
insert into table1 values(2);



select * from table1;

