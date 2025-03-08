-- Hours:Minutes:Seconds

create table timeo(A time);

insert into timeo values('12:34:56'),('11:23:12'),('10:45:26');
insert into timeo values('12:43:56');
insert into timeo values('12:43:12');

select * from timeo;

select * from timeo order by A asc;

select * from timeo order by A desc;









