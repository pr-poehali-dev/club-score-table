CREATE TABLE IF NOT EXISTS t_p36247929_club_score_table.club_settings (
    id SERIAL PRIMARY KEY,
    key VARCHAR(255) UNIQUE NOT NULL,
    value TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS t_p36247929_club_score_table.matches (
    id SERIAL PRIMARY KEY,
    match_date VARCHAR(50) NOT NULL,
    match_time VARCHAR(20) NOT NULL,
    home_team VARCHAR(255) NOT NULL,
    away_team VARCHAR(255) NOT NULL,
    home_score INTEGER,
    away_score INTEGER,
    stadium VARCHAR(255) NOT NULL,
    status VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS t_p36247929_club_score_table.players (
    id SERIAL PRIMARY KEY,
    number INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(100) NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS t_p36247929_club_score_table.news (
    id SERIAL PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    date VARCHAR(50) NOT NULL,
    category VARCHAR(100) NOT NULL,
    image_url TEXT,
    excerpt TEXT,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO t_p36247929_club_score_table.club_settings (key, value) VALUES
('club_name', 'ФК UNION ВОРОНЕЖ'),
('club_motto', 'Сила, единство, победа - наш путь к чемпионству'),
('club_city', 'Воронеж'),
('hero_image', 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920');

INSERT INTO t_p36247929_club_score_table.matches (match_date, match_time, home_team, away_team, home_score, away_score, stadium, status) VALUES
('28 Октября', '19:00', 'ФК UNION', 'Спартак', NULL, NULL, 'Стадион Союз', 'upcoming'),
('21 Октября', '20:00', 'Динамо', 'ФК UNION', 1, 2, 'Стадион Динамо', 'finished'),
('14 Октября', '18:00', 'ФК UNION', 'Зенит', 3, 1, 'Стадион Союз', 'finished');

INSERT INTO t_p36247929_club_score_table.players (number, name, position, image_url) VALUES
(1, 'Иван Петров', 'Вратарь', 'https://images.unsplash.com/photo-1473010350295-2c82192ebd8e?w=400'),
(5, 'Алексей Смирнов', 'Защитник', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'),
(7, 'Дмитрий Козлов', 'Полузащитник', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400'),
(9, 'Михаил Волков', 'Нападающий', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'),
(10, 'Сергей Новиков', 'Полузащитник', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400'),
(11, 'Андрей Морозов', 'Нападающий', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400');

INSERT INTO t_p36247929_club_score_table.news (title, date, category, image_url, excerpt, content) VALUES
('ФК UNION одержал уверенную победу над Зенитом со счетом 3:1', '14 Октября 2025', 'Матч', 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800', 'Блестящая игра нашей команды принесла важные три очка в турнирной таблице. Голы забили Волков (2) и Новиков.', 'Подробности матча...'),
('Новое пополнение в составе: знакомьтесь с нападающим Андреем Морозовым', '10 Октября 2025', 'Трансфер', 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800', 'Клуб объявляет о подписании контракта с талантливым нападающим. Андрей уже присоединился к тренировкам команды.', 'Подробности трансфера...'),
('Открытая тренировка для болельщиков 30 октября', '8 Октября 2025', 'События', 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800', 'Приглашаем всех фанатов на открытую тренировку! Возможность пообщаться с игроками и получить автографы.', 'Подробности события...');