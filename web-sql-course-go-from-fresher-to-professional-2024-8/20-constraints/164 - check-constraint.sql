-- check(condition)


create table check_table(A float check(A>3));

insert into check_table values(1);
insert into check_table values(2);
insert into check_table values(3);
insert into check_table values(4);
insert into check_table values(5);


select * from check_table;











