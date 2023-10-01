CREATE TABLE IF NOT EXISTS public.log
(
    id serial NOT NULL,
    type varchar(255) NOT NULL,
    message varchar(255) NOT NULL,
    ts varchar(25) NOT NULL,
    CONSTRAINT test_log PRIMARY KEY (id)
);


