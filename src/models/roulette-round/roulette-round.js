import BaseModel from '../base';

export default class RouletteRoundModel extends BaseModel {
    constructor(initData) {
        super();
        this.RoundResult = '';
        this.IsFinished = false;
        this.RoundStage = null;
        this.WinNumber = null;
        this.DealerName = '';
        this.Color = '';
        this.copyFrom(initData);
    }
}