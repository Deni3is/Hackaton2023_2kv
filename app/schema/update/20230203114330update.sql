CREATE TABLE IF NOT EXISTS public.user
(
    id serial primary key not null,
    fio VARCHAR(100),
    divisionId int NOT NULL,
    login VARCHAR(30),
    hashPassword VARCHAR(100),
    role VARCHAR(50),
    FOREIGN KEY (divisionId) REFERENCES public.division (id) ON DELETE CASCADE
);

-- 3 Добавление в таблицу user 
insert into public.user (login,fio,divisionId,hashPassword,role) VALUES ('test1@mail.ru','Зубенко Михаил Петрович',1,'admin','Admin');
insert into public.user (login,fio,divisionId,hashPassword,role) VALUES ('test2@mail.ru','Долговязов Вячеслав Андреевич',2,'admin','Admin');
insert into public.user (login,fio,divisionId,hashPassword,role) VALUES ('test3@mail.ru','Меньшиков Владлен Ильич',3,'admin','Admin');
