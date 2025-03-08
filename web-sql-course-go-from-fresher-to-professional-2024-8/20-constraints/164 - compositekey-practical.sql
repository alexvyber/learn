-- Composite Key

create table ginger(A int,B int, C int, primary key(A,B));

insert into ginger values(1,2,3),(4,5,6);

insert into ginger values(1,2,4);
insert into ginger values(1,6,4);
insert into ginger values(2,6,4);

insert into ginger values(2,6,4);

select * from ginger;


