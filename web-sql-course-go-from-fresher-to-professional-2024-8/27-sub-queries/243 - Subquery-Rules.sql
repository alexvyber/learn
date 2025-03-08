-- SubQueries Rules


1.Subquery can be used with SELECT, UPDATE, INSERT, and DELETE statements.

select * from avgs where A in (...);

update ....;

insert .....;

delete .....;


2. A subquery can be placed in the WHERE, HAVING, FROM clauses.  

select * from avgs where A in (...);
select * from avgs having count(A) in (...);
select * from (...);


3. A subquery must always be enclosed in parentheses(small brackets).

select * from avgs where A in (...);

select * from avgs where A in (select A from avgs);


4. Subqueries typically appear on the right side of a comparison operator.

select * from avgs where A in (...);

						left	right




