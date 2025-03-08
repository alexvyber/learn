-- Order By on Multiple Columns

create table cols(A int,B varchar(10));

insert into cols values(1,'dog');
insert into cols values(3,'bat');
insert into cols values(2,'apple');

insert into cols values(1,'cat');
insert into cols values(3,'at');

select A,B from cols;

select * from cols order by A asc,B asc;


select * from cols order by A asc,B asc;







