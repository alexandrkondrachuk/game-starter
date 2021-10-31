import BaseModel from '../../base';

export default class BetEmmitModel extends BaseModel {
    constructor(initData) {
        super();
        this.BetValue = 0;
        this.Code = 'NMBR.0';
        this.copyFrom(initData);
    }
}