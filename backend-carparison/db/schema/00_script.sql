\i db/schema/01_users.sql;
\i db/schema/03_reviews.sql;
\i db/schema/04_cars_lists.sql;

\i db/seeds/01_users.sql;
\i db/seeds/03_reviews.sql;
\i db/seeds/05_cars_lists.sql;

ALTER TABLE cars OWNER TO labber;
ALTER TABLE reviews OWNER TO labber;
ALTER TABLE cars_lists OWNER TO labber;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO labber;