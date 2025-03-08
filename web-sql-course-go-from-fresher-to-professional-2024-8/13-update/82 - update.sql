-- Scenario-1: Updating all values in the column with same number
/*
updates - A: 1,2,3,4,5 -> 8,8,8,8,8
		  B: 4,5,6,7,8,9 -> 10,10,10,10,10,10
          C: 78,98,34 -> 23,23,23
*/
       

-- update <table_name> set <column_name>=<new_value>;


create table updates(A int);
insert into updates values(1),(2),(3),(4),(5);
select A from updates;

update updates set A=8;
select A from updates;

update updates set A=12;
select A from updates;




          

	

-- Scenario-2: Updating specific value in the column - using 'where' concept


