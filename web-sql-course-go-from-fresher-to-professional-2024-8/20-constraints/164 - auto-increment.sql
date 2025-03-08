-- Auto Increment - Auto: Automatic, Increment: Increasing

/*
1. Generally we will give space if we have more than one word in constraint example:
not null, primary key... but in case of auto increment we have to give uunderscore(_)
instead of space

2. We must have to give primary key constraint on the auto increment column

3. Auto increment increases the value by 1

*/

create table wear(A int primary key auto_increment,B float);

insert into wear(A,B) values(21,89.67);
insert into wear(A,B) values(31,109.67);

insert into wear(B) values(89.67);
insert into wear(B) values(109.67);
insert into wear(B) values(59.67);

select * from wear;










