import React from 'react';
import MinimalMask from '../minimal-mask';
import NativeMask from '../native-mask';
import './mask.scss';

const Mask = (props) => {

    return (
        <div
            className="Mask"
        >
            {props.fullscreenType === 'native' && <NativeMask/>}
            {props.fullscreenType === 'minimal-ui' && <MinimalMask />}
            {(props.fullscreenType !== 'native' && props.fullscreenType !== 'minimal-ui') && <NativeMask/>}
        </div>
    );
};

export default Mask;