-- Parent Table and Child Table

As a child we depends on our parents




create table table1(A int primary key,B varchar(5)); 

create table table2(A int,B varchar(5), foreign key(A) references table1(A));

Table1 - Parent Table
Table2 - Child table



create table table1(A int primary key,B varchar(5)); 

create table table2(A int,B varchar(5) primary key, foreign key(A) references table1(A));

create table table3(A int,B varchar(5), foreign key(A) references table2(B));


Parent Tables - Table1, Table2
Child Table - Table2, Table3


create table table1(A int primary key,B varchar(5)); 

create table table2(A int,B varchar(5) primary key, foreign key(A) references table1(A));

create table table3(A int primary key,B varchar(5), foreign key(A) references table2(B));

create table table4(A int,B varchar(5), foreign key(A) references table3(A));

Parent Tables - Table1, Table2, Table3
Child Tables - Table2, Table3, Table4


create table table1(A int primary key,B varchar(5)); 

create table table2(A int,B varchar(5) primary key, foreign key(A) references table1(A));

create table table3(A int primary key,B varchar(5), foreign key(A) references table2(B));

create table table4(A int,B varchar(5) primary key, foreign key(A) references table3(A));

create table table5(A int,B varchar(5), foreign key(A) references table4(B));

Parent Tables - Table1, Table2, Table3, Table4
Child Tables - Table2, Table3, Table4, Table5


