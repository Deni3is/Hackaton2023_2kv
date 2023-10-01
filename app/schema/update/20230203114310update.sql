create table IF NOT EXISTS public.company
(
    id serial primary key not null,
    name VARCHAR(100),
    city VARCHAR(255)
);

-- 1 Добавление в таблицу company 

insert into public.company (name,city) VALUES ('Лукойл','Новороссийск');
insert into public.company (name,city) VALUES ('Яндекс','Москва');

