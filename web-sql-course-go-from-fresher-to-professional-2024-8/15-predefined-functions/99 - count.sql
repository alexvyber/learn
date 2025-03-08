
/*
count -> Input: Column Output: Number of rows in that column

pdf: A int:1,2,3,4 , B float: 1,2,3,4,5,6

count(A) -> 4
count(B) -> 6

*/



create table pdf(A int, B int);

insert into pdf values(1,2),(3,4),(4,5);

select count(A),count(B) from pdf;





