import BaseModel from '../base';

export default class PlayerModel extends BaseModel {
    constructor(initData) {
        super();
        this.averageBetInEUR = 0;
        this.balance = 0;
        this.betsCountForSession = 0;
        this.cid = '';
        this.completedBets = [];
        this.country = null;
        this.currency = 'USD';
        this.downtimeRoundsCount = 0;
        this.ggrForSessionInEUR = 0;
        this.ipAddress = '';
        this.isChatBlocked = true;
        this.isFraud = false;
        this.isNeedToRemove = false;
        this.isNeedToSendPartnerResult = false;
        this.isNotNeedToStop = true;
        this.lang = "en";
        this.minBet = 1;
        this.nickname = null;
        this.partnerBetTxId = null;
        this.partnerWinTxId = null;
        this.playMode = 1;
        this.playerId = '';
        this.playerRoundId = 0;
        this.rateToEUR = 1;
        this.sessionToken = null;
        this.totalBetOfCurrentRound = 0;
        this.totalBets = [];
        this.totalWinOfCurrentRound = 0;
        this.userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36";
        this.userAgentSR = '';
        this.copyFrom(initData);
    }
}