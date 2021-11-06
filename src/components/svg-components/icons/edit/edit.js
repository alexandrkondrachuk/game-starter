import React from 'react';
import * as PropTypes from 'prop-types';
import * as cn from 'classnames';

import './edit.scss';

function EditIconSvg({ className, onClick }) {
    return (
        <svg
            viewBox="0 0 90 90"
            className={cn({ EditIconSvg: true, [className]: !!className })}
            onClick={onClick}
        >
            <path
                d="M45 0c24.853 0 45 20.147 45 45S69.853 90 45 90 0 69.853 0 45 20.147 0 45 0zm0 3C21.804 3 3 21.804 3 45s18.804 42 42 42 42-18.804 42-42a41.82 41.82 0 00-5.018-19.926L52.975 54.081l-3.536-3.535 29.832-29.831a42.195 42.195 0 00-2.955-3.703L45.904 47.425l-3.536-3.536 30.4-30.4a42.187 42.187 0 00-3.726-2.931L39.247 40.354l-3.536-3.536L64.656 7.874A41.816 41.816 0 0045 3zM30.762 53.081l5.657 5.657-7.072 1.415 1.415-7.072zM33.59 38.94l16.97 16.97-10.606 2.122-8.485-8.485L33.59 38.94z"
                opacity="0.8"
            />
        </svg>
    );
}

EditIconSvg.defaultProps = {
    className: '',
};

EditIconSvg.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default EditIconSvg;
