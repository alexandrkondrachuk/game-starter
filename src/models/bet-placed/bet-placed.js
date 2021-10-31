import BaseModel from '../base';

export default class BetPlacedModel extends BaseModel {
    constructor(initData) {
        super();
        this.betValue = 0;
        this.code = 'NMBR0';
        this.coefficient = 0;
        this.currency = 'USD'
        this.id = 0;
        this.win = 0;
        this.winNumbers = null;
        this.copyFrom(initData);
    }
}