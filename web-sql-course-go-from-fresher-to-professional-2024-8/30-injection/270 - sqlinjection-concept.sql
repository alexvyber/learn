-- SQL INjection


USERNAME: ecourses
PASSWORD: ecourses@123



USERNAME: ' or 1=1 --

PASSWORD: ghvghvjgvjghv


select username,password from credentials where username='username' and password='password';

select username,password from credentials where username='' or 1=1 --' and password='ghvghvjgvjghv';

username=''
or -> true
--' and password='ghvghvjgvjghv'



and
or
not



1. Prepared Statement
2. Parametrized queries


select username,password from credentials where username=? and password=?;



select username,password from credentials where username=? and password=?;

a = ' or 1=1 --
b = ghvghvjgvjghv


a1 = username from database
b1 = password from database


a = a1 and b=b1 the login





