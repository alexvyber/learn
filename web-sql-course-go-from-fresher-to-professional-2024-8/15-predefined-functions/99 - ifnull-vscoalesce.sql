-- ifnull() vs coalesce()

ifnull(<column_name>,<value>)

ifnull() only accepts one column if there are any null values in that column then 
that null values will be replaced by value we given

coalesce(<column_names>,<value>) -> coal + esc + e

colaesce() accepts one or more than one column names if there are any null values 
in then first column it will check second column even if we have null values in second 
column also then it will check third column and so on, if all columns have null values
then the null values will be replaced by value we given