import React from 'react';
import * as PropTypes from 'prop-types';
import * as cn from 'classnames';

import './undo.scss';

function UndoIconSvg({ className, onClick }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={cn({ UndoIconSvg: true, [className]: !!className })}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                y="0%"
                className="icon--1SFiO"
                viewBox="0 0 30 30"
            >
                <path d="M11 7h4.5a8.5 8.5 0 110 17H8v-2h7.5a6.5 6.5 0 100-13H11v3L6 8l5-4v3z" />
            </svg>
        </svg>
    );
}

UndoIconSvg.defaultProps = {
    className: '',
};

UndoIconSvg.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default UndoIconSvg;
