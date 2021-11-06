import React from 'react';
import * as cn from 'classnames';
import * as PropTypes from 'prop-types';
import {
    CloseIconSvg,
    StickyIconSvg,
    ChatIconSvg,
    ChatSoundIconSvg,
    VideoIconSvg,
    SoundOffIconSvg,
    SoundOnIconSvg,
    SettingsIconSvg,
    EditIconSvg,
    HistoryIconSvg,
    HelpIconSvg,
    RepeatIconSvg,
    DoubleIconSvg,
    UndoIconSvg,
    PlayerIconSvg,
    BankerIconSvg,
    FullScreenOff,
    FullScreenOn,
    LimitsIconSvg,
    MessageIconSvg,
} from '../index';

import './icon.scss';

const icons = {
    close: CloseIconSvg,
    sticky: StickyIconSvg,
    chat: ChatIconSvg,
    chatSound: ChatSoundIconSvg,
    video: VideoIconSvg,
    soundOff: SoundOffIconSvg,
    soundOn: SoundOnIconSvg,
    settings: SettingsIconSvg,
    edit: EditIconSvg,
    history: HistoryIconSvg,
    help: HelpIconSvg,
    repeat: RepeatIconSvg,
    double: DoubleIconSvg,
    undo: UndoIconSvg,
    player: PlayerIconSvg,
    banker: BankerIconSvg,
    fullScreenOff: FullScreenOff,
    fullScreenOn: FullScreenOn,
    limits: LimitsIconSvg,
    message: MessageIconSvg,
};

function Icon({ path, className, onClick }) {
    const TagName = icons[path];
    return (
        <>
            {TagName && <TagName className={cn({ Icon: true, [className]: !!className })} onClick={onClick} />}
        </>
    );
}

Icon.defaultProps = {
    className: '',
    onClick: (e) => { console.log('Icon - onClick: ', e); },
};

Icon.propTypes = {
    path: PropTypes.oneOf([
        'close',
        'sticky',
        'chat',
        'chatSound',
        'video',
        'soundOff',
        'soundOn',
        'settings',
        'edit',
        'history',
        'help',
        'repeat',
        'double',
        'undo',
        'player',
        'banker',
        'fullScreenOff',
        'fullScreenOn',
        'limits',
        'message',
    ]).isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Icon;
