-- select <column_names> from <table_name> where <column_name> like '<pattern>';

create table wilds(A int);
insert into wilds values(101),(102),(103),(123);
select * from wilds;

create table wilds_cards(A int);
insert into wilds_cards values(1004),(1005),(123456),(1005008),(23456890);
select * from wilds_cards;


select A from wilds where A like '1__';
select A from wilds where A like '1_%';
select A from wilds where A like '1%_';

select A from wilds_cards where A like '1_%';
select A from wilds_cards where A like '1%_';
select A from wilds_cards where A like '1%_8';




