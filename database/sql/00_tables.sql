CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password TEXT NOT NULL,
  is_admin BOOL DEFAULT FALSE,
  created_at VARCHAR(50));

CREATE TABLE listings (
  listing_id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  price FLOAT NOT NULL,
  completed BOOL DEFAULT FALSE,
  pending BOOL DEFAULT FALSE,
  poster_id INT REFERENCES users(user_id) ON DELETE CASCADE,
  created_at VARCHAR(50));


CREATE TABLE requests (
  request_id SERIAL PRIMARY KEY,
  listing_id INT REFERENCES listings(listing_id) ON DELETE CASCADE,
  worker_id INT REFERENCES users(user_id) ON DELETE CASCADE,
  -- message TEXT NOT NULL,
  -- status VARCHAR(50) DEFAULT "pending",
  created_at VARCHAR(50));

CREATE TABLE skills (
  skill_id SERIAL PRIMARY KEY,
  skill_name VARCHAR(50) UNIQUE NOT NULL);

CREATE TABLE user_skills (
  user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
  skill_id INT REFERENCES skills(skill_id));
