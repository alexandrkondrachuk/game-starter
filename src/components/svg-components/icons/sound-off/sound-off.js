import React from 'react';
import * as PropTypes from 'prop-types';
import * as cn from 'classnames';

import './sound-off.scss';

function SoundOffIconSvg({ className, onClick }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={cn({ SoundOffIconSvg: true, [className]: !!className })}
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
                    d="M25.143 15L28 17.857 26.857 19 24 16.143 21.143 19 20 17.857 22.857 15 20 12.143 21.143 11 24 13.857 26.857 11 28 12.143 25.143 15z"
                    data-role="cross"
                />
            </svg>
        </svg>
    );
}

SoundOffIconSvg.defaultProps = {
    className: '',
};

SoundOffIconSvg.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default SoundOffIconSvg;
