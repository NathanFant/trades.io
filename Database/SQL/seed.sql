INSERT INTO users (username, email, password, is_admin, created_at)
VALUES
('Trent', 'trent@gmail.com', 'test_pass1', TRUE, '5/20/2025 11:25:17'),
('Nathan', 'nathan@gmail.com', 'test_pass2', TRUE, '5/20/2025 11:25:18'),
('Ryan', 'ryan@gmail.com', 'test_pass3', TRUE, '5/20/2025 11:25:19'),
('Dan', 'dan@gmail.com', 'test_pass4', TRUE, '5/20/2025 11:25:20'),
('Vince', 'vince@gmail.com', 'test_pass5', TRUE, '5/20/2025 11:25:21'),
('Johnny', 'Johnny@sins.com', 'test_pass6', FALSE, '5/20/2025 11:40:41');

INSERT INTO listings (title, description, latitude, longitude, price, poster_id, created_at)
VALUES
('Need my pipes cleaned', 'I"m in dire need of getting my "pipes" cleaned', 69.420, 17.38, 100.00, 1, '5/20/2025 11:33:34'),
('Need my yard mowed', 'I need my "yard" mowed', 69.420, 17.38, 99.00, 2, '5/20/2025 11:33:35'),
('Need "help"', 'I need "help" with something', 69.420, 17.38, 98.00, 3, '5/20/2025 11:33:36'),
('Need help with internet', 'I really need help improving my internet speed today', 69.420, 17.38, 97.00, 4, '5/20/2025 11:33:37'),
('Need help with discord', 'Looking for help with Discord UI', 69.420, 17.38, 96.00, 5, '5/20/2025 11:33:38');

INSERT INTO requests (listing_id, worker_id, created_at)
VALUES
(1, 6, '5/20/2025 11:41:40'),
(2, 6, '5/20/2025 11:41:41'),
(3, 6, '5/20/2025 11:41:42'),
(4, 6, '5/20/2025 11:41:43'),
(5, 6, '5/20/2025 11:41:44');

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
