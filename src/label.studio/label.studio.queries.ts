import {LabelModel} from '../data.models/label.model';

export class LabelStudioQueries {

    public constructor() {
    }

    public getNextImageForReview(includeSkipped: boolean = false): string {
        return 'SELECT * FROM images WHERE reviewed = false and skipped = false LIMIT 1;';
    }

    public getLabels(): string {
        return 'SELECT * FROM labels;';
    }

    public addLabel(label: LabelModel): string {
        return '' +
            `INSERT INTO labels(name, user_entered)\n` +
            `VALUES ('${label.name}', ${label.userEntered});`;
    }

    public getLabelsForImage(imageId: string = 'NONE'): string {
        return '' +
            'SELECT io.label_id, o.name, o.user_entered \n' +
            'FROM image_label AS io\n' +
            'INNER JOIN labels AS o\n' +
            `ON io.image_id = ${imageId} AND io.label_id = o.label_id;`;
    }
}
