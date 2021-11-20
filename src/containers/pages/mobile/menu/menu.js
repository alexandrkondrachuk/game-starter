import React from 'react';
import * as _ from 'lodash';
import { slide as Menu } from 'react-burger-menu';
import { Animated } from 'react-animated-css';
import { Icon } from '../../../../components/svg-components';
import Types from '../../../../classes/Types';
import { MenuRenderer } from './components';
import config from '../../../../config';
import { useSelector, useDispatch } from 'react-redux';

import './menu.scss';
import { setMenuItemToOpen, setMenuOpen } from '../../../../store/slices/game/gameSlice';

export default function MobileMenu(props) {
    const userAgent = window.navigator.userAgent;
    const isStartFromApp = /Native/.test(userAgent);
    const isFromIphone = /iPhone/.test(userAgent);
    if (!!!isStartFromApp && isFromIphone) document.documentElement.style.setProperty("--button-bottom", "5vh");
    const menuItemToOpen = useSelector((state) => (_.get(state, 'game.menuItemToOpen')));

    const dispatch = useDispatch();
    const menuDefaultWidth = '80%';
    const animationDuration = 1000;
    const [itemType, setItemType] = React.useState(null);
    const items = Types.mobileMenuItems.filter((item) => (!!item.enabled));
    const itemsMap = Types.mobileMenuItemsMap;
    const menuWidth = !itemType ? menuDefaultWidth : _.get(itemsMap.get(itemType), 'width', '100%');
    const onClick = (e, type = null) => {
        e.preventDefault();
        setItemType(type);
        dispatch(setMenuItemToOpen(type));
    };
    const onChange = (state) => {
        const { isOpen } = state;
        if (!isOpen) {
            dispatch(setMenuItemToOpen(''));
            _.delay(() => setItemType(null), 400, 500);     
        }
    };

    React.useEffect(() => {
        if (menuItemToOpen === 'chat') setItemType(menuItemToOpen);
    });

    return (
        <Menu {...props} right width={menuWidth} overlayClassName="MobileMenu" onStateChange={onChange}>
            { !itemType && items.map((item) => (
                <a key={item.type} className="menu-item" href={`/${item.type}`} onClick={(e) => onClick(e, item.type)}>
                    <span className="menu-item-icon"><Icon path={item.icon} /></span>
                    <span className="menu-item-text">{item.label}</span>
                </a>
            )) }
            { (
                <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={animationDuration} animationOutDuration={animationDuration} isVisible={!!itemType}>
                    {itemType && <MenuRenderer type={itemType} />}
                </Animated>
            ) }
        </Menu>
    );
}
