-- Rollback + Delete

select * from avgs;


start transaction;
delete from avgs where A=20;
rollback;