create table IF NOT EXISTS public.fund
(
    id serial primary key NOT NULL,
    name VARCHAR(100),
    description VARCHAR(200),
    bankAccount VARCHAR(100)
);

-- 8 Добавление в таблицу fund

INSERT INTO public.fund (name,description,bankAccount) VALUES ( 'Дом с маяком','Детский хоспис Дом с Маяком — частное медицинское благотворительнице учреждение.','48176481764981276498726487192654');
INSERT INTO public.fund (name,description,bankAccount) VALUES ( 'Верю в чудо','Калининградский благотворительный центр Верю в чудо действует с 2008 года помогает разным детям','871568168756827685768572687265');

