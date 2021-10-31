import BaseModel from '../base';

export default class RoundStateModel extends BaseModel {
    constructor(initData) {
        super();
        this.color = null;
        this.dealerName = 'Caroline';
        this.endTime = '';
        this.id = 0;
        this.isFinished = false;
        this.luckyNumber = 0;
        this.numberParametersForDealer = [];
        this.rotorSpeed = 0;
        this.roundResult = '';
        this.spinSeconds = 0;
        this.stage = 1;
        this.startTime = '';
        this.trackSectionForDealer = 0;
        this.winNumber = null;
        this.copyFrom(initData);
    }
}