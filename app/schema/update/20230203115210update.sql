create table IF NOT EXISTS public.hpointstransaction
(
    id serial primary key NOT NULL,
    amount int NOT NULL,
    referralId int NOT NULL,
    userId int NOT NULL,
    FOREIGN KEY (referralId) REFERENCES public.referral (id) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES public.user (id) ON DELETE CASCADE

);

-- 9 Добавление в таблицу hpointstransaction

INSERT INTO public.hpointstransaction(amount,referralId,userId) VALUES (100,1,1);
INSERT INTO public.hpointstransaction(amount,referralId,userId) VALUES (50,2,2 );

