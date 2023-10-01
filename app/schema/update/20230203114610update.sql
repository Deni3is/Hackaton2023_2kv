create table IF NOT EXISTS public.activitykind
(
    id serial primary key NOT NULL,
    name VARCHAR(100)
);


-- 5 Добавление в таблицу activitykind

INSERT INTO public.activitykind (name) VALUES ( 'Бег');
INSERT INTO public.activitykind (name) VALUES ( 'Ходьба');
INSERT INTO public.activitykind (name) VALUES ( 'Плавание');
INSERT INTO public.activitykind (name) VALUES ( 'Велоспорт');
INSERT INTO public.activitykind (name) VALUES ( 'Вольный режим');
