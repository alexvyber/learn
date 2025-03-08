-- 1. We have to use 'order by' along with 'select' concept
/*
select <column_name> from <table_name> order by <column_name> asc/desc;

Ascending Order: Asc
Descending order: Desc

*/

create table orders(A int,B float,C varchar(5),D date,E time,F datetime);

insert into orders values(1,23.678,'apple','2024-08-11','09:34:12','2024-08-11 09:34:12');
insert into orders values(2,45.78,'ball','2023-09-12','02:45:46','2023-09-12 02:45:46');
insert into orders values(0,12.567,'cat','2021-07-12','07:34:23','2021-07-12 07:34:23');

select * from orders;

/*
order by: if we want to see the data in the column in ascending or descending order
then we have to use 'order by' concept
*/

-- Ascending Order

select * from orders order by A asc;

select * from orders order by B asc;

select * from orders order by C asc;

select * from orders order by D asc;

select * from orders order by E asc;

select * from orders order by F asc;


-- Descending Order


select * from orders;

select * from orders order by A desc;

select * from orders order by B desc;

select * from orders order by C desc;

select * from orders order by D desc;

select * from orders order by E desc;

select * from orders order by F desc;












