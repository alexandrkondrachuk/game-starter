import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import {
    useWindowHeight,
} from '@react-hook/window-size';
import { Icon } from '../../../../../../../components/svg-components';

import './help.scss';

export default function Help() {
    const headerRef = React.useRef(null);
    const [headerHeight, setHeaderHeight] = React.useState(0);
    const onlyHeight = useWindowHeight();
    const bodyHeight = onlyHeight - headerHeight;

    React.useEffect(() => {
        if (headerRef && headerRef.current) { setHeaderHeight(headerRef.current.clientHeight); }
    });
    return (
        <div className="Help__Mobile">
            <div ref={headerRef} className="Help__Mobile__Header">
                <div className="Header__Icon"><Icon path="help" /></div>
                <div className="Header__Text">Help</div>
            </div>
            <div className="Help__Mobile__Body">
                <Scrollbars
                    className="Chat__Mobile__Scrollbar"
                    style={{ height: `${bodyHeight}px` }}
                    renderThumbVertical={({ style, ...props }) => (
                        <div
                            {...props}
                            style={{
                                ...style,
                                backgroundColor: '#96ffff',
                                width: '6px',
                                opacity: '0.6',
                            }}
                        />
                    )}
                >
                    <h4 className="title">Game Rules</h4>
                    <section className="rule-section">
                        <h5 className="rule-title">
                            <span className="rule-number">1</span>
                            Know that you can bet on either of two hands.
                        </h5>
                        <p>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            One is the Banker's hand, the other is the Player's hand. A player may bet on either hand.
                            Bets must be placed on either the Player or Banker before cards are dealt
                        </p>
                    </section>
                    <section className="rule-section">
                        <h5 className="rule-title">
                            <span className="rule-number">2</span>
                            Know how cards are dealt.
                        </h5>
                        <p>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Two cards are dealt to both the Player and the Banker. A player or casino operator holding the shoe slides one card out and places it face up in the Player's box on the felt table. The next card, the first of the Banker hand, is placed in the Banker's box on the table. The house then deals another Player card, then the second Banker card. The dealer's first round consists of two cards for both the Player and Banker.
                        </p>
                    </section>
                    <section className="rule-section">
                        <h5 className="rule-title">
                            <span className="rule-number">3</span>
                            Announce the point total of both of sets of cards.
                        </h5>
                        <p>
                            Tens and face cards all are worth zero points; all other cards are worth their face value, with the ace worth one point. If a total is more than 10, the second digit is the value of the hand. For example, a 9 and a 6, which total 15, make up a five-point hand. In order to win, your bet must be on the hand that totals closer to nine.
                        </p>
                    </section>
                    <section className="rule-section">
                        <h5 className="rule-title">
                            <span className="rule-number">4</span>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Understand the "natural" win.
                        </h5>
                        <p>
                            If in the first two cards dealt, the point total is 8 or 9 for either the Player or the Banker, this is called a natural win and the game is over. Bets that have already been placed are cashed out.
                        </p>
                    </section>
                    <section className="rule-section">
                        <h5 className="rule-title">
                            <span className="rule-number">5</span>
                            Determine whether the player gets a third card by looking at the point totals.
                        </h5>
                        <p>
                            The Player hand is completed first. A total of 8 or 9 for the Player will get no additional cards. The Player stands on totals of 6 or 7. On any other total, 0-5, the Player draws a third card, unless the banker has 8 or 9, in which case the bank hand wins with no further draw
                        </p>
                    </section>
                    <section className="rule-section">
                        <h5 className="rule-title">
                            <span className="rule-number">6</span>
                            Know the rules governing the third card for the Banker.
                        </h5>
                        <p>
                            <ul>
                                <li>If the Player’s third card is 9, 10, face-card or Ace, the Banker draws when he has a 0-3, and stays with a 4-7.</li>
                                <li>If the Player’s third card is 8, the Banker draws when he has a 0-2, and stays with a 3-7.</li>
                                <li>If the Player’s third card is 6 or 7, the Banker draws when he has a 0-6, and stays with a 7.</li>
                                <li>If the Player’s third card is 4 or 5, the Banker draws when he has a 0-5, and stays with a 6-7.</li>
                                <li>If the Player’s third card is 2 or 3, the Banker draws when he has a 0-4, and stays with a 5-7.</li>
                            </ul>
                        </p>
                    </section>
                    <section className="rule-section">
                        <h5 className="rule-title">
                            <span className="rule-number">7</span>
                            Once all cards are dealt, calculate the winning hand.
                        </h5>
                        <p>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            The winning hand is that which totals closer to 9. In the event of a tie, neither hand wins or loses. Sometimes a commission is paid out of winnings when betting on the Banker's hand.
                        </p>
                    </section>
                </Scrollbars>
            </div>
        </div>
    );
}
