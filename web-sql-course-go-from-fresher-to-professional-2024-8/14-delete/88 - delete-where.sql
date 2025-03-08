-- delete: delete will delete(remove) the data of the table

select * from apple;

delete from apple;

-- delete + where

-- 1. Select + where
-- 2. Update + where
-- 3. Delete + where

-- delete from <table_name> where <condition>;

-- delete: removes all data in the table
-- delete + where: removes only data that satisfies the condition


delete from apple where A=2;
delete from apple where A=10;
delete from apple where A>11;


select * from apple;

