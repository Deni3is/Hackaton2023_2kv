create table IF NOT EXISTS public.activitydatakind
(
    id serial primary key NOT NULL,
    name VARCHAR(100)
);


-- 4 Добавление в таблицу activitydatakind

INSERT INTO public.activitydatakind (name) VALUES ( 'Преодоленная дистанция ');
INSERT INTO public.activitydatakind (name) VALUES ( 'Количество соженных ккал');
INSERT INTO public.activitydatakind (name) VALUES ( 'Частота сердцебиения мин ');
INSERT INTO public.activitydatakind (name) VALUES ( 'Частота сердцебиения сред ');
INSERT INTO public.activitydatakind (name) VALUES ( 'Частота сердцебиения мах');
INSERT INTO public.activitydatakind (name) VALUES ( 'Уровни нагрузки ');
INSERT INTO public.activitydatakind (name) VALUES ( 'Количество шагов');
INSERT INTO public.activitydatakind (name) VALUES ( 'Скорость');
INSERT INTO public.activitydatakind (name) VALUES ( 'Время тренировки');