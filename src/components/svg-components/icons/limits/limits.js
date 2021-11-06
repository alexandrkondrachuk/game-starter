import React from 'react';
import * as cn from 'classnames';
import * as PropTypes from 'prop-types';

import './limits.scss';

function LimitsIconSvg({ className, onClick }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn({ LimitsIconSvg: true, [className]: !!className })}
            onClick={onClick}
            viewBox="0 0 30 30"
        >
            <path d="M20.484 3h5.032v15.528H29L23 27l-6-8.472h3.484V3zM7 3l6 8.473H9.516V27H4.484V11.473H1L7 3z" />
        </svg>
    );
}

LimitsIconSvg.defaultProps = {
    className: '',
};

LimitsIconSvg.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default LimitsIconSvg;
