import React from 'react';
import * as _ from 'lodash';
import * as PropTypes from 'prop-types';
import { Animated } from 'react-animated-css';
import ChatMessageModel from '../../../../../../../models/chat-user-message';
import config from '../../../../../../../config';

import './message.scss';

const animationDuration = 400;

export default function Message({ model }) {
    return (
        <Animated animationIn="bounceIn" animationOut="bounceOut" animationInDuration={animationDuration} animationOutDuration={animationDuration} isVisible>
            <div className="Message">
                <span className="Message__Author">{ _.get(model, 'playerId') }</span>
                {' : '}
                <span className="Message__Content">{ _.get(model, 'message') }</span>
            </div>
        </Animated>
    );
}

Message.propTypes = {
    model: PropTypes.instanceOf(ChatMessageModel).isRequired,
};
