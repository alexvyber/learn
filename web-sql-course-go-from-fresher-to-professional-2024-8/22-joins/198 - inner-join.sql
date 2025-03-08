-- Inner Join

-- Table 1
create table inner_table1(A int,B varchar(5));
insert into inner_table1 values(1,'A'),(2,'B'),(3,'C');
select * from inner_table1;

-- Table 2
create table inner_table2(A int,B varchar(5));
insert into inner_table2 values(1,'A'),(2,'B'),(3,'D');
insert into inner_table2 values(4,'A');
select * from inner_table2;



-- we have to decide the columns names in both table: inner_table1:A inner_table2:A

-- select <column_names> from <table1_name> inner join <Table2_name> on <common_column_names>;


select * from inner_table1 inner join inner_table2 on inner_table1.A = inner_table2.A;







