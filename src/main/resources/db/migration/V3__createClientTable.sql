CREATE TABLE IF NOT EXISTS client_data
(
    client_id    uuid DEFAULT uuid_generate_v4 (),
    first_name varchar(255),
    last_name  varchar(255),
    company_name  varchar(255),
    primary key (client_id)
);