import BaseModel from '../base';

export default class ChatUserMessageModel extends BaseModel {
    constructor(initData) {
        super();
        this.PlayerId = '';
        this.Message = '';
        this.copyFrom(initData);
    }
}