
PRI - Primary Key
MUL - Multiple Columns(Foreign Key)
UNI - Unique

create table table1(A int primary key,B varchar(5));

create table table2(A int,B varchar(5), foreign key(A) references table1(A));

create table table3(A int,B varchar(5) primary key,C float, foreign key(A) references table1(A));

create table table4(A int,B varchar(5) primary key,C float unique, foreign key(A) references table1(A));


desc table1;
desc table2;
desc table3;
desc table4;


















