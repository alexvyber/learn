-- ifnull(<column_name>,<value>) -> if + null


-- ifnull(A,9)

create table jockey(A int,B int);
insert into jockey values(1,11),(2,22),(3,33);
select * from jockey;

insert into jockey(B) values(1),(2),(3);

select ifnull(A,9),B from jockey;

select ifnull(A,3),B from jockey;

-- ***** values are replaced temporarily only on the output area but permanent values are NULL  only



