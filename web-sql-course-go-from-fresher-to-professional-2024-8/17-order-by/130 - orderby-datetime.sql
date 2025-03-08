-- YEAR-MONTH-DAY HOURS:MINUTES:SECONDS

create table datetimeo(A datetime);

insert into datetimeo values('2024-03-21 09:45:23'),('2023-03-21 09:45:23'),('2026-03-21 09:45:23');
insert into datetimeo values('2024-01-21 09:45:23');
insert into datetimeo values('2024-01-11 09:45:23');
insert into datetimeo values('2024-01-11 07:45:23');
insert into datetimeo values('2024-01-11 07:35:23');
insert into datetimeo values('2024-01-11 07:35:13');

select * from datetimeo;

select * from datetimeo order by A asc;

select * from datetimeo order by A desc;

