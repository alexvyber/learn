-- UNION

-- Only one column
create table unions(A int);

insert into unions values(1);
insert into unions values(2);
insert into unions values(3);
insert into unions values(1);

select * from unions;

create table unions1(A int);

insert into unions1 values(2);
insert into unions1 values(6);
insert into unions1 values(3);
insert into unions1 values(8);

select * from unions1;


select * from unions union select * from unions1;
select * from unions union all select * from unions1;


-- More than two columns

create table unions2(A int,B varchar(5),C float);

insert into unions2 values(1,'A',8.67);
insert into unions2 values(2,'B',7.34);
insert into unions2 values(3,'V',4.32);
insert into unions2 values(1,'A',3.21);

select * from unions2;

create table unions3(A int,B varchar(5),C float);

insert into unions3 values(1,'A',8.67);
insert into unions3 values(2,'E',7.34);
insert into unions3 values(3,'V',4.32);
insert into unions3 values(1,'A',8.67);

select * from unions3;


select * from unions2 union select * from unions3;

select * from unions2 union all select * from unions3;




