import React from 'react';
import MinimalMask from '../minimal-mask';
import NativeMask from '../native-mask';
import './mask.scss';

const Mask = (props) => {
    return (
        <div
            className="Mask"
        >
            {props.fullscreenType === "native"
                ? (<NativeMask/>)
                : props.fullscreenType === "minimal-ui"
                    ? (<MinimalMask />)
                    : "Mask won't be rendered"}
        </div>
    );
};

export default Mask;