import React from 'react';
import * as _ from 'lodash';
import Switch from '@material-ui/core/Switch';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from '../../../../../../components/svg-components';
import appSlice from '../../../../../../store/slices/app';
import Api from '../../../../../../classes/Api';

import './setnickname.scss';
import { setMenuItemToOpen } from '../../../../../../store/slices/game/gameSlice';

const SetNickname = (store) => {

    const dispatch = useDispatch();
    const nickname = useSelector((state) => (_.get(state, 'game.player.nickname', null)));
    const [newNickname, setNickname] = React.useState(nickname);
    const playerInstance = useSelector((state) => (_.get(state, 'stream.playerInstance', null)));

    const doSetNickName = () => {
        if (Api.instance) {
            Api.instance.doSetNickName(newNickname);
        }
    };

    const saveNickname = () => {
        if (newNickname) {
            doSetNickName();
            dispatch(setMenuItemToOpen(''));
        }
    };

    const onChange = (e) => {
        setNickname(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && newNickname) {
            doSetNickName();
            dispatch(setMenuItemToOpen(''));
        }
    };

    return (
        <div className="SetNickname">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <div className="SetNickname__Header">
                <div className="Header__Icon"><Icon path="sticky" /></div>
                <div className="Header__Text">Change name</div>
            </div>
            <div className="SetNickname__Title">From 1 to 20 symbols</div>
            <div className="SetNickname__Input">
                <input
                    type="text"
                    value={newNickname}
                    onChange={onChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your name here"
                />
            </div>
            <div className="SetNickname__Save">
                <button type="button" onClick={saveNickname}>Save</button>
            </div>          
        </div>
    );
}

export default SetNickname;
