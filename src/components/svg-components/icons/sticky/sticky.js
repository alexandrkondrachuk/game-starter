import React from 'react';
import * as cn from 'classnames';
import * as PropTypes from 'prop-types';

import './sticky.scss';

function StickyIconSvg({ className, onClick }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={cn({ StickyIconSvg: true, [className]: !!className })}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                y="0%"
                className="icon--1SFiO"
                viewBox="0 0 30 30"
            >
                <path d="M26 21.7V23h-1.3l-5.937-5.964-5.071 5.02-1.212-7.73-3.809-3.78 4.95-4.9 3.813 3.776 7.834 1.173L20 15.811l6 5.889zM13.019 4.998L8.039 9.93 4 9.396 12.48 1l.539 3.998z" />
            </svg>
        </svg>
    );
}

StickyIconSvg.defaultProps = {
    className: '',
};

StickyIconSvg.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default StickyIconSvg;
