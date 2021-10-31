import React from 'react';
import * as _ from 'lodash';
import config from 'react-global-configuration';
import { useSelector, useDispatch, batch } from 'react-redux';
import { streamStageEnum } from '../../enums';
import { setStreamInstance, setPlayerStage, setError } from '../../store/slices/stream/streamSlice';
import './webrtc-player.scss';

const WebrtcPlayer = () => {
    const playerId = 'webrtc-player';
    const dispatch = useDispatch();
    const playerInstance = useSelector((state) => (_.get(state, 'stream.playerInstance', null)));

    const setupNanoplayer = (config) => {
        const nanoPlayer = new window.NanoPlayer(playerId);

        nanoPlayer.setup(config).then(function (config) {
            if(!playerInstance) {
                batch(() => {
                    dispatch(setStreamInstance(nanoPlayer));
                    dispatch(setPlayerStage(streamStageEnum.get(1).value));
                });
            }
        }, function (error) {
            batch(() => {
                dispatch(setError(error));
                dispatch(setPlayerStage(streamStageEnum.get(1).value));
            });
        });
    };

    React.useEffect(() => {
        setupNanoplayer(config.get('webrtcSettings'));
    }, [])

    return (
        <div className="WebrtcPlayer">
            <div id={`${playerId}`} />
        </div>
    );
};

export default WebrtcPlayer;