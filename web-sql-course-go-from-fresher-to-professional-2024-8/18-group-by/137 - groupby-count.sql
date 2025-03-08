/*
count() max() min() sum() ... -> Aggregated(combining) predefined functions


count() -> it count the number of values in a column if we do not apply group by concept
			but if we apply group by concept then count() counts the number of values in the row
            
            
Example:
~~~~~~~~~

A. B
1 A,D
2 B
3 C

count(B)

A   B
1.  2
2.  1
3.  1

*/

create table group_data(A int,B varchar(5));

insert into group_data values(1,'A'),(2,'B'),(3,'C'),(1,'D');
insert into group_data values(2,'U');

select * from group_data;

-- Group By -> count()
select A,count(B) from group_data group by A;



























