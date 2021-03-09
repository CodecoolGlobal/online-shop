CREATE TABLE IF NOT EXISTS order_data
(
    order_id    uuid DEFAULT uuid_generate_v4 (),
    order_name varchar(255),
    order_status  varchar(255),
    client_id uuid references client_data(client_id) not null,
    creation_date timestamp,
    primary key (order_id)
);

INSERT INTO order_data (order_name,order_status,client_id)
VALUES ('Wood','START','01f4c64e-7b46-4d58-a3c4-4465c164f512'),
('Stone','IN_PROGRESS','aa84a325-ecce-4a86-8cb4-808bb8910e1e'),
('Gold','END','e36f1d3c-f823-4e0c-8231-8dcb0112e1f5');




