create table IF NOT EXISTS public.division
(
    id serial primary key not null,
    name VARCHAR(100),
    companyId int NOT NULL,
    FOREIGN KEY (companyId) REFERENCES public.company (id) ON DELETE CASCADE
);


-- 2 Добавление в таблицу division

insert into public.division(name,companyId) VALUES ('First division',1);
insert into public.division(name,companyId) VALUES ('Second division',1);
insert into public.division(name,companyId) VALUES ('Third division',2);


