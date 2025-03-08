-- Delete View Data

/*
delete from <view_name> where <condition>;
delete from <view_name>;
*/


create view sample_view as select A from view_table1;

select * from sample_view;

delete from sample_view where A=1;

delete from sample_view;


-- very very very important point
if we delete the data in the view then the data will also delete from table

How?
View - store address of data of table

*****) view store addresses that means if we want to retrieve or insert or  update or delete or
any action it will go to table space in the hard disk using these addresses, that's
why what ever we do on view will perform on table also














