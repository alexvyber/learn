-- apple: A-int

/*
use grapes;
create table apple(A int);
*/


-- insert one row with one query
-- Scenario 1: With out column names
-- insert into <table_name> values(<value>);
-- insert into apple values(1);
-- insert into apple values(2);



-- Scenario 2: With column name
-- insert into <table_name>(<column_name>) values(<value>);
-- insert into apple(A) values(3);
-- insert into apple(A) values(4);



-- insert more than one row(value) with one query

-- Scenario 1: With out column names

-- insert into <table_name> values(<value1>),(<value2>),(<value3>),(<value4>);
-- insert into apple values(5),(6),(7),(8);



-- Scenario 2: With column name

-- insert into <table_name>(<column_name>) values(<value1>),(<value2>),(<value3>);

insert into apple(A) values(9),(10),(11),(12),(13);


