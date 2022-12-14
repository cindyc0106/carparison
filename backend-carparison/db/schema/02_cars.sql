DROP TABLE IF EXISTS cars CASCADE;

CREATE TABLE cars(
    id SERIAL PRIMARY KEY NOT NULL,
    city_mpg INTEGER,
    class VARCHAR(255),
    combination_mpg INTEGER,
    cylinders INTEGER,
    displacement INTEGER,
    drive TEXT,
    fuel_type TEXT,
    highway_mpg INTEGER,
    make VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    transmission TEXT,
    year INTEGER,
    photo_URL TEXT
);
