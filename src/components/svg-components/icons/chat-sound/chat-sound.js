import React from 'react';
import * as PropTypes from 'prop-types';
import * as cn from 'classnames';

import './chat-shound.scss';

function ChatSoundIconSvg({ className, onClick }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={cn({ ChatSoundIconSvg: true, [className]: !!className })}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                y="0%"
                fill="#1a1a1a"
                className="icon--1SFiO"
                viewBox="0 0 30 30"
            >
                {/* eslint-disable-next-line max-len */}
                <path d="M13.4 25.858A9.01 9.01 0 016.224 19H6a4 4 0 01-.441-7.976C6.103 6.513 10.359 3 15 3c4.64 0 8.897 3.513 9.441 8.024A4 4 0 0124 19h-1v-7c0-4.418-3.582-6-8-6s-8 1.582-8 6v5a8.003 8.003 0 006.012 7.751 2.5 2.5 0 11.388 1.107z" />
            </svg>
        </svg>
    );
}

ChatSoundIconSvg.defaultProps = {
    className: '',
};

ChatSoundIconSvg.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default ChatSoundIconSvg;
