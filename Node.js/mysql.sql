-- 通过*把users表中所有数据查询出来
-- select * from my_db_01.users

-- 从users表中把username,password对应的数据查询出来
-- select username,password from users

-- 向users表中插入数据
-- insert into users (username,password) values ('zl','666')
-- select username,password from users

-- 更新id为3的密码为321
-- update users set password='321' where id=3
-- select * from my_db_01.users

-- 把users表中id为2的用户密码和用户状态，分别更新为admin123和1
-- update users set password='admin123',status=1 where id=2
-- select * from my_db_01.users

-- 从users表中，删除id为4的用户
-- delete from users where id=4
-- select * from my_db_01.users

-- where子句 关系运算符 >,<,=,!=,and,or 
-- select * from users where id>2
-- select username from users where id=3
-- select * from users where username!='ls'
-- select * from users where status=0 and id>0
-- select * from users where status=0 or id>0

-- order by 排序语句
-- 升序
-- select * from users order by id
-- 降序
-- select * from users order by id desc 
-- 多重排序,先按照status字段进行降序排序，再按照username的字母顺序，进行升序排序
-- select * from users order by status desc,username asc

-- count(*)函数
-- 统计状态为0用户的总数量
-- select count(*) from users where status=0

-- 使用as关键字给列起别名
-- 将统计出来的数量给列起个别名
-- select count(*) as total from users where status=0
-- select username as uname,password as upwd from users

