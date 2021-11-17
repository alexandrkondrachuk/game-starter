import React from 'react';
import * as _ from 'lodash';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import {
    useWindowHeight,
} from '@react-hook/window-size';
import { Icon } from '../../../../../../components/svg-components';
import Message from './message';
import Api from '../../../../../../classes/Api';
import { useSelector } from 'react-redux';

import './chat.scss';

function Chat({ messages: chatMessages }) {
    // Height Calculation
    const defaultMessage = { message: '' };
    const [messages, setMessages] = React.useState(defaultMessage);
    const [headerHeight, setHeaderHeight] = React.useState(0);
    const [footerHeight, setFooterHeight] = React.useState(0);
    const headerRef = React.useRef(null);
    const footerRef = React.useRef(null);
    const onlyHeight = useWindowHeight();
    const bodyHeight = onlyHeight - headerHeight - footerHeight;
    const dealerName = useSelector((state) => (_.get(state, 'game.roundState.dealerName')))

    React.useEffect(() => {
        if (headerRef && headerRef.current) setHeaderHeight(headerRef.current.clientHeight);
        if (footerRef && footerRef.current) setFooterHeight(footerRef.current.clientHeight);
    });

    const onChange = (e) => {
        const { name = 'message', value = '' } = e.target;
        setMessages({ ...messages, [name]: value });
    };
    const sendMessage = () => {
        const { message = '' } = messages;
        if (message) {
            Api.instance.doSendChatMessage(message);
            setMessages({ ...defaultMessage });
        }
    };
    const handleKeyPress = (e) => {
        const { message = '' } = messages;
        if (e.key === 'Enter' && message) {
            Api.instance.doSendChatMessage(message);
            setMessages({ ...defaultMessage });
        }
    };
    const { message = '' } = messages;
    return (
        <div className="Chat__Mobile">
            <div ref={headerRef} className="Chat__Mobile__Header">
                <div className="Header__Icon"><Icon path="chat" /></div>
                <div className="Header__Text">Chat</div>
            </div>
            <div className="Chat__Mobile__Dealer__Name">
                <span className="dealer">
                    {'Dealer'}
                </span>
                &nbsp;
                <span className="name">
                    {dealerName}
                </span>
            </div>
            <div ref={footerRef} className="Chat__Mobile__Footer">
                <input
                    id="message"
                    name="message"
                    type="text"
                    value={message}
                    onChange={onChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Tap to chat"
                    autoComplete="off"
                />
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button type="button" onClick={sendMessage}><Icon path="message" /></button>
            </div>
            <div className="Chat__Mobile__Body">
                <Scrollbars
                    className="Chat__Mobile__Scrollbar"
                    style={{ height: `${bodyHeight}px` }}
                    renderThumbVertical={({ style, ...props }) => (
                        <div
                            {...props}
                            style={{
                                ...style,
                                backgroundColor: '#96ffff',
                                width: '6px',
                                opacity: '0.6',
                            }}
                        />
                    )}
                >
                    { (chatMessages && chatMessages.length > 0) && chatMessages.map((m) => (<Message key={m.id} model={m} />)) }
                </Scrollbars>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    const messages = _.get(state, 'chat.filteredMessages', []);
    return { messages };
};

const dispatchStateToProps = (dispatch) => ({ dispatch });

Chat.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    messages: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, dispatchStateToProps)(Chat);
