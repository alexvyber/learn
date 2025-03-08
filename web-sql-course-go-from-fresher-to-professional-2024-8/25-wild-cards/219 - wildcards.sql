-- select <column_names> from <table_name> where <column_name> like '<pattern>';


create table wilds_cards(A int);
insert into wilds_cards values(1004),(1005),(123456),(1005008),(23456890);
select * from wilds_cards;

select A from wilds_cards where A like '1__4';
select A from wilds_cards where A like '1__5';
select A from wilds_cards where A like '123__6';
select A from wilds_cards where A like '123___';
select A from wilds_cards where A like '103___';
select A from wilds_cards where A like '1___';

