-- NOT IN


select * from avgs;

select * from avgs where A not in (1,2,3,4,5);

select * from avgs where A not in (1,2,3,4,5,20);

select * from avgs where A not in (1,2,3,4,5,20,32);

select * from avgs where A not in (1,3,4,5,20,32);

-- IN and NOT IN are opposite to each other