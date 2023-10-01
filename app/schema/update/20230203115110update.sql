create table IF NOT EXISTS public.referral
(
    id serial primary key NOT NULL,
    name VARCHAR(100),
    fundId int NOT NULL,
    FOREIGN KEY (fundId) REFERENCES public.fund (id) ON DELETE CASCADE

);

-- 8 Добавление в таблицу referral

INSERT INTO public.referral (name,fundId) VALUES ( 'Помощь Семенову И.И.',1);
INSERT INTO public.referral (name,fundId) VALUES ( 'Детям сиротам',2);

