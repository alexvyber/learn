-- Not Null

create table null_table(A int not null,B float);

insert into null_table(A,B) values(1,78.97);
insert into null_table(A) values(1);

insert into null_table(B) values(65.43);
insert into null_table(A,B) values(5,65.43);
insert into null_table(B) values(25.43);

select * from null_table;
















