-- images
INSERT INTO
    images(url, reviewed, skipped)
VALUES
    ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmBLMyfuuvYGHYzcozt1isd-su3Cxr9J8iKeukAbd-_NRFJo3pm5TuMmheg&usqp=CAc', true, false),
    ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDu39vEcCfccI8q6QMIXczx_4DRA-bWbrpEw&usqp=CAU', false, false),
    ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJMrL1HGgfX1h8r1bA3plKlTPv3lsB_0ZgzA&usqp=CAU', false, false),
    ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttirGryMlpl0ho7giEopZanHB2LJ2lZonNw&usqp=CAU', false, false);

-- labels
INSERT INTO
    labels(name, user_entered)
VALUES
    ('lamp', false),
    ('bed', false),
    ('stove', false),
    ('sofa', false);

-- image_label
INSERT INTO
    image_label(image_id, label_id)
VALUES
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4', '4');
