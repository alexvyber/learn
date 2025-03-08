-- Alias

/*
Orginal Name - Nick Name (Alias - In sql nickname is nothing but 'Alias')

1. Peter - pat
2. John - kook
3. Pradeep - chintu

Alias: Purpose of Alias is to give nick name to (User Defined Names)
~~~~~~~

Table - Apple(Original Name) - App(Nick Nmae)
Table - Banana(Original Name) - Bunty(Nick Name)

Column - A(Apple) (Original Name) - At(Nick Name)
Column - B(Banana) (Original Name) - Bat(Nick Name)
*/



-- Alias -> as




select * from apple;

-- Whenever we use nick names, the nick name will print on the output area even though
-- we have original name

select A as At from apple as App;

select * from banana;

select Aunty as lucky from banana;

select Aunty from banana as bunty;


-- Important Point: 
-- 1. If nick name contains space then we have to use double quotes(" ")
-- 2. Spaces for nick names only allowed in column names but not in table names

select A as "At king" from apple as "App king";


select B as "bonda bunty" from banana as "bunty jio";












