import {LabelModel} from './label.model';

export class ImageModel {
    public imageId: string;
    public url: string;
    public reviewed: boolean;
    public skipped: boolean;
    public labels: Array<LabelModel>;

    public constructor(values: any = {}) {
        this.imageId = values.image_id || values.imageId || '';
        this.imageId += '';
        this.url = values.url || '';
        this.reviewed = values.reviewed || false;
        this.skipped = values.skipped || false;
        this.labels = (values.labels || []).map((item: any) => new LabelModel(item));
    }
}
