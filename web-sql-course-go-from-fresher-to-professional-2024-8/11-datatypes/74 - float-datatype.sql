-- Generally Decimal values: float - 3.45, 6.43, 89.67

create table floats(A float);
insert into floats values(3.45);
insert into floats values(6.43),(89.67);
select * from floats;

-- Special Case: If we give integer values: even though we declared as float and giving integer values it is storing integer value only.

insert into floats values(9);
insert into floats values(2);

select * from floats;

