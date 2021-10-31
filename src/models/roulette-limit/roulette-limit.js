import BaseModel from '../base';

export default class RouletteLimitModel extends BaseModel {
    constructor(initData) {
        super();
        this.Id = 0;
        this.DestinationCurrency  = '';
        this.BetType = '';
        this.Limit = 0;
        this.copyFrom(initData);
    }
}