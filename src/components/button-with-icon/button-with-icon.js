import React from 'react';
import * as PropTypes from 'prop-types';
import * as cn from 'classnames';
import './button-with-icon.scss';

const ButtonWithIcon = ({ icon, borderEnable, isActive, isPulse, onClick }) => {

    const buttonIcons = {
        favourite: (<path
            d="M15 23.559L6.348 28 8 18.593l-7-6.662 9.674-1.372L15 2l4.326 8.559L29 11.93l-7 6.662L23.652 28z"/>),
        statistic: (<path d="M4 12h4v14H4V12zm6 3h4v11h-4V15zm6-6h4v17h-4V9zm6-5h4v22h-4V4z"/>),
        toggle: (<path d="M9.99 8.947l8.218-8.64 1.449 1.38-9.67 10.164L.344 1.684 1.794.308z"/>),
        toggleReverse: (<path d="M9.99 8.947l8.218-8.64 1.449 1.38-9.67 10.164L.344 1.684 1.794.308z"/>),
        undo: (<path d="M11 7h4.5a8.5 8.5 0 110 17H8v-2h7.5a6.5 6.5 0 100-13H11v3L6 8l5-4v3z"/>),
        double: (<path d="M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3zm6.237 18l-2.234-2.978L16.78 21H15l3.198-4.09L15.142 13h1.779l2.082 2.907L21.098 13h1.768l-3.157 3.91L23 21h-1.763zM14 19.72V21H7v-1.327l5.049-5.994c.217-.269.363-.516.451-.779a2.65 2.65 0 00.08-.623 2.04 2.04 0 00-.523-1.389c-.357-.39-.862-.595-1.503-.608-.565 0-1.044.178-1.423.523-.352.31-.578.735-.677 1.265H7.02c.088-.854.416-1.553.999-2.127.641-.614 1.446-.93 2.386-.941 1.062.01 1.934.334 2.59.962.666.621.995 1.387 1.006 2.34 0 .76-.238 1.42-.73 2.013L8.73 19.72H14z"/>),
        repeat: (<path d="M22.413 8.288L24.7 6v6h-6l2.296-2.296a8 8 0 10-.637 11.236l1.514 1.324A9.966 9.966 0 0115 25C9.477 25 5 20.523 5 15S9.477 5 15 5a9.974 9.974 0 017.413 3.288z" />),
        auto: (<path d="M28 15.212c0 4.355-3.782 7.887-8.456 7.909v.002h-9.201V26L5.9 22.236l4.443-3.753v2.871H19.5v-.006c3.636 0 6.593-2.753 6.593-6.136 0-1.852-.89-3.51-2.29-4.637l1.303-1.3c1.77 1.45 2.895 3.57 2.895 5.937zm-4.333-7.437l-4.356 3.765V8.66h-8.978v.006c-3.563 0-6.462 2.761-6.462 6.154 0 1.877.89 3.557 2.285 4.686l-1.374 1.22C3.08 19.272 2 17.17 2 14.82c0-4.37 3.708-7.91 8.29-7.932v-.003h9.021V4l4.356 3.775zM12.833 11.7l4.334 3.3-4.334 3.3v-6.6z"/>),
        chat: (<path d="M21.948 18.785c.027-.278.042-.559.043-.844.127-2.734-1.14-5.202-3.568-7.19-2.242-1.735-4.842-2.644-7.825-2.742.473-.971 1.217-1.868 2.203-2.676C14.81 3.778 17.156 3 19.948 3s5.138.778 7.037 2.333C28.995 6.89 30 8.778 30 11s-1.117 4.222-3.239 5.889L29.777 21l-7.707-2.222-.122.007zm-4.749-6.452c1.9 1.556 2.904 3.445 2.793 5.556 0 2.222-1.006 4.111-2.904 5.667-2.01 1.555-4.356 2.333-7.148 2.333l-2.01-.111L.223 28l3.016-4.111C1.117 22.222 0 20.222 0 18c0-2.222 1.005-4.111 3.015-5.667C4.915 10.778 7.26 10 10.052 10s5.137.778 7.147 2.333z" />),
        menu: (<path d="M6 16v-2h18v2H6zm0 8v-2h18v2H6zM6 8V6h18v2H6z"/>),
        racetrack: (<path d="M8 8h6v2H8V8zm8 0h6v2h-6V8zm8 .07A7.005 7.005 0 0129.93 14H27.9a5.006 5.006 0 00-3.9-3.9V8.07zM29.93 16A7.005 7.005 0 0124 21.93V19.9a5.006 5.006 0 003.9-3.9h2.03zM22 22h-6v-2h6v2zm-8 0H8v-2h6v2zm-8-.07A7.005 7.005 0 01.07 16H2.1A5.006 5.006 0 006 19.9v2.03zM.07 14A7.005 7.005 0 016 8.07v2.03A5.006 5.006 0 002.1 14H.07z"/>),
    };

    return (
        <button className={cn('ButtonWithIcon', {
            withBorder: borderEnable,
            toggle: icon === 'toggle',
            toggleReverse: icon === 'toggleReverse',
            pulse: isPulse,
            active: isActive,
        })}
        onClick={onClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-wrapper"
                viewBox="0 0 100 100"
                style={{ height: "100%" }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    y="0%"
                    className="icon"
                    viewBox="0 0 30 30"
                >
                    {buttonIcons[icon]}
                </svg>
            </svg>
        </button>
    );
};

ButtonWithIcon.defaultProps = {
    icon: 'favourite',
    borderEnable: true,
    isActive: false,
    onClick: (e) => {console.log(e)},
};

ButtonWithIcon.propTypes = {
    icon: PropTypes.oneOf([
        'favourite',
        'auto',
        'statistic',
        'toggle',
        'toggleReverse',
        'undo',
        'double',
        'racetrack',
        'menu'
    ]),
    borderEnable: PropTypes.bool,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
};

export default ButtonWithIcon;