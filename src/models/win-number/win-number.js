import BaseModel from '../base';

export default class WinNumberModel extends BaseModel {
    constructor(initData) {
        super();
        this.LuckyNumber = 0;
        this.ExternalBetParameters = null;
        this.TrackSection = null;
        this.copyFrom(initData);
    }
}