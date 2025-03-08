-- Not Null + Default


create table nd(A int not null default 10,B varchar(5));

insert into nd(A,B) values(1,'jio');

insert into nd(B) values('bsnl');

insert into nd(B) values('airte');



select * from nd;


