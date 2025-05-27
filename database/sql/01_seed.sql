INSERT INTO users (username, email, password, is_admin, created_at)
VALUES
('Trent', 'trent@gmail.com', 'test_pass1', TRUE, '2025-05-15'),
('Nathan', 'nathan@gmail.com', 'test_pass2', TRUE, '2025-05-16'),
('Ryan', 'ryan@gmail.com', 'test_pass3', TRUE, '2025-05-17'),
('Dan', 'dan@gmail.com', 'test_pass4', TRUE, '2025-05-18'),
('Vince', 'vince@gmail.com', 'test_pass5', TRUE, '2025-05-19'),
('Johnny', 'Johnny@sins.com', 'test_pass6', FALSE, '2025-05-20');

INSERT INTO listings (title, description, latitude, longitude, price, poster_id, created_at)
VALUES
('Need my pipes cleaned', 'I"m in dire need of getting my "pipes" cleaned', 69.420, 17.38, 100.00, 1, '2025-05-21'),
('Need my yard mowed', 'I need my "yard" mowed', 69.420, 17.38, 99.00, 2, '2025-05-21'),
('Need "help"', 'I need "help" with something', 69.420, 17.38, 98.00, 3, '2025-05-21'),
('Need help with internet', 'I really need help improving my internet speed today', 69.420, 17.38, 97.00, 4, '2025-05-21'),
('Need help with discord', 'Looking for help with Discord UI', 69.420, 17.38, 96.00, 5, '2025-05-21');

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
('cleaning');

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
(6, 7);
