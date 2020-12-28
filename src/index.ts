import express from 'express';
import bodyParser from 'body-parser';

import {LabelStudioService} from "./label.studio/label.studio.service";
import {ApiErrorModel} from "./data.models/api.error.model";
import {LoggerMiddleware} from './middleware/logger.middleware';
import {LabelModel} from './data.models/label.model';


const cors = require('cors');
const app = express();

const PORT = 8000;
const labelStudioService = new LabelStudioService();
const loggerMiddleware = new LoggerMiddleware();

//============================= middlewares=============================//
app.use(bodyParser.json());
app.use(cors());
app.use(loggerMiddleware.log);

//============================= routes =============================//
const basePath = '/restservices/reai/v1/labelStudioService';
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.get(`${basePath}/images/next`, (req, res) => {
    labelStudioService.getNextImageForReview().then((data: any) => {
            res.json(data);
        }).catch((err: ApiErrorModel) => {
            res.json(err);
        });
});
app.get(`${basePath}/labels`, (req, res) => {
    labelStudioService.getLabels().then((data: any) => {
            res.json(data);
        }).catch((err: ApiErrorModel) => {
            res.json(err);
        });
});
app.post(`${basePath}/labels`, (req, res) => {
    const label = new LabelModel(req.body);
    labelStudioService.addLabel(label).then((data: any) => {
            res.json(data);
        }).catch((err: ApiErrorModel) => {
            res.json(err);
        });
});
app.post(`${basePath}/images/:imageId`, (req, res) => {
    const requestBody: any = req.body;
    labelStudioService.updateImageLabels(req.params.imageId, requestBody).then((data: any) => {
        res.json(data);
    }).catch((err: ApiErrorModel) => {
        res.json(err);
    });
});

/*
add endpoints
- submit image with objects review
    - should mark the image as reviewed
    - add new entries into image_object table
- skip image
    - should mark image as skipped
- get stats
    - total, total reviewed, total skipped, total remaining

--- DONE
- add new object
- get next image
    - should include all preloaded objects
- get all objects
 */

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
