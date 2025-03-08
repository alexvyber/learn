-- Cross joins on more than 2 tables

/*
cross_joins1
cross_joins2
*/

create table cross_joins3(A int,B varchar(5));
insert into cross_joins3 values(5,'d'),(7,'u'),(9,'i');
select * from cross_joins3;


select * from cross_joins1 cross join cross_joins2 cross join cross_joins3;
