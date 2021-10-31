import BaseModel from '../base';

export default class CurrencyModel extends BaseModel {
    constructor(initData) {
        super();
        this.chipValue1 = 1;
        this.chipValue2 = 5;
        this.chipValue3 = 25;
        this.chipValue4 = 100;
        this.chipValue5 = 500;
        this.chipValue6 = 1000;
        this.country = "";
        this.destinationCurrency = "USD";
        this.id = 1;
        this.minBet = 1;
        this.rate = 1;
        this.sourceCurrency = "EUR";
        this.updateDate = '';
        this.copyFrom(initData);
    }
}