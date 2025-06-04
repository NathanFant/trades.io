INSERT INTO users (username, email, password, is_admin, created_at)
VALUES
('Trent', 'trent@gmail.com', '$2b$12$op09fnhVvcYFPGTsEKsgvu9LNuMhPNjI24NBfzP0RK0XGP9IvIU96', TRUE, '2025-05-15'),
('Nathan', 'nathan@gmail.com', '$2b$12$op09fnhVvcYFPGTsEKsgvu9LNuMhPNjI24NBfzP0RK0XGP9IvIU96', TRUE, '2025-05-16'),
('Ryan', 'ryan@gmail.com', '$2b$12$op09fnhVvcYFPGTsEKsgvu9LNuMhPNjI24NBfzP0RK0XGP9IvIU96', TRUE, '2025-05-17'),
('Dan', 'dan@gmail.com', '$2b$12$op09fnhVvcYFPGTsEKsgvu9LNuMhPNjI24NBfzP0RK0XGP9IvIU96', TRUE, '2025-05-18'),
('Vince', 'vince@gmail.com', '$2b$12$op09fnhVvcYFPGTsEKsgvu9LNuMhPNjI24NBfzP0RK0XGP9IvIU96', TRUE, '2025-05-19'),
('Johnny', 'Johnny@example.com', '$2b$12$op09fnhVvcYFPGTsEKsgvu9LNuMhPNjI24NBfzP0RK0XGP9IvIU96', FALSE, '2025-05-20');

INSERT INTO listings (title, description, latitude, longitude, price, required_skill, poster_id, created_at)
VALUES
('Need my sink fixed', 'The pipes under my sink are leaking', 34.74, -92.29, 100.00, 'plumbing', 1, '2025-05-21'),
('Need my yard mowed', 'I need my yard mowed', 34.74, -92.29, 99.00, 'landscaping', 2, '2025-05-21'),
('Need my deck painted', 'old paint needs stripped and repainted', 34.74, -92.29, 98.00, 'handyman', 3, '2025-05-21'),
('Need help with internet', 'landscaper cut my cables out back and my internet is out', 34.74, -92.29, 97.00, 'other', 4, '2025-05-21'),
('NO COOL AIR!', 'AC AINT WORKIN!', 34.74, -92.29, 96.00, 'hvac', 5, '2025-05-21');

INSERT INTO requests (listing_id, worker_id, created_at)
VALUES
(1, 6, '2025-05-20'),
(2, 6, '2025-05-21'),
(3, 6, '2025-05-22'),
(4, 6, '2025-05-23'),
(5, 6, '2025-05-24');

INSERT INTO skills (skill_name)
VALUES
('carpenter'),
('mechanic'),
('electrician'),
('flooring'),
('general contractor'),
('welding'),
('plumbing'),
('hvac'),
('handyman'),
('landscaping'),
('cleaning'),
('other');

INSERT INTO user_skills (user_id, skill_id)
VALUES
(1, 11),
(2, 10),
(2, 2),
(3, 9),
(3, 11),
(4, 1),
(5, 5),
(6, 1),
(6, 2),
(6, 3),
(6, 11),
(6, 7),
(1, 12),
(2, 12),
(3, 12),
(4, 12),
(5, 12),
(6, 12);
