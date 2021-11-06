import React from 'react';
import * as PropTypes from 'prop-types';
import * as cn from 'classnames';

import './history.scss';

function HistoryIconSvg({ className, onClick }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={cn({ HistoryIconSvg: true, [className]: !!className })}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                y="0%"
                className="icon--1SFiO"
                viewBox="0 0 30 30"
            >
                <path d="M16 14.589l3 3.011-1.4 1.4-3.012-3-.129-.128-.457-.456v-.004L14 15.411V9h2v5.589zM3.166 13C4.118 7.325 9.054 3 15 3c6.627 0 12 5.373 12 12s-5.373 12-12 12c-3.95 0-7.454-1.908-9.64-4.854l1.573-1.236A9.986 9.986 0 0015 25c5.523 0 10-4.477 10-10S20.523 5 15 5c-4.838 0-8.873 3.436-9.8 8h2.5l-3.5 4-3.5-4h2.466z" />
            </svg>
        </svg>
    );
}

HistoryIconSvg.defaultProps = {
    className: '',
};

HistoryIconSvg.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default HistoryIconSvg;
