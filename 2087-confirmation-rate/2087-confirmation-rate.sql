# Write your MySQL query statement below
select s.user_id, IFNULL(ROUND(SUM(c.action = 'confirmed') / COUNT(c.action), 2),0 )AS confirmation_rate 
from Signups as s
left join Confirmations as c
on s.user_id = c.user_id
group by s.user_id



