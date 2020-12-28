import {LabelStudioQueries} from "./label.studio.queries";
import {ImageModel} from "../data.models/image.model";
import {ApiErrorModel} from "../data.models/api.error.model";
import {LabelModel} from '../data.models/label.model';

export class LabelStudioRepository {

    private labelStudioQueries: LabelStudioQueries;
    private db: any;

    public constructor() {
        this.labelStudioQueries = new LabelStudioQueries();
        const pgp = require('pg-promise')(/* options */);
        this.db = pgp('postgres://bzmrrkpr:5BniU_MuJIivT-jsdgOM3lsDAyJaTf67@suleiman.db.elephantsql.com:5432/bzmrrkpr');
    }

    public getNextImageForReview(includeSkipped: boolean = false): Promise<ImageModel|ApiErrorModel> {
        return new Promise((resolve, reject) => {
            this.db.one(this.labelStudioQueries.getNextImageForReview())
                .then( (data: any) => {
                    console.log('DATA:', data)
                    resolve(new ImageModel(data));
                })
                .catch( (err: any) => {
                    console.log('ERROR:', err)
                    const apiErrorModel = new ApiErrorModel(err);
                    apiErrorModel.message = err;
                    reject(apiErrorModel);
                })
        })
    }

    public getLabelsForImage(imageId: string = 'NONE'): Promise<Array<LabelModel>|ApiErrorModel> {
        return new Promise((resolve, reject) => {
            this.db.any(this.labelStudioQueries.getLabelsForImage(imageId))
                .then( (data: any) => {
                    console.log('DATA:', data)
                    resolve((data || []).map((item: any) => new LabelModel(item)));
                })
                .catch( (err: any) => {
                    console.log('ERROR:', err)
                    const apiErrorModel = new ApiErrorModel(err);
                    apiErrorModel.message = err;
                    reject(apiErrorModel);
                })
        })
    }

    public getLabels(): Promise<Array<LabelModel>|ApiErrorModel> {
        return new Promise((resolve, reject) => {
            this.db.any(this.labelStudioQueries.getLabels())
                .then( (data: any) => {
                    console.log('DATA:', data)
                    resolve((data || []).map((item: any) => new LabelModel(item)));
                })
                .catch( (err: any) => {
                    console.log('ERROR:', err)
                    const apiErrorModel = new ApiErrorModel(err);
                    apiErrorModel.message = err;
                    reject(apiErrorModel);
                })
        })
    }

    public updateImageLabels(): Promise<Array<LabelModel>|ApiErrorModel> {
        return new Promise((resolve, reject) => {
            this.db.any(this.labelStudioQueries.getLabels())
                .then( (data: any) => {
                    console.log('DATA:', data)
                    resolve((data || []).map((item: any) => new LabelModel(item)));
                })
                .catch( (err: any) => {
                    console.log('ERROR:', err)
                    const apiErrorModel = new ApiErrorModel(err);
                    apiErrorModel.message = err;
                    reject(apiErrorModel);
                })
        })
    }

    public addLabel(label: LabelModel): Promise<LabelModel|ApiErrorModel> {
        return new Promise((resolve, reject) => {
            this.db.any(this.labelStudioQueries.addLabel(label))
                .then( (data: any) => {
                    console.log('DATA:', data)
                    resolve(new LabelModel(data));
                })
                .catch( (err: any) => {
                    console.log('ERROR:', err)
                    const apiErrorModel = new ApiErrorModel(err);
                    apiErrorModel.message = err;
                    reject(apiErrorModel);
                })
        })
    }
}
