-- Inner join : 3,4,5,6...... tables


/*
inner_table1
inner_table2
*/

create table inner_table3(A int,B varchar(5));
insert into inner_table3 values(1,'A'),(5,'H'),(6,'J');
select * from inner_table3;


select * from inner_table1;
select * from inner_table2;

insert into inner_table1 values(7,'L');
insert into inner_table2 values(7,'TY');
insert into inner_table3 values(7,'RL');

-- select <column_names> from <table1_name> inner join <table2_name> on <common_column_names> inner join <table3_name> on <common_column_names> inner join <table4_name> on <column_column_names>;


select * from inner_table1 inner join inner_table2 on inner_table1.A = inner_table2.A inner join inner_table3 on inner_table2.A = inner_table3.A;








