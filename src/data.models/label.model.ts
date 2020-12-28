export class LabelModel {
    public labelId: string;
    public name: string;
    public userEntered: boolean;

    public constructor(values: any = {}) {
        this.labelId = values.label_id || values.labelId || '';
        this.labelId += '';
        this.name = values.name || '';
        this.userEntered = values.user_entered || values.userEntered || false;
    }
}
