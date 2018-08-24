CREATE TABLE users (
    id serial primary key,
    name character varying (200),
    email character varying (200),
    password character varying (300)
    )

CREATE TABLE flutters (
    userid integer,
    postdate DATE NOT NULL DEFAULT CURRENT_DATE,
    body VARCHAR (255) NOT NULL,
    postid serial primary key
)