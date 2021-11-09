import BaseModel from '../base';

export default class RouletteLimitModel extends BaseModel {
    constructor(initData) {
        super();
        this.id = 0;
        this.destinationCurrency  = '';
        this.betType = '';
        this.limit = 0;
        this.copyFrom(initData);
    }
}