CREATE TABLE IF NOT EXISTS public.migrations
(
    id serial NOT NULL,
    code varchar(50) NOT NULL,
    ts varchar(50) NOT NULL,
    CONSTRAINT test_migr PRIMARY KEY (id)
);