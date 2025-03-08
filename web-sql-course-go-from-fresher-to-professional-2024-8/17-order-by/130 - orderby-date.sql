-- YEAR-MONTH-DAY

create table dateo(A date);

insert into dateo values('2024-07-21'),('2022-03-12'),('2026-04-13');
insert into dateo values('2024-03-21');
insert into dateo values('2024-03-09');

select * from dateo;

select * from dateo order by A asc;
select * from dateo order by A desc;






