CREATE TABLE IF NOT EXISTS users (
    userid VARCHAR(50) PRIMARY KEY,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS esims (
    planid VARCHAR(50) PRIMARY KEY,
    userid VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL,
    data INTEGER NOT NULL,
    duration INTEGER NOT NULL,
    status VARCHAR(20) NOT NULL,
    data_remaining INTEGER NOT NULL,
    expires_at DATE,
    FOREIGN KEY (userid) REFERENCES users(userid) ON DELETE CASCADE
);