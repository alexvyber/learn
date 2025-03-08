-- select <column_names> from <table_name> where <column_name> like '<pattern>';


create table wilds(A int);

insert into wilds values(101),(102),(103),(123);

select * from wilds;

select A from wilds where A like '1%';
select A from wilds where A like '%1';
select A from wilds where A like '1%2';
select A from wilds where A like '%3';
select A from wilds where A like '10%';
select A from wilds where A like '%23';










