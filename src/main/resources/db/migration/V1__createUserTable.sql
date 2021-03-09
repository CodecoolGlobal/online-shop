CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS user_data
(
    user_id    uuid DEFAULT uuid_generate_v4 (),
    first_name varchar(255),
    last_name  varchar(255),
    user_name  varchar(255),
    password  varchar(255),
    created timestamp,
    primary key (user_id)
);