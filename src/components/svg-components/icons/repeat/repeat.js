import React from 'react';
import * as PropTypes from 'prop-types';
import * as cn from 'classnames';

import './repeat.scss';

function RepeatIconSvg({ className, onClick }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={cn({ RepeatIconSvg: true, [className]: !!className })}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                y="0%"
                className="icon--1SFiO"
                viewBox="0 0 30 30"
            >
                <path d="M22.413 8.288L24.7 6v6h-6l2.296-2.296a8 8 0 10-.637 11.236l1.514 1.324A9.966 9.966 0 0115 25C9.477 25 5 20.523 5 15S9.477 5 15 5a9.974 9.974 0 017.413 3.288z" />
            </svg>
        </svg>
    );
}

RepeatIconSvg.defaultProps = {
    className: '',
};

RepeatIconSvg.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default RepeatIconSvg;
