-- With Recursive

WITH RECURSIVE cte_name AS (
    -- Anchor member (initial query)
    SELECT column1, column2, ...
    FROM table_name
    WHERE initial_condition
    
    UNION ALL / UNION
    
    -- Recursive member (recursive query)
    SELECT column1, column2, ...
    FROM cte_name
    WHERE recursive_condition
)
SELECT * FROM cte_name;


WITH RECURSIVE inct_cte AS (
    -- Anchor member: 
    SELECT 1 AS n
    
    UNION ALL
    
    -- Recursive member: Compute factorial iteratively
    SELECT n + 1
    FROM inct_cte
    WHERE n < 5  -- Termination condition, for example, calculating factorial up to 5
)
SELECT * FROM inct_cte;

/*
n= 1

n = 1 , 1+1 = 2

n = 2, 2+1 = 3

n = 3, 3+1 = 4

n=4, 4+1 = 5

n=5

*/





