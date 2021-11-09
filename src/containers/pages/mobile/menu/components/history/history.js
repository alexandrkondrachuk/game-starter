import React from 'react';
import * as _ from 'lodash';
import * as axios from 'axios';
import { Scrollbars } from 'react-custom-scrollbars';
import {
    useWindowHeight,
} from '@react-hook/window-size';
import { useSelector } from 'react-redux';
import getSymbolFromCurrency from 'currency-symbol-map';
import { Icon } from '../../../../../../components/svg-components';
import HistoryModel from '../../../../../../models/history-model/history-model';
import config from 'react-global-configuration';

import './history.scss';

const History = () => {
    const [history, setHistory] = React.useState(null);
    const [headerHeight, setHeaderHeight] = React.useState(0);
    const [tableHeaderHeight, setTableHeaderHeight] = React.useState(0);
    const headerRef = React.useRef(null);
    const tableHeaderRef = React.useRef(null);
    const SUCCESS__STATUS = 200;
    const NOT__FOUND__STATUS = 404;
    const onlyHeight = useWindowHeight();
    const historyHeight = onlyHeight - headerHeight - tableHeaderHeight;

    const currency = useSelector((state) => (_.get(state, 'game.player.currency')));
    const currencySymbol = getSymbolFromCurrency(currency);
    const cid = useSelector((state) => (_.get(state, 'game.player.cid')));
    const playerId = useSelector((state) => (_.get(state, 'game.player.playerId')));

    const getHistory = async () => {
        const host = config.get('server.host');
        const dataPoint = config.get('apiDataPoints.history');
        const historyUrl = `${host}${dataPoint}`;
        const params = {
            cid,
            playerId,
        };
        try {
            const res = await axios.get(historyUrl, { params });
            const h = _.get(res, 'data');
            const status = _.get(res, 'status', NOT__FOUND__STATUS);
            if (status !== SUCCESS__STATUS) return null;
            if (Array.isArray(h) && h.length > 0) {
                const historyModels = h.map((item) => (new HistoryModel({ ...item })));

                setHistory(historyModels.reverse());
                return h;
            }
            return null;
        } catch (e) {
            console.error(e);
            return null;
        }
    };

    React.useEffect(() => {
        getHistory()
            .then((res) => { console.log('History res', res); })
            .catch((err) => { console.error('History res error', err); });
    });

    React.useEffect(() => {
        if (headerRef && headerRef.current) setHeaderHeight(headerRef.current.clientHeight);
        if (tableHeaderRef && tableHeaderRef.current) setTableHeaderHeight(tableHeaderRef.current.clientHeight);
    });

    return (
        <div className="History__Mobile">
            <div ref={headerRef} className="History__Mobile__Header">
                <div className="Header__Icon"><Icon path="history" /></div>
                <div className="Header__Text">Game History</div>
            </div>
            <div className="History__Mobile__Body">
                <div className="History__Table">
                    <div className="Table">
                        <div ref={tableHeaderRef} className="Tr primary">
                            <div className="Th">Date</div>
                            <div className="Th">Bet type</div>
                            <div className="Th">Bet</div>
                            <div className="Th">Win/Lose</div>
                        </div>
                        <div className="Table__Body">
                            <Scrollbars
                                className="Table__Scrollbar"
                                style={{ height: `${historyHeight}px` }}
                                renderThumbVertical={({ style, ...props }) => (
                                    <div
                                        {...props}
                                        style={{
                                            ...style, backgroundColor: '#96ffff', width: '6px', opacity: '0.6',
                                        }}
                                    />
                                )}
                            >
                                { history && history.map((h) => (
                                    <div key={_.get(h, 'id', '')} className="Tr">
                                        <div className="Td">{_.get(h, 'creationDateFormatted', '')}</div>
                                        <div className="Td">{_.get(h, 'betName', '')}</div>
                                        <div className="Td">
                                            {currencySymbol}
                                            { ' ' }
                                            {_.get(h, 'betValue', 0)}
                                        </div>
                                        <div className="Td">
                                            {currencySymbol}
                                            { ' ' }
                                            {_.get(h, 'winLose', 0)}
                                        </div>
                                    </div>
                                )) }
                            </Scrollbars>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;
