******************* In one table only one auto_increment is accepted
Columns: A not null, B not null, C not null, D not null
Columns: A ,B,C auto_increment,D


Default value of auto_increment = 1

As a user i want to decide the default value - auto_increment user defined value

alter table <table_name> auto_increment = <user_defined_value>;




create table tt(A int primary key auto_increment);


alter table tt auto_increment = 235;

insert into tt values();

select * from tt;















