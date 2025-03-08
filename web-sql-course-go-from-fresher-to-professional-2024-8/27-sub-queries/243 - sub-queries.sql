-- Sub Query or Sub Queries


-- line or statement or syntax (Technical term: Query)
select * from avgs where A in (1,2,3,4,5);

select * from avgs where A in (select A from avgs);
1								2

select * from avgs where A in (20,2,3,4,20,32);

Main Query - Dependent Query (1)
Sub Query - Independent Query (2)


-- we can give any number of queries in one line(in one query)
select * from avgs where A in (select A from avgs where A in (select A from avgs));
1								2								3


Main Query - 1, 2
Sub Query - 2, 3


select * from avgs where A in (select A from avgs where A in (select A from avgs where A in (select A from avgs)));
1								2								3								4

Main Query - 1, 2, 3
Sub Query - 2, 3, 4


select A from avgs;
