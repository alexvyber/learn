-- Same Syntax for both TABLE and VIEW


********** INSERT **********


Table:
~~~~~~~
insert into <table_name> values(<value>);
insert into <table_name> values(<value1>),(<valu2>);
insert into <table_name>(<column_names>) values(<value>);
insert into <table_name>(<column_names>) values(<value1>),(<value2>);


View:
~~~~~~
insert into <view_name> values(<value>);
insert into <view_name> values(<value1>),(<valu2>);
insert into <view_name>(<column_names>) values(<value>);
insert into <view_name>(<column_names>) values(<value1>),(<value2>);


********** DELETE **********

delete from <table_name> where <condition>;
delete from <table_name>;

delete from <view_name> where <condition>;
delete from <view_name>;


********** UPDATE **********

update <table_name> set <column=value> where <condition>;
update <table_name> set <column=value>;

update <view_name> set <column=value> where <condition>;
update <view_name> set <column=value>;



