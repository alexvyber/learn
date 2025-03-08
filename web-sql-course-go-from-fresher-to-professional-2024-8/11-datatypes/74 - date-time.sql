-- DATE: 1998-03-21
-- int, float, varchar(3), date

create table dates(A date);
insert into dates values('1998-03-21');
insert into dates values('2024-06-03');

select A from dates;

-- TIME: 06:21:23
-- int, float, varchar(3), date, time

create table times(A time);
insert into times values('06:21:23');
insert into times values('09:34:21');

select A from times;


-- DATETIME: 1998-03-21 06:21:23
-- int, float, varchar(3), date, time, datetime


create table datetimes(A datetime);
insert into datetimes values('1998-03-21 06:21:23');
insert into datetimes values('2023-06-03 09:23:12');
select A from datetimes;



