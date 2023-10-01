create table IF NOT EXISTS public.activitiesdata
(
    id serial primary key not null,
    activityDataKindId int NOT NULL,
    trainId int NOT NULL,
    value int NULL,
    activityTime int NOT NULL,
    FOREIGN KEY (activityDataKindId) REFERENCES public.activitydatakind (id) ON DELETE CASCADE,
    FOREIGN KEY (trainId) REFERENCES public.training (id) ON DELETE CASCADE

);


-- 7 Добавление в таблицу activitiesdata 

INSERT INTO public.activitiesdata (activityDataKindId, trainId,value,activityTime) VALUES (2,1,40,40);
INSERT INTO public.activitiesdata (activityDataKindId, trainId,value,activityTime) VALUES (3,1,90,40);
INSERT INTO public.activitiesdata (activityDataKindId, trainId,value,activityTime) VALUES (4,1,110,40);
INSERT INTO public.activitiesdata (activityDataKindId, trainId,value,activityTime) VALUES (5,1,140,40);
INSERT INTO public.activitiesdata (activityDataKindId, trainId,value,activityTime) VALUES (6,1,2,40);
INSERT INTO public.activitiesdata (activityDataKindId, trainId,value,activityTime) VALUES (8,1,6,40);
INSERT INTO public.activitiesdata (activityDataKindId, trainId,value,activityTime) VALUES (1,1,1000,40);
INSERT INTO public.activitiesdata (activityDataKindId, trainId,value,activityTime) VALUES (9,1,40,40);

















