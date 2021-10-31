import BaseModel from '../base';

export default class PlayerBetApiModel extends BaseModel {
    constructor(initData) {
        super();
        this.Id = 0;
        this.RoundId  = 0;
        this.BetType = null;
        this.BetValue = 0;
        this.Win = 0;
        this.WinLose = 0;
        this.CreationDate = null;
        this.copyFrom(initData);
    }
}