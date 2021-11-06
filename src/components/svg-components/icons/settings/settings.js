import React from 'react';
import * as PropTypes from 'prop-types';
import * as cn from 'classnames';

import './settings.scss';

function SettingsIconSvg({ className, onClick }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={cn({ SettingsIconSvg: true, [className]: !!className })}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                y="0%"
                className="icon--1SFiO"
                viewBox="0 0 30 30"
            >
                <path d="M28 16.67v-3.34l-3.326-.606a8.238 8.238 0 00-1.209-2.934l2.016-2.833-2.419-2.428-2.822 2.024a12.678 12.678 0 00-2.922-1.214L16.713 2h-3.325l-.605 3.339c-1.008.202-2.016.708-2.923 1.214L7.04 4.529 4.62 6.957 6.636 9.79c-.504.91-1.008 1.82-1.21 2.934L2 13.33v3.338l3.426.607a8.238 8.238 0 001.21 2.934L4.62 23.043l2.42 2.427 2.821-2.024c.907.506 1.915 1.012 2.923 1.214l.604 3.34h3.325l.605-3.339c1.008-.202 2.015-.708 2.922-1.214l2.822 2.024 2.419-2.428-2.016-2.833c.504-.91 1.008-1.922 1.21-2.934L28 16.67zM15 21c-3.344 0-6-2.656-6-6s2.656-6 6-6 6 2.656 6 6-2.754 6-6 6z" />
            </svg>
        </svg>
    );
}

SettingsIconSvg.defaultProps = {
    className: '',
};

SettingsIconSvg.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default SettingsIconSvg;
