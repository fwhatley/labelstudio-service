import {LabelStudioRepository}  from './label.studio.repository';
import {ImageModel} from "../data.models/image.model";
import {ApiErrorModel} from "../data.models/api.error.model";
import {LabelModel} from '../data.models/label.model';

export class LabelStudioService {

    private labelStudioRepository: LabelStudioRepository;
    private labelsCache: Array<LabelModel> = [];

    public constructor() {
      this.labelStudioRepository = new LabelStudioRepository();
    }

    public getNextImageForReview(includeSkipped: boolean = false): Promise<ImageModel|ApiErrorModel> {
        return new Promise((resolve, reject) => {
            let nextImage: ImageModel = new ImageModel();
            this.labelStudioRepository.getNextImageForReview().then((res) => {
                if (!(res instanceof ApiErrorModel)) {
                    nextImage = res;
                    return this.labelStudioRepository.getLabelsForImage(nextImage.imageId);
                } else {
                    reject(res);
                }
            }).then((res: any) => {
                if (!(res instanceof ApiErrorModel)) {
                    nextImage.labels = res;
                    resolve(nextImage)
                } else {
                    reject(res);
                }
            }).catch((err) => {
                reject(err);
            });
        });
    }

    public getLabels(): Promise<Array<LabelModel>|ApiErrorModel> {
        return new Promise((resolve, reject) => {
            this.labelStudioRepository.getLabels().then((res) => {
                if (!(res instanceof ApiErrorModel)) {
                    this.labelsCache = res;
                    resolve(this.labelsCache);
                } else {
                    reject(res);
                }
            }).catch((err) => {
                reject(err);
            });
        });
    }

    public updateImageLabels(imageId: string, body: any) {
        return this.labelStudioRepository.updateImageLabels();
    }

    public addLabel(label: LabelModel): Promise<LabelModel|ApiErrorModel> {
        return new Promise((resolve, reject) => {
            this.labelStudioRepository.addLabel(label).then((res) => {
                if (!(res instanceof ApiErrorModel)) {
                    this.labelsCache.push(res);
                    resolve(res);
                } else {
                    reject(res);
                }
            }).catch((err) => {
                reject(err);
            });
        });
    }
}
