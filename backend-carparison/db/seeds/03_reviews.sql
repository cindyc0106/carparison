DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE reviews(
    id SERIAL PRIMARY KEY NOT NULL,
    rating INTEGER NOT NULL,
    description VARCHAR(255) NOT NULL,
    user_id INTEGER REFERENCES user(id) ON DELETE CASCADE,
    car_id INTEGER REFERENCES cars(id) ON DELETE CASCADE
);

INSERT INTO 
reviews (rating, description, user_id, car_id)
VALUES
    (4, "This car is dope!", 1, 1),
    (5, "This car is doper!", 2, 2),
    (3.5, "This car is aight!", 3, 1),
    (2.5, "This car is meh!", 4, 2)
