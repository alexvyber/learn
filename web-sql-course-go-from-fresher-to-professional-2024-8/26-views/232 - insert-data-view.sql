-- Insert Data into View

/*
insert into <view_name> values(<value>);
insert into <view_name> values(<value1>),(<valu2>);

insert into <view_name>(<column_names>) values(<value>);
insert into <view_name>(<column_names>) values(<value1>),(<value2>);
*/


create view col_view as select A from view_table1;

insert into col_view values(100);
insert into col_view values(300),(400),(500);

insert into col_view(A) values(200);
insert into col_view(A) values(600),(700),(800);

select * from col_view;



-- very very very important point

if we insert the data in the view then the data will also insert in the table

How?
View - store address of data of table

*****) view store addresses that means if we want to retrieve or insert or update or delete or
any action it will go to table space in the hard disk using these addresses, that's
why what ever we do on view will perform on table also





