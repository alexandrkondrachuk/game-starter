import * as _ from 'lodash';
import moment from 'moment';
import Types from '../../classes/Types';

import BaseModel from '../base';

export default class HistoryModel extends BaseModel {
    constructor(initData) {
        super();
        this.betCode = 1;
        this.betValue = 0;
        this.betName = '';
        this.creationDate = '';
        this.creationDateFormatted = '';
        this.id = 0;
        this.roundId = 0;
        this.win = 0;
        this.winLose = 0;

        this.copyFrom(initData);
        this.init(initData);
    }

    init(initData) {
        const betNames = Types.API__BET__TYPE__NAME;
        const betCode = _.get(initData, 'betCode');
        const betCodeParams = betCode.split('.');

        this.betName = _.get(betNames, `[${betCodeParams[0]}]`);

        if (betCodeParams.length > 1) {
            this.betName += ' ';
            this.betName += betCodeParams.slice(1, betCodeParams.length).join('/');
        }

        this.creationDateFormatted = moment(_.get(initData, 'creationDate', '')).format(Types.dateFormatShort);
    }
}
