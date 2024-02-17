create table products(
    id serial primary key,
    name VARCHAR(128) UNIQUE NOT NULL,
    price bigint DEFAULT 0,
    count int DEFAULT 0
);

create table users(
    id serial primary key,
    login VARCHAR(64) UNIQUE NOT NULL,
    password text NOT NULL,
    balance bigint DEFAULT 0
);

create table transactions (
    id serial primary key,
    user_id int not null,
    product_id int DEFAULT null,
    product_count int not null,
    total_price bigint NOT NULL,
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id) on delete CASCADE,
    CONSTRAINT fk_product_id FOREIGN KEY (product_id) REFERENCES products(id) on delete SET null
);