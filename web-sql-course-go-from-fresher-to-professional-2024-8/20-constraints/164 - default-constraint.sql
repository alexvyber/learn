-- default <datatype value>

create table temp(A int,B varchar(5));
insert into temp(A,B) values(1,'apple');
insert into temp(A) values(2);

create table default_table(A int default 9,B varchar(5) default 'king');

insert into default_table(A,B) values(1,'hat');

insert into default_table(A) values(2);

insert into default_table(B) values('lion');

select * from default_table;


select * from temp;