
/*
Maximum - max(<column_name>)


maxs - A int:23, 45, 102, 678, 896

max(A) - 678
max(A) - 896
*/


create table maxs(A int);

insert into maxs values(23),(45),(102),(678);

insert into maxs values(896);

select max(A) from maxs;







