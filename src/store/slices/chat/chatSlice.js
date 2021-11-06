import { Record, Map } from 'immutable';
import { createSlice } from '@reduxjs/toolkit';
import * as _ from 'lodash';
import { ChatUserMessageModel } from '../../../models';

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: new Map(),
        messageIndex: 0,
        filteredMessages: [],
    },
    reducers: {
        addChatMessage(state, action) {
            //state.merge({ messages: saveMessage(state.messages, new ChatUserMessageModel(action.payload), state.messageIndex), filteredMessages: filterMessages(saveMessage(state.messages, new ChatUserMessageModel(action.payload), state.messageIndex)), messageIndex: state.messageIndex + 1 });
            state.messages = saveMessage(state.messages, new ChatUserMessageModel(action.payload), state.messageIndex);
            state.filteredMessages = filterMessages(state.messages);
            state.messageIndex = state.messageIndex + 1;
        },
    },
});

function saveMessage(list, message, id) {
    return list.set(id, message);
}

function filterMessages(list) {
    const listObj = list.toObject();
    return Object.values(listObj).map((v) => (v)).reverse();
}

export default chatSlice.reducer;
export const {
    addChatMessage,
} = chatSlice.actions;
export const { name } = chatSlice;
