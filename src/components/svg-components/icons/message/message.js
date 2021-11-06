import React from 'react';
import * as PropTypes from 'prop-types';
import * as cn from 'classnames';

import './message.scss';

function MessageIconSvg({ className, onClick }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enableBackground="new 0 0 472.615 472.615"
            version="1.1"
            viewBox="0 0 472.615 472.615"
            xmlSpace="preserve"
            className={cn({ MessageIconSvg: true, [className]: !!className })}
            onClick={onClick}
        >
            <path d="M471.197 70.93c-.284-.378-.474-.757-.756-1.039-2.648-3.215-6.996-4.255-10.778-2.741L6.088 239.77c-3.97 1.511-6.428 5.389-6.049 9.64.284 4.161 3.403 7.657 7.562 8.415l124.029 24.106 26.565 116.184.094.663c.189.754.378 1.417.756 2.077.189.379.473.852.756 1.231.378.567.851 1.041 1.229 1.511 1.229 1.135 2.741 1.985 4.348 2.271.19.093.473.187.663.187.473 0 1.04.095 1.512.095.662 0 1.229-.095 1.89-.189.284-.093.567-.093.945-.282.095 0 .189 0 .284-.096.567-.189 1.04-.376 1.513-.661h.095c.188-.189.473-.284.661-.473l130.079-91.414 73.548 13.896c.567.095 1.23.095 1.797.095 3.97 0 7.562-2.458 8.886-6.239l84.797-241.538c.189-.471.284-.944.378-1.417.189-.661.189-1.417.189-2.08 0-1.702-.472-3.405-1.418-4.822zM224.085 282.783c-.567.471-1.134 1.133-1.419 1.796a.74.74 0 00-.377.378l-50.86 86.404-21.175-92.928 235.012-143.786-161.181 148.136z" />
        </svg>
    );
}

MessageIconSvg.defaultProps = {
    className: '',
};

MessageIconSvg.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default MessageIconSvg;
