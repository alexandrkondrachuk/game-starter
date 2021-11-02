import BaseModel from '../base';

export default class ChipModel extends BaseModel {
    constructor(initData) {
        super();
        this.id = 0;
        this.nominal = 1;
        this.color = 'blue';
        this.precision = 1;
        this.decimal = 2;
        this.active = false;
        this.copyFrom(initData);
    }
}