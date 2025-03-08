WHERE vs HAVING


1. WHERE Clause:
~~~~~~~~~~~~~~~~~~
Purpose: Filters rows before any groupings are made.
Applies to: Individual rows.

Example: SELECT * FROM employees WHERE salary > 50000;

2. HAVING Clause:
~~~~~~~~~~~~~~~~~~
Purpose: Filters groups based on a condition involving an aggregate function (like SUM(), COUNT(), AVG(), MAX(), MIN(), etc.).
Applies to: Groups of rows, not individual rows.

Example: SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 10;


