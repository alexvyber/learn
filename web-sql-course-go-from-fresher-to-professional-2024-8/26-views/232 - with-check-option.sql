-- WITH CHECK OPTION
/*
check constraint - check(condition): check(A>2) - when we create columns there we 
have to use constraints
*/

create view chk_view as select A from view_table1 where A>200 with check option;
select * from chk_view;

insert into chk_view values(100);
insert into chk_view values(300);
insert into chk_view values(150);
