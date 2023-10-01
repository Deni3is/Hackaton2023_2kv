create table IF NOT EXISTS public.training
(
    id serial primary key not null,
    activityKindId int NOT NULL,
    totalScore int NOT NULL,
    userId int NOT NULL,
    startActivityDateTime timestamp,
    endActivityDateTime timestamp,
    FOREIGN KEY (activityKindId) REFERENCES public.training (id) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES public.training (id) ON DELETE CASCADE

);


-- 6 Добавление в таблицу training 

INSERT INTO public.training (activityKindId, totalScore,userId,startActivityDateTime,endActivityDateTime) VALUES (1, 100,1,'2000-04-01 18:00:22.66','2000-04-01 18:40:22.66');




