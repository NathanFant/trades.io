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
('NO COOL AIR!', 'AC AINT WORKIN!', 34.74, -92.29, 96.00, 'hvac', 5, '2025-05-21'),
('HVAC Hero', 'Must not be afraid of small crawl spaces or cranky cats.', 41.2565, -95.9345, 28.0, 'hvac', 2, '2025-06-04'),
('Electrician Needed Yesterday', 'Wiring is mostly legal. Bring own ladder.', 40.7357, -74.1724, 34.0, 'electrician', 5, '2025-06-04'),
('Flooring Specialist', 'Mostly vinyl, occasional existential dread.', 30.2672, -97.7431, 22.0, 'flooring', 3, '2025-06-04'),
('Mechanic with Attitude', 'Must yell at engines until they work.', 42.3314, -83.0458, 30.0, 'mechanic', 4, '2025-06-04'),
('Plumber for Haunted Duplex', 'Pipes moan. Ghosts not unionized.', 42.5195, -70.8967, 31.0, 'plumbing', 1, '2025-06-04'),
('Handyman Needed – ASAP', 'Tasks include IKEA assembly and mild emotional support.', 39.5296, -119.8138, 25.0, 'handyman', 2, '2025-06-04'),
('Welding Wizard', 'Bring own gloves. Must know how to summon sparks.', 36.1539, -95.9928, 33.0, 'welding', 3, '2025-06-04'),
('Carpenter for Mystery Project', 'Will be building “something cool.” No further details.', 35.5951, -82.5515, 28.0, 'carpenter', 5, '2025-06-04'),
('General Contractor', 'Must know how to say "yeah, we can do that" convincingly.', 32.7555, -97.3308, 40.0, 'general contractor', 6, '2025-06-04'),
('Cleaning Crew Boss', 'Must not judge client lifestyles. Glitter immunity a plus.', 25.7617, -80.1918, 26.0, 'cleaning', 1, '2025-06-04'),
('Landscaper with Machete', 'It’s a jungle out there. Literally.', 21.3069, -157.8583, 24.0, 'landscaping', 4, '2025-06-04'),
('Plumber for Floating Casino', 'No seasickness allowed. Tips paid in chips.', 30.3960, -88.8853, 35.0, 'plumbing', 5, '2025-06-04'),
('HVAC Tech for Ice Cream Plant', 'Free samples but zero tolerance for meltdowns.', 44.5133, -88.0133, 29.0, 'hvac', 2, '2025-06-04'),
('Mechanic – Moose Maintenance', 'Must be good with trucks and possibly wild animals.', 45.6795, -111.0386, 32.0, 'mechanic', 3, '2025-06-04'),
('Electrician – Haunted Doll Museum', 'Dolls blink. Act normal.', 41.4089, -75.6624, 30.0, 'electrician', 4, '2025-06-04'),
('Handyman for Reality Show Set', 'Fix walls. Avoid drama.', 34.0522, -118.2437, 27.0, 'handyman', 1, '2025-06-04'),
('General Contractor – “Tiny Castle” Build', 'Must appreciate whimsy and extremely low ceilings.', 45.5152, -122.6784, 38.0, 'general contractor', 1, '2025-06-04'),
('Welder for Art Sculpture', 'Must think outside the beam.', 35.6870, -105.9378, 31.0, 'welding', 6, '2025-06-04'),
('Carpenter – Pirate Ship Playhouse', 'Must say “arrr” at least once per day.', 27.9506, -82.4572, 28.0, 'carpenter', 1, '2025-06-04'),
('Floor Installer for Dance Studio', 'Must pass moonwalk test.', 33.7490, -84.3880, 23.0, 'flooring', 4, '2025-06-04'),
('Landscaper – Cactus Whisperer', 'Minimal grass, maximum spikes.', 32.2226, -110.9747, 22.0, 'landscaping', 6, '2025-06-04'),
('Plumber – “Shrek”-Themed Airbnb', 'Everything is swamp green. Don’t ask.', 39.1031, -84.5120, 29.0, 'plumbing', 3, '2025-06-04'),
('HVAC – Penguin Exhibit', 'Penguins not employees. Don’t give them snacks.', 40.4406, -79.9959, 32.0, 'hvac', 2, '2025-06-04'),
('Electrician – Laser Tag Arena', 'Must dodge lasers while fixing things.', 38.8339, -104.8214, 30.0, 'electrician', 3, '2025-06-04'),
('Cleaning Crew – Abandoned Mall', 'Includes hazard pay and possible ghost bonuses.', 41.5934, -87.3464, 27.0, 'cleaning', 5, '2025-06-04');


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
