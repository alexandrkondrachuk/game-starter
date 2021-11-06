import React from 'react';
import * as PropTypes from 'prop-types';
import Chat from '../chat';

export default function MenuRenderer({ type }) {
    const components = {
        chat: Chat,
    };
    const TagName = components[type];
    return (<TagName />);
}

MenuRenderer.propTypes = {
    type: PropTypes.oneOf(['chat']).isRequired,
};
