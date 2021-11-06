import React from 'react';
import * as PropTypes from 'prop-types';
import * as cn from 'classnames';

import './video.scss';

function VideoIconSvg({ className, onClick }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={cn({ VideoIconSvg: true, [className]: !!className })}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                y="0%"
                className="icon--1SFiO"
                viewBox="0 0 30 30"
            >
                <path d="M28 15v11c0 .535-.24 1-1 1l-5.004-3.564V26c.002 1-.996 2-1.996 2H5.004C4 28 3 27 3 26V15c0-1 1-2 2.004-2H20c1 0 1.996 1 1.996 2v2.564L27 14.003c.76.004 1 .466 1 .997zM7 12A5 5 0 117 2a5 5 0 010 10zm11 0a5 5 0 110-10 5 5 0 010 10z" />
            </svg>
        </svg>
    );
}

VideoIconSvg.defaultProps = {
    className: '',
};

VideoIconSvg.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default VideoIconSvg;
