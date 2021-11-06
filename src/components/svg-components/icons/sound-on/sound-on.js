import React from 'react';
import * as PropTypes from 'prop-types';
import * as cn from 'classnames';

import './sound-on.scss';

function SoundOnIconSvg({ className, onClick }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={cn({ SoundOnIconSvg: true, [className]: !!className })}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                y="0%"
                className="icon--1SFiO"
                viewBox="0 0 30 30"
            >
                <path
                    d="M18 28h-1.7l-9.067-8.56H5.287C3.473 19.44 2 18.05 2 16.337v-2.674c0-1.712 1.473-3.103 3.287-3.103h1.946L16.3 2H18v26z"
                    data-role="speaker"
                />
                <path
                    d="M21.57 9.258A7.976 7.976 0 0124 15a7.976 7.976 0 01-2.43 5.742l-1.414-1.414A5.983 5.983 0 0022 15a5.983 5.983 0 00-1.844-4.328l1.414-1.414"
                    data-role="first-stripe"
                />
                <path
                    d="M24.4 6.43l.002.003A11.964 11.964 0 0128 15c0 3.357-1.379 6.393-3.6 8.57l-1.415-1.414A9.97 9.97 0 0026 15a9.97 9.97 0 00-3.015-7.156l1.414-1.415"
                    data-role="second-stripe"
                />
            </svg>
        </svg>
    );
}

SoundOnIconSvg.defaultProps = {
    className: '',
};

SoundOnIconSvg.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default SoundOnIconSvg;
