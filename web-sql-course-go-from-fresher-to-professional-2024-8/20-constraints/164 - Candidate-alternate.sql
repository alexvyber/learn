-- Candidate Key and Alternate Key


-- Candidate Key

create table apple(A int,B varchar(5));
A,B -> Columns(In terms of Table concept)
A,B -> candidate Keys(In terms of Key concept)

create table apple1(A int,B varchar(5),C float);
A,B,C -> Columns(In terms of Table concept)
A,B,C -> candidate Keys(In terms of Key concept)


create table apple3(A int,B varchar(5),C float,D date);
A,B,C,D -> Columns(In terms of Table concept)
A,B,C,D -> candidate Keys(In terms of Key concept)


-- Alternate Key


create table table1(A int primary key,B varchar(5));

A -> primary key
B -> No key (Alternate Key)


create table table2(A int,B varchar(5), foreign key(A) references table1(A));

A -> Foreign Key
B -> No key (Alternate Key)


create table table3(A int,B varchar(5) primary key,C float, foreign key(A) references table1(A));

A -> Foreign Key
B -> Primary Key
C -> No key (Alternate Key)








