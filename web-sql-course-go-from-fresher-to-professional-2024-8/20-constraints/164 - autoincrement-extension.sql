-- Auto Increment - User Defined Value

/*
value will get updated by one
32+1=33
33+1=34

A auto_increment: 1,2,32, 33, 34

what happens if we do not have any value
A: NULL

Default value = 1
A: 1, 2, 3, 78, 79, 80, 234, 235

***** If there is any value available before we give NULL then auto increment takes
previous row value and will get updated by one, but from start value we have NULL
then starting value will be 1
Default value = 1


************* autoincrement will only check the immediate previous row and it will 
add 1 to only immediate previous row value and NULL will get updated by that value
A: 1, 2, 3, 78, 79, 80, 234, 235

*/



create table gg(A int primary key auto_increment);

insert into gg values();


select * from gg;

-- A auto_increment: 1






















