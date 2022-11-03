DROP TABLE IF EXISTS reviews CASCADE;
CREATE TABLE reviews(
    id SERIAL PRIMARY KEY NOT NULL,
    rating INTEGER NOT NULL,
    description VARCHAR(255) NOT NULL,
    user_name VARCHAR(255) DEFAULT 'Anonymous',
    car_make VARCHAR(255) NOT NULL,
    car_model VARCHAR(255) NOT NULL,
    car_year VARCHAR(255) NOT NULL
);
