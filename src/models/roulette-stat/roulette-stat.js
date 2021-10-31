import BaseModel from '../base';

export default class RouletteStatModel extends BaseModel {
    constructor(initData) {
        super();
        this.coldNumbers = [];
        this.hotNumbers = [];
        this.lastNumbers = [];
        this.numberCounts = null;
        this.statInPercents = null;
        this.copyFrom(initData);
    }
}