

create table wc_exam(A int,B float,C varchar(10),D date,E time,F datetime);

insert into wc_exam values(101,23.45,'apple','2024-08-19','09:23:12','2024-08-19 09:23:12');
insert into wc_exam values(102,2343.45,'bat','2023-02-10','11:32:12','2024-08-19 09:23:12');
insert into wc_exam values(131,0.45,'cat','2024-08-11','06:12:12','2024-08-19 09:23:12');
insert into wc_exam values(10891,567893.45,'umbrella','2020-06-14','03:43:42','2024-08-19 09:23:12');
insert into wc_exam values(101231,1433.45,'okie','2024-08-19','05:23:12','2024-08-19 01:53:12');

select * from wc_exam;

select * from wc_exam where A like '1_$';
select * from wc_exam where A like '1_';
select * from wc_exam where A like '1__';
select * from wc_exam where A like '1%';
select * from wc_exam where A like '1%1';
select * from wc_exam where A like '1%31';

select * from wc_exam where C like 'a%';
select * from wc_exam where C like '%a%';
select * from wc_exam where C like '%t';

select * from wc_exam where D like '2024-%';
select * from wc_exam where D like '%19';
select * from wc_exam where D like '%08%';

select * from wc_exam where E like '%19';
select * from wc_exam where E like '%12';


select * from wc_exam where C like '__t';
select * from wc_exam where C like '%_a';






























