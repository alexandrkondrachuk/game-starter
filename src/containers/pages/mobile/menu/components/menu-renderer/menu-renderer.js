import React from 'react';
import * as PropTypes from 'prop-types';
import Chat from '../chat';
import Limits from '../limits';
import Settings from '../settings';
import History from '../history';

export default function MenuRenderer({ type }) {
    const components = {
        chat: Chat,
        limits: Limits,
        settings: Settings,
        history: History,
    };
    const TagName = components[type];
    return (<TagName />);
}

MenuRenderer.propTypes = {
    type: PropTypes.oneOf(['chat']).isRequired,
    type: PropTypes.oneOf(['limits']).isRequired,
    type: PropTypes.oneOf(['settings']).isRequired,
    type: PropTypes.oneOf(['history']).isRequired,
};
