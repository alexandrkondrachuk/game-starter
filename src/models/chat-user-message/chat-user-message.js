import BaseModel from '../base';

export default class ChatUserMessageModel extends BaseModel {
    constructor(initData) {
        super();
        this.playerId = '';
        this.message = '';
        this.copyFrom(initData);
    }
}