import React from 'react';
import * as PropTypes from 'prop-types';
import * as cn from 'classnames';

import './double.scss';

function DoubleIconSvg({ className, onClick }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={cn({ DoubleIconSvg: true, [className]: !!className })}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                y="0%"
                className="icon--1SFiO"
                viewBox="0 0 30 30"
            >
                <path d="M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3zm6.237 18l-2.234-2.978L16.78 21H15l3.198-4.09L15.142 13h1.779l2.082 2.907L21.098 13h1.768l-3.157 3.91L23 21h-1.763zM14 19.72V21H7v-1.327l5.049-5.994c.217-.269.363-.516.451-.779a2.65 2.65 0 00.08-.623 2.04 2.04 0 00-.523-1.389c-.357-.39-.862-.595-1.503-.608-.565 0-1.044.178-1.423.523-.352.31-.578.735-.677 1.265H7.02c.088-.854.416-1.553.999-2.127.641-.614 1.446-.93 2.386-.941 1.062.01 1.934.334 2.59.962.666.621.995 1.387 1.006 2.34 0 .76-.238 1.42-.73 2.013L8.73 19.72H14z" />
            </svg>
        </svg>
    );
}

DoubleIconSvg.defaultProps = {
    className: '',
};

DoubleIconSvg.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default DoubleIconSvg;
