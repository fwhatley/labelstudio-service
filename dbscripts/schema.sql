-- DROP TABLE images;
CREATE TABLE IF NOT EXISTS images (
	image_id SERIAL PRIMARY KEY, -- serial numbers is automatically incremented
    url VARCHAR ( 250 ) UNIQUE NOT NULL,
	reviewed BOOLEAN NOT NULL,
    skipped BOOLEAN NOT NULL
);

-- DROP TABLE labels;
CREATE TABLE IF NOT EXISTS labels (
	label_id SERIAL PRIMARY KEY,
	name VARCHAR ( 50 ) UNIQUE NOT NULL,
    user_entered BOOLEAN NOT NULL
);

-- DROP TABLE image_label;
CREATE TABLE IF NOT EXISTS image_label (
	image_id SERIAL NOT NULL,
	label_id SERIAL NOT NULL,
    FOREIGN KEY (image_id) REFERENCES images (image_id),
    FOREIGN KEY (label_id) REFERENCES labels (label_id),
	PRIMARY KEY (image_id, label_id) -- enforce that two cols are unique
);
