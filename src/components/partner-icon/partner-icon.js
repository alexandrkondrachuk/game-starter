import React from 'react';
import './partner-icon.scss';

const PartnerIcon = ({partner}) => {

    const partnersIcons = {
        parimatch: (<svg viewBox="0 0 201 127" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M95.4281 0H16.8834L0 59.0587H78.578L95.4281 0Z" fill="#F8FF13"/>
        <path d="M121.921 67.2705H43.3766L26.4932 126.329H105.038L121.921 67.2705Z" fill="#F8FF13"/>
        <path d="M137.67 0H123.089H120.386H111.778H105.371H104.237L87.3535 59.0587H103.503H106.206L110.71 43.2763H131.597C142.575 43.2763 149.315 38.3047 152.351 27.6608L154.053 21.855C157.924 8.34162 151.584 0 137.67 0ZM134.2 28.0278H115.048L118.685 15.2818H137.737L134.2 28.0278Z" fill="#F8FF13"/>
        <path d="M200.8 67.2305H177.577L157.357 90.8539L149.082 67.2305H130.897L113.813 126.322H131.731L141.174 93.6233L147.447 111.875H158.958L175.642 92.5222L165.798 126.322H165.899H183.483L200.566 67.2305H200.8Z" fill="#F8FF13"/>
        </svg>),
    }

    return (
        <div className="PartnerIcon">
            {partnersIcons[partner]}
        </div>
    );
};

export default PartnerIcon