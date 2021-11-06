import React from 'react';
import * as PropTypes from 'prop-types';
import * as cn from 'classnames';

import './help.scss';

function HelpIconSvg({ className, onClick }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={cn({ HelpIconSvg: true, [className]: !!className })}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                y="0%"
                className="icon--1SFiO"
                viewBox="0 0 30 30"
            >
                <path d="M15 28C7.82 28 2 22.18 2 15S7.82 2 15 2s13 5.82 13 13-5.82 13-13 13zm-2-5.2h3.2v-3.284H13V22.8zm3.202-4.105c0-.668.12-1.159.432-1.76.312-.602.92-.985 1.85-1.707 1.144-.903 1.716-2.068 1.716-3.495 0-1.372-.728-2.538-1.717-3.336C17.495 7.598 16.36 7.2 15 7.2c-2.687 0-4.404 1.554-5.2 4.154l2.861.813c.382-1.3 1.145-1.95 2.29-1.95.613 0 1.098.167 1.455.5.356.335.535.782.535 1.341 0 .416-.083.74-.25.976-.165.234-.505.56-1.02.975-.912.74-1.661 1.513-1.988 2.22-.327.707-.684 1.509-.684 2.466h3.203z" />
            </svg>
        </svg>
    );
}

HelpIconSvg.defaultProps = {
    className: '',
};

HelpIconSvg.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default HelpIconSvg;
