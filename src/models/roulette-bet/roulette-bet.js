import BaseModel from '../base';

export default class RouletteBetModel extends BaseModel {
    constructor(initData) {
        super();
        this.BetValue = 0;
        this.Code = '';
        this.copyFrom(initData);
    }
}