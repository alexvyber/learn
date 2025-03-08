-- Update View

/*
update <view_name> set <column=value> where <condition>;
update <view_name> set <column=value>;
*/


create view up_view as select A from view_table1;
select * from up_view;


update up_view set A=67 where A=1;


-- very very very important point
/*
if we update the data in the view then the data will also update in the table

How?
View - store address of data of table

*****) view store addresses that means if we want to retrieve or insert or update or delete or
any action it will go to table space in the hard disk using these addresses, that's
why what ever we do on view will perform on table also
*/




/*

Rules to NOT Update Views in SQL:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
A view is not updatable if it is based on the following:

1. GROUP BY
2. DISTINCT
3. No nested or complex queries (subqueries)
4. Aggregate functions (SUM, COUNT, etc.)
5. UNION or UNION ALL

*/


-- 1. GROUP BY
create view up_view as select A from view_table1 group by A;
select * from up_view;
update up_view set A=67 where A=2;
drop view up_view;

-- 2. DISTINCT
create view up_view as select distinct A from view_table1;
select * from up_view;
update up_view set A=67 where A=2;
drop view up_view;

-- 3. No nested or complex queries (subqueries)
create view up_view as select distinct A from view_table1 where A in (select A from view_table1);
select * from up_view;
update up_view set A=67 where A=2;
drop view up_view;

-- 4. Aggregate functions (SUM, COUNT, etc.)
create view up_view as select sum(A) from view_table1;
select * from up_view;
update up_view set A=67 where A=2;
drop view up_view;

-- 5. UNION or UNION ALL
create view up_view as select A from view_table1 union select A from view_table1;
select * from up_view;
update up_view set A=67 where A=2;
drop view up_view;

create view up_view as select A from view_table1 union all select A from view_table1;
select * from up_view;
update up_view set A=67 where A=2;
drop view up_view;





