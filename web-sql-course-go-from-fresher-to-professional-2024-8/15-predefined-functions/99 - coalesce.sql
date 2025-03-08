-- coalesce(<column_names>,<value>)

-- ifnull(<column_name>,<value>) and colaesce() purposes are same

select * from jockey;

select coalesce(A,3),B,C from jockey;
select A,coalesce(B,3),C from jockey;
select coalesce(A,5),coalesce(B,3),C from jockey;
select coalesce(A,5),coalesce(B,3),coalesce(C,10) from jockey;


/*
if i give two columns in the coalesce() then the first column null  values will 
be replaced by the values in the second column values, but if we have null values in
both first and second columns then the null values will be replaced by the number we
give
*/

select coalesce(A,B,3),B,C from jockey;

select coalesce(A,B,5),B,C from jockey;

select coalesce(A,B,C,5),B,C from jockey;

select coalesce(A,B,C,5),coalesce(B,C,6),C from jockey;
















