import * as signalR from '@microsoft/signalr';
import * as _ from 'lodash';
import Types from './Types';
import { store } from '../store/store';
import {
    setRoundState,
    setPlayer,
    setCurrency,
    setEndBetting,
    setNewRound,
    setLeftUntilEndBet,
    setConnectionToken,
    setRouletteStat,
    setLimits,
    setWin,
    setWinners,
} from '../store/slices/game/gameSlice';
import {
    addItemToPlacedBetsList,
    removeItemFromPlacedBetsList,
} from '../store/slices/bet/betSlice';
import {
    addChatMessage,
} from '../store/slices/chat/chatSlice';

const incomingMessages = Types.API__INCOMING__MESSAGES;

export default class Api {
    static RECONNECT__TIMEOUT = 5 * 1000;
    static instance;

    constructor({ url, options }) {
        if (typeof  Api.instance === 'object') {
            return Api.instance;
        }
        this.url = url || '';
        this.options = options || {
            skipNegotiation: true,
            transport: signalR.HttpTransportType.WebSockets,
        };

        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(this.url, this.options)
            .withAutomaticReconnect()
            .build();

        this.connection.onclose(this.start);

        this.init();

        Api.instance = this;
        return this;
    }

    async start() {
        try {
            await this.connection.start();
            return true;
        } catch (err) {
            console.error(err);
        }
    }

    async init() {
        try {
            this.subscriptions();
            return await this.start();
        } catch (e) {
            console.error(e);
            return false;
        }
    }

    subscriptions() {
        if (Array.isArray(incomingMessages) && incomingMessages.length > 0) {
            incomingMessages.forEach((message) => {
                this.connection.on(_.get(message, 'name'), _.get(this, `[${_.get(message, 'method')}]`));
            });
        }
    }

    onRoundState = (data) => store.dispatch(setRoundState(data));

    onNewRound = (data) => store.dispatch(setNewRound(data));

    onEndBetting = (data) => store.dispatch(setEndBetting(data));

    onBetPlaced = (data) => store.dispatch(addItemToPlacedBetsList(data));

    onPlayerInfo = (data) => store.dispatch(setPlayer(data));

    onLeftUntilEndBet = (data) => store.dispatch(setLeftUntilEndBet(data));

    onWin = (data) => store.dispatch(setWin(data));

    onUndoBetPlaced = (data) => store.dispatch(removeItemFromPlacedBetsList(data));

    onChatUserMessage = (data) => store.dispatch(addChatMessage(data));

    onCurrency = (data) => store.dispatch(setCurrency(data));

    onConnected = (data) => store.dispatch(setConnectionToken(data));

    onRouletteStat = (data) => store.dispatch(setRouletteStat(data));

    onLimits = (data) => store.dispatch(setLimits(data));

    onWinners = (data) => store.dispatch(setWinners(data))

    // Information Routes

    onPlayerBlocked = () => console.log('onPlayerBlocked');

    onPlayerPaused = () => console.log('onPlayerPaused');

    onTechBreakStarted = () => console.log('onTechBreakStarted');

    onTechBreakStopped = () => console.log('onTechBreakStopped');

    doBet(model) {
        return this.connection.invoke('Bet', model);
    }

    /**
     *
     * @param type:string - LastBet | AllBets
     * @returns {Promise<any>}
     */
    doUndoBet(type = 'LastBet') {
        return this.connection.invoke('UndoBet', type);
    }

    doSendChatMessage(message = '') {
        return this.connection.invoke('ChatUserMessage', message);
    }

    doDoublingBets() {
        return this.connection.invoke('DoublingBets');
    }

    doRepeatBets() {
        return this.connection.invoke('RepeatBets');
    }
}
