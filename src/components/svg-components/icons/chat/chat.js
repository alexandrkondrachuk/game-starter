import React from 'react';
import * as PropTypes from 'prop-types';
import * as cn from 'classnames';

import './chat.scss';

function ChatIconSvg({ className, onClick }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={cn({ ChatIconSvg: true, [className]: !!className })}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                y="0%"
                className="icon--1SFiO"
                viewBox="0 0 30 30"
            >
                {/* eslint-disable-next-line max-len */}
                <path d="M21.948 18.785c.027-.278.042-.559.043-.844.127-2.734-1.14-5.202-3.568-7.19-2.242-1.735-4.842-2.644-7.825-2.742.473-.971 1.217-1.868 2.203-2.676C14.81 3.778 17.156 3 19.948 3s5.138.778 7.037 2.333C28.995 6.89 30 8.778 30 11s-1.117 4.222-3.239 5.889L29.777 21l-7.707-2.222-.122.007zm-4.749-6.452c1.9 1.556 2.904 3.445 2.793 5.556 0 2.222-1.006 4.111-2.904 5.667-2.01 1.555-4.356 2.333-7.148 2.333l-2.01-.111L.223 28l3.016-4.111C1.117 22.222 0 20.222 0 18c0-2.222 1.005-4.111 3.015-5.667C4.915 10.778 7.26 10 10.052 10s5.137.778 7.147 2.333z" />
            </svg>
        </svg>
    );
}

ChatIconSvg.defaultProps = {
    className: '',
};

ChatIconSvg.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default ChatIconSvg;
