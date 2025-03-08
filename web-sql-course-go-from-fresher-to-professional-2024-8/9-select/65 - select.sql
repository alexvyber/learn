-- Scenario 1: See only wanted columns data
-- lion: A, B, C, D

-- select <column_name> from <table_name>;
-- select A from apple;

/*
use grapes;
create table oats(A int, B int, C int, D int);
insert into oats values(1,2,3,4),(11,12,13,14),(21,22,23,24);
*/

-- select B,D from oats;


-- Scenario 2: See all columns data: Two ways 

-- select <column_names> from <table_name>;
-- 1) Using Column Names 
-- select A,B,C,D from oats; -- NO

-- 2) Using *

select * from oats;








