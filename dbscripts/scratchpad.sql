SELECT * FROM labels;
SELECT * FROM images;
SELECT * FROM image_object;

INSERT INTO labels(name, user_entered)
VALUES ('sofa', false);

DELETE FROM images
WHERE image_id = 1;

UPDATE labels
SET user_entered = false
WHERE user_entered = true;
