import React from 'react';
import * as cn from 'classnames';
import './portrait-racetrack.scss';
import Api from '../../../../../../../classes/Api';
import * as _ from 'lodash';
import BetEmmitModel from '../../../../../../../models/emmit/bet';
import { useSelector, useDispatch } from 'react-redux';
import { setNeighboursAmount } from '../../../../../../../store/slices/bet/betSlice';
import { roundStageEnum } from '../../../../../../../enums';
import config from 'react-global-configuration';

const PortraitRacetrack = () => {
    const dispatch = useDispatch();
    const chips = useSelector((state) => (_.get(state, 'bet.chips', [])));
    const neighboursAmount = useSelector((state) => (_.get(state, 'bet.neighboursAmount', 1)));
    const neighboursLimit = useSelector((state) => (_.get(state, 'bet.neighboursLimit', [1, 9])));
    const placedBetsList = useSelector((state) => (_.get(state, 'bet.placedBetsList', [])));
    const racetrackTargets = config.get('racetrackTargets');
    const activeChip = chips.find((chip) => (chip.active === true));
    const roundStage = useSelector((state) => (_.get(state, 'game.roundState.stage')));
    const isOpen = roundStageEnum?.get(roundStage)?.value === roundStageEnum?.get(2)?.value;

    const addNeighbours = () => dispatch(setNeighboursAmount(neighboursAmount + 1));

    const minusNeighbours = () => dispatch(setNeighboursAmount(neighboursAmount - 1));

    const doBet = (Code) => {
        if (Api.instance && isOpen) {
            const nominal = _.get(activeChip, 'nominal', 0);
            Api.instance.doBet(new BetEmmitModel({ BetValue: nominal, Code }));
        }
    };

    const doNeighbourBet = (Code) => doBet(`${Code}.${neighboursAmount}`);

    const renderCheckedBets = () => {
        const rxSections = new RegExp('SECT');
        const rxNeighbours = new RegExp('NGBR');
        const racetrackSectionsBets = placedBetsList.filter((bet) => (rxSections.test(bet.code)));
        const racetrackNeighboursBets = placedBetsList.filter((bet) => (rxNeighbours.test(bet.code)));
        const sectionsCoordinates = racetrackSectionsBets.map((bet) => (Object.values(racetrackTargets).find((target) => (target.key === bet.code))));
        const neighboursCoordinates = racetrackNeighboursBets.map((bet) => (Object.values(racetrackTargets).find((target) => (target.key === `${bet.code.split('.')[0]}.${bet.code.split('.')[1]}`))));
        const coordinates = [...sectionsCoordinates, ...neighboursCoordinates];

        return coordinates.map((bet, key) => (
                <g className="pointer" transform={`translate(${bet.coordinates.mobile[0] - 25},${bet.coordinates.mobile[1] - 25})`}>
                    <g transform="scale(0.5)"
                    >
                        <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 92.4c-23.4 0-42.4-19-42.4-42.4S26.6 7.6 50 7.6s42.4 19 42.4 42.4-19 42.4-42.4 42.4z"/>
                        <circle cx="50" cy="50" r="26.4"/>
                    </g>
                </g>
            )
        );
    }

    return (
        <div className="PortraitRacetrackWrapper">
            <div className="RacetrackButtonsWrapper">
                <div className={cn("RacetrackButton", { disabled: neighboursAmount === neighboursLimit[1] })}>
                    <button onClick={addNeighbours}>+</button>
                </div>
                <div className="RacetrackNeighbours">{neighboursAmount}</div>
                <div className={cn("RacetrackButton", { disabled: neighboursAmount === neighboursLimit[0] })}>
                    <button onClick={minusNeighbours}>-</button>
                </div>
            </div>
            <div className="RacetrackWrapper">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="withOverflow--1nExC PortraitRacetrack"
                    viewBox="0 0 400 940.5"
                >
                    <defs>
                        <g>
                            <radialGradient id="green_color_radial">
                                <stop offset="5%" stopColor="#41B14D"/>
                                <stop offset="95%" stopColor="#138D3A"/>
                            </radialGradient>
                            <radialGradient id="green_color_radial_highlighted">
                                <stop offset="5%" stopColor="rgba(154,213,160,1)"/>
                                <stop offset="95%" stopColor="rgba(129,194,150,1)"/>
                            </radialGradient>
                        </g>
                    </defs>
                    <g className="dddRacetrack-wrapper">
                        <path
                            d="M164.7 852.7c-16.1-4.5-30.6-12.1-41-21.3l-1-.9-80.8 55 1.8 1.5c23.4 19.2 54.9 34.6 88.8 43.5l1.5.4 32.6-77.5-1.9-.7z"
                            className="green_color"
                            data-bet-spot-id="0"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.0'].key)}
                        />
                        <path
                            d="M293.8 295.3L398.7 295.3 398.7 241.2 293.8 241.2z"
                            className="red_color"
                            data-bet-spot-id="1"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.1'].key)}
                        />
                        <path
                            d="M1.3 549.9H106.3V601.9H1.3z"
                            className="black_color"
                            data-bet-spot-id="2"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.2'].key)}
                        />
                        <path
                            d="M276.6 832.6c-10.3 9.2-24.5 16.4-41 20.6l-1.9.5 32.4 77.2 1.5-.4c33.3-8.7 64.5-23.9 87.7-42.6l1.8-1.5-79.4-54.7-1.1.9z"
                            className="red_color"
                            data-bet-spot-id="3"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.3'].key)}
                        />
                        <path
                            d="M1.3 654.9H106.3V700.6H1.3z"
                            className="black_color"
                            data-bet-spot-id="4"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.4'].key)}
                        />
                        <path
                            d="M247.7 91.9c6.2 2.7 12.2 5.9 17.8 9.7 4.6 3.1 8.9 6.7 12.8 10.6l.9 1 90.1-50.6-1.6-1.6c-9.1-9.3-19.3-17.4-30.3-24.1-11.2-6.8-23-12.6-35.3-17.3l-1.2-.5L245.6 91l2.1.9z"
                            className="red_color"
                            data-bet-spot-id="5"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.5'].key)}
                        />
                        <path
                            d="M1.3 346.2H106.3V396.09999999999997H1.3z"
                            className="black_color"
                            data-bet-spot-id="6"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.6'].key)}
                        />
                        <path
                            d="M293.8 700.8L398.7 700.8 398.7 655.1 293.8 655.1z"
                            className="red_color"
                            data-bet-spot-id="7"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.7'].key)}
                        />
                        <path
                            d="M121.6 112.3c3.9-4 8.2-7.6 12.9-10.8 5.6-3.8 11.5-7 17.7-9.7l2.1-.9-54.7-70.7-.8-1-1.2.5c-12.2 4.6-23.9 10.4-35 17.2-11.2 6.8-21.5 15-30.7 24.4L30.3 63l90.4 50.4.9-1.1z"
                            className="black_color"
                            data-bet-spot-id="8"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.8'].key)}
                        />
                        <path
                            d="M293.8 496.9L398.7 496.9 398.7 447.1 293.8 447.1z"
                            className="red_color"
                            data-bet-spot-id="9"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.9'].key)}
                        />
                        <path
                            d="M243.6 90.2l1.2.5 55.6-71.8-2.3-.8C268.7 7.3 235.5 1.5 202 1.3h-1.7v80.8h1.7c14.3.3 28.3 3 41.6 8.1z"
                            className="black_color"
                            data-bet-spot-id="10"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.10'].key)}
                        />
                        <path
                            d="M106.2 145.4c0-2.4.3-4.8.7-7.2l.4-2.1H1.3v56.2h105v-46.9z"
                            className="black_color"
                            data-bet-spot-id="11"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.11'].key)}
                        />
                        <path
                            d="M293.8 797.2c0 2.2-.2 4.5-.6 6.7l-.2 2h105.8V756h-105v41.2z"
                            className="red_color"
                            data-bet-spot-id="12"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.12'].key)}
                        />
                        <path
                            d="M1.3 241.2H106.3V295.3H1.3z"
                            className="black_color"
                            data-bet-spot-id="13"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.13'].key)}
                        />
                        <path
                            d="M293.8 396.2L398.7 396.2 398.7 346.3 293.8 346.3z"
                            className="red_color"
                            data-bet-spot-id="14"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.14'].key)}
                        />
                        <path
                            d="M106.6 803.6c-.4-2.1-.6-4.3-.6-6.4v-41.5H1.3v49.9H107l-.4-2z"
                            className="black_color"
                            data-bet-spot-id="15"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.15'].key)}
                        />
                        <path
                            d="M293.1 138.2c.5 2.4.7 4.8.7 7.2v47h105v-56.2H292.6l.5 2z"
                            className="red_color"
                            data-bet-spot-id="16"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.16'].key)}
                        />
                        <path
                            d="M1.3 447H106.3V496.9H1.3z"
                            className="black_color"
                            data-bet-spot-id="17"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.17'].key)}
                        />
                        <path
                            d="M293.8 602.1L398.7 602.1 398.7 550.1 293.8 550.1z"
                            className="red_color"
                            data-bet-spot-id="18"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.18'].key)}
                        />
                        <path
                            d="M106 740c0-1 .1-2.2.2-3.6v-35.2H1.3v54.1H106V740z"
                            className="red_color"
                            data-bet-spot-id="19"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.19'].key)}
                        />
                        <path
                            d="M293.8 345.8L398.7 345.8 398.7 295.8 293.8 295.8z"
                            className="black_color"
                            data-bet-spot-id="20"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.20'].key)}
                        />
                        <path
                            d="M1.3 602.4H106.3V654.4H1.3z"
                            className="red_color"
                            data-bet-spot-id="21"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.21'].key)}
                        />
                        <path
                            d="M293.8 549.6L398.7 549.6 398.7 497.4 293.8 497.4z"
                            className="black_color"
                            data-bet-spot-id="22"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.22'].key)}
                        />
                        <path
                            d="M156.1 90.3c13.4-5.2 27.6-8 41.9-8.3h1.7V1.3H198c-33.5.2-66.8 6.1-96.4 16.9l-2.3.8 55.5 71.8 1.3-.5z"
                            className="red_color"
                            data-bet-spot-id="23"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.23'].key)}
                        />
                        <path
                            d="M281 115.2c5 5.5 8.8 12.1 11 19.2l.4 1.3h106.4v-2.6c0-24.9-9.7-48.8-28.1-69l-.9-1-90.1 50.5 1.3 1.6z"
                            className="black_color"
                            data-bet-spot-id="24"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.24'].key)}
                        />
                        <path
                            d="M1.3 497.4H106.3V549.4H1.3z"
                            className="red_color"
                            data-bet-spot-id="25"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.25'].key)}
                        />
                        <path
                            d="M231.7 854.2c-7.3 1.6-14.7 2.6-22.1 3.1l-1 .1c-.9.1-1.8.1-2.7.1H196.5l-3.8-.2c-8.1-.4-16.2-1.6-24.1-3.5l-1.4-.4-32.7 77.6 2 .5c20.8 5.2 42.2 7.8 63.5 7.8 21.4 0 42.8-2.6 63.5-7.8l2-.5-32.5-77.3-1.3.5z"
                            className="black_color"
                            data-bet-spot-id="26"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.26'].key)}
                        />
                        <path
                            d="M1.3 295.8H106.3V345.7H1.3z"
                            className="red_color"
                            data-bet-spot-id="27"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.27'].key)}
                        />
                        <path
                            d="M293.8 755.5L398.7 755.5 398.7 701.3 293.8 701.3z"
                            className="black_color"
                            data-bet-spot-id="28"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.28'].key)}
                        />
                        <path
                            d="M293.8 654.6L398.7 654.6 398.7 602.6 293.8 602.6z"
                            className="black_color"
                            data-bet-spot-id="29"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.29'].key)}
                        />
                        <path
                            d="M107.9 134.4c2.3-7.1 6-13.6 11-19.1l1.4-1.6L30 63.4l-.9 1C10.9 84.6 1.3 108.3 1.3 133.1v2.6h106.3l.3-1.3z"
                            className="red_color"
                            data-bet-spot-id="30"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.30'].key)}
                        />
                        <path
                            d="M293.8 446.6L398.7 446.6 398.7 396.7 293.8 396.7z"
                            className="black_color"
                            data-bet-spot-id="31"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.31'].key)}
                        />
                        <path
                            d="M120.8 828.7c-6.6-6.7-11.1-13.8-13.3-21.3l-.4-1.2H1.3v6.4c0 24.4 13.9 49.8 39.3 71.6l1 .9 80.8-55-1.6-1.4z"
                            className="red_color"
                            data-bet-spot-id="32"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.32'].key)}
                        />
                        <path
                            d="M293.8 240.7L398.7 240.7 398.7 192.9 293.8 192.9z"
                            className="black_color"
                            data-bet-spot-id="33"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.33'].key)}
                        />
                        <path
                            d="M1.3 396.6H106.3V446.5H1.3z"
                            className="red_color"
                            data-bet-spot-id="34"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.34'].key)}
                        />
                        <path
                            d="M292.5 807.7c-2 8-6.3 15.4-13 22.2l-1.5 1.5 79.4 54.6 1-.9c26-22.1 40.3-47.8 40.3-72.5v-6.2h-106l-.2 1.3z"
                            className="black_color"
                            data-bet-spot-id="35"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.35'].key)}
                        />
                        <path
                            d="M1.3 192.8H106.3V240.60000000000002H1.3z"
                            className="red_color"
                            data-bet-spot-id="36"
                            onClick={() => doNeighbourBet(racetrackTargets['NGBR.36'].key)}
                        />
                        <path
                            d="M134.8 102c-17.9 12.2-28.1 28-28.1 43.4v200.1l185.7-104.4.9-.5v-95.2c0-15.2-10-30.8-27.4-42.9l-.3-.2c-.1-.1-.3-.2-.4-.3-.1-.1-.3-.2-.4-.3l-.3-.2c-18-12.1-41.4-19-64.5-19-23.3 0-46.9 7-64.9 19.3l-.3.2z"
                            className="sector_color"
                            data-bet-spot-id="tiers_du_cylindre"
                            onClick={() => doBet(racetrackTargets.tier.key)}
                        />
                        <path
                            d="M293.3 497.4H106.7v232.8l3.3-6.8c12.1-24.7 49-41.9 89.8-41.9 40.6 0 78.5 18 90.1 42.7l3.3 7.1V497.4z"
                            className="sector_color"
                            data-bet-spot-id="voisins_du_zero"
                            onClick={() => doBet(racetrackTargets.voisins.key)}
                        />
                        <path
                            d="M199.8 682c-48.2 0-90 24.4-93.1 54.5v60.6c0 31.9 43.6 59.8 93.2 59.8H204.6c23.2-.7 45.1-7.1 61.6-17.9 15-9.8 24.1-22 26.5-35.4.3-1.8.4-3.7.4-5.5V740c-.1-31.5-42.8-58-93.3-58z"
                            className="sector_color"
                            data-bet-spot-id="jeu_zero"
                            onClick={() => doBet(racetrackTargets.zero.key)}
                        />
                        <path
                            d="M293.3 241.1L107.6 345.5 106.7 346 106.7 496.9 293.3 496.9z"
                            className="sector_color"
                            data-bet-spot-id="orphelins_a_cheval"
                            onClick={() => doBet(racetrackTargets.orphelins.key)}
                        />
                        <path
                            d="M369.9 61.45a156.76 156.76 0 00-31.85-25.6 213.9 213.9 0 00-35.6-17.44l-1.95-.75C270.1 6.26 235.2.01 200 .01s-70.3 6.3-100.7 17.7l-1.5.56a213.7 213.7 0 00-35.9 17.54C22 60.51 0 95.01 0 133.07v679.5c0 31.64 22.6 64.1 61.9 89 21 13.3 45.3 23.56 70.85 30.2l2 .5a263.5 263.5 0 00130.5 0l2-.5c25.55-6.6 49.84-16.9 70.84-30.2 39.36-24.9 61.9-57.4 61.9-89v-679.5c-.06-26.24-10.55-50.8-30.14-71.6zm-123 29.2l54.3-70.5.6.24a212.4 212.4 0 0135.1 17.2 155.64 155.64 0 0130.2 24l.8.84-88.6 49.7-.5-.5a86 86 0 00-12.94-10.76 106.1 106.1 0 00-17.9-9.8zm-44.9-9.4h-.9V2.15h.9c33.3.2 66.46 6 95.9 16.8l1.16.4-54.5 70.4-.6-.24a123.56 123.56 0 00-41.95-8.2zm-66.7 21.46c17.9-12.26 41.5-19.3 64.7-19.3s46.75 7 64.7 19.3l-.5.74.5-.74c17.6 12 27.74 27.6 27.74 42.7v94.7l-.46.26-184.4 103.7v-198.6c0-15.1 10.1-30.64 27.74-42.7zm157.1 624.76l-1.7-3.64c-11.76-25-50-43.2-90.9-43.2-41.1 0-78.3 17.4-90.54 42.4l-1.7 3.5v-228.3h184.9zm-.2 12.5v58.2a38.2 38.2 0 01-.4 5.4c-2.3 13.1-11.3 25.14-26.1 34.8-16.4 10.7-38.1 17-61.2 17.74-1.4 0-2.9.06-4.4.1h-.26c-49.2 0-92.36-27.6-92.36-59v-60.64c3.1-29.65 44.5-53.7 92.25-53.7 50.1 0 92.44 26.16 92.44 57.16zm.2-243.95H107.5v-149.5l.46-.26 184.4-103.66zM155.1 89.82l-54.4-70.4 1.15-.4c29.5-10.8 62.7-16.66 96.14-16.9h.9v79.1h-.9a123.5 123.5 0 00-42.25 8.3zm-48.24 45H2.06v-1.7c0-24.54 9.54-48.1 27.6-68.1l.5-.5 88.84 49.4-.7.84a53.4 53.4 0 00-11.2 19.4zm13.66-22.56l-88.84-49.5.8-.84a155.16 155.16 0 0130.5-24.3 211.35 211.35 0 0134.9-17.14l.6-.24.4.5 54 69.9-1.1.46a106.14 106.14 0 00-17.9 9.76 85.6 85.6 0 00-13 10.86zm-15.2 79.26H2.07v-54.5h104.2l-.2 1.1a37.7 37.7 0 00-.74 7.3zm0 48.3H2.07v-46.1h103.25zm0 54.6H2.07v-52.4h103.25zm0 50.4H2.07v-48.2h103.25zm0 50.4H2.07v-48.2h103.25zm0 50.4H2.07v-48.2h103.25zm0 50.4H2.07v-48.2h103.25zm0 52.5H2.07v-50.3h103.25zm0 52.5H2.07v-50.3h103.25zm0 52.5H2.07v-50.3h103.25zm0 46.2H2.07v-44h103.25zm-.2 54.6H2.06v-52.4h103.25v34.4c-.1 1.3-.2 2.5-.2 3.6zm.8 50.4H2.07v-48.2h103.06v40.6a36.3 36.3 0 00.6 6.54zm15 25.26l-79.36 54-.5-.45C15.96 861.88 2.1 836.67 2.1 812.54v-5.6h104.4l.2.64c2.2 7.6 6.75 14.9 13.5 21.65zm44.5 23.8l-31.9 76-.75-.2c-33.74-8.84-65.2-24.24-88.5-43.35l-.9-.8 79.3-54 .5.5c10.5 9.4 25.2 17 41.3 21.5zm67.2.94l31.76 75.6-1 .25a262 262 0 01-126.66 0l-1-.25 31.94-76 .74.2a132.94 132.94 0 0024.25 3.6l2.2.1 1.64.06 3.3.05h1.5c1.1 0 2.2 0 3.24-.05h1.35c1.2 0 2.4-.1 3.54-.2h.2a144.24 144.24 0 0022.36-3.1zm45.1-22l77.9 53.6-.94.75c-23.2 18.7-54.2 33.8-87.4 42.5l-.75.2-31.75-75.6 1-.26c16.7-4.25 31-11.4 41.4-20.75zm15.74-25.55h104.45v5.4c0 24.5-14.2 50-40 71.9l-.5.44-78-53.7.75-.8c6.75-6.86 11.2-14.45 13.2-22.56zm1.2-50.4H397.9v48.2h-104l.1-1a39.2 39.2 0 00.6-6.8zm0-54.6H397.9v52.4H294.65zm0-46.2H397.9v44H294.65zm0-52.5H397.9v50.3H294.65zm0-52.5H397.9v50.3H294.65zm0-52.7H397.9v50.46H294.65zm0-50.3H397.9v48.04H294.65zm0-50.4H397.9v48.2H294.65zm0-50.4H397.9v48.2H294.65zm0-50.4H397.9v48.2H294.65zm0-54.6H397.9v52.4H294.65zm0-48.3H397.9v46.1H294.65zm-1-56.7H397.9v54.5H294.65v-46.15a37.7 37.7 0 00-.74-7.3zm104.2-3.9v1.7h-104.9l-.2-.65a52 52 0 00-11.14-19.55l-.7-.8 88.6-49.7.5.5c18.26 20.1 27.9 43.8 27.9 68.5z"
                            className="border"
                        />
                        <text
                            x="27.75%"
                            y="93.62%"
                            className="green_color_label vertical_center"
                            dy="0em"
                        >
                            0
                        </text>
                        <text
                            x="86.56%"
                            y="28.5%"
                            className="red_color_label vertical_center"
                            dy="0em"
                        >
                            1
                        </text>
                        <text
                            x="13.45%"
                            y="61.19%"
                            className="black_color_label vertical_center"
                            dy="0em"
                        >
                            2
                        </text>
                        <text
                            x="72.21%"
                            y="93.68%"
                            className="red_color_label vertical_center"
                            dy="0em"
                        >
                            3
                        </text>
                        <text
                            x="13.45%"
                            y="72.01%"
                            className="black_color_label vertical_center"
                            dy="0em"
                        >
                            4
                        </text>
                        <text
                            x="76.17%"
                            y="7.07%"
                            className="red_color_label vertical_center"
                            dy="0em"
                        >
                            5
                        </text>
                        <text
                            x="13.45%"
                            y="39.43%"
                            className="black_color_label vertical_center"
                            dy="0em"
                        >
                            6
                        </text>
                        <text
                            x="86.56%"
                            y="72.03%"
                            className="red_color_label vertical_center"
                            dy="0em"
                        >
                            7
                        </text>
                        <text
                            x="23.76%"
                            y="7.08%"
                            className="black_color_label vertical_center"
                            dy="0em"
                        >
                            8
                        </text>
                        <text
                            x="86.56%"
                            y="50.15%"
                            className="red_color_label vertical_center"
                            dy="0em"
                        >
                            9
                        </text>
                        <text
                            x="59.77%"
                            y="4.38%"
                            className="black_color_label vertical_center"
                            dy="0em"
                        >
                            10
                        </text>
                        <text
                            x="13.46%"
                            y="17.45%"
                            className="black_color_label vertical_center"
                            dy="0em"
                        >
                            1 1
                        </text>
                        <text
                            x="86.57%"
                            y="82.97%"
                            className="red_color_label vertical_center"
                            dy="0em"
                        >
                            12
                        </text>
                        <text
                            x="13.45%"
                            y="28.5%"
                            className="black_color_label vertical_center"
                            dy="0em"
                        >
                            13
                        </text>
                        <text
                            x="86.56%"
                            y="39.44%"
                            className="red_color_label vertical_center"
                            dy="0em"
                        >
                            14
                        </text>
                        <text
                            x="13.42%"
                            y="82.94%"
                            className="black_color_label vertical_center"
                            dy="0em"
                        >
                            15
                        </text>
                        <text
                            x="86.57%"
                            y="17.46%"
                            className="red_color_label vertical_center"
                            dy="0em"
                        >
                            16
                        </text>
                        <text
                            x="13.45%"
                            y="50.14%"
                            className="black_color_label vertical_center"
                            dy="0em"
                        >
                            17
                        </text>
                        <text
                            x="86.56%"
                            y="61.21%"
                            className="red_color_label vertical_center"
                            dy="0em"
                        >
                            18
                        </text>
                        <text
                            x="13.44%"
                            y="77.37%"
                            className="red_color_label vertical_center"
                            dy="0em"
                        >
                            19
                        </text>
                        <text
                            x="86.56%"
                            y="34.08%"
                            className="black_color_label vertical_center"
                            dy="0em"
                        >
                            20
                        </text>
                        <text
                            x="13.45%"
                            y="66.77%"
                            className="red_color_label vertical_center"
                            dy="0em"
                        >
                            21
                        </text>
                        <text
                            x="86.56%"
                            y="55.62%"
                            className="black_color_label vertical_center"
                            dy="0em"
                        >
                            22
                        </text>
                        <text
                            x="40.19%"
                            y="4.39%"
                            className="red_color_label vertical_center"
                            dy="0em"
                        >
                            23
                        </text>
                        <text
                            x="86.75%"
                            y="11.56%"
                            className="black_color_label vertical_center"
                            dy="0em"
                        >
                            24
                        </text>
                        <text
                            x="13.45%"
                            y="55.61%"
                            className="red_color_label vertical_center"
                            dy="0em"
                        >
                            25
                        </text>
                        <text
                            x="50%"
                            y="95.71%"
                            className="black_color_label vertical_center"
                            dy="0em"
                        >
                            26
                        </text>
                        <text
                            x="13.45%"
                            y="34.08%"
                            className="red_color_label vertical_center"
                            dy="0em"
                        >
                            27
                        </text>
                        <text
                            x="86.56%"
                            y="77.39%"
                            className="black_color_label vertical_center"
                            dy="0em"
                        >
                            28
                        </text>
                        <text
                            x="86.56%"
                            y="66.79%"
                            className="black_color_label vertical_center"
                            dy="0em"
                        >
                            29
                        </text>
                        <text
                            x="13.25%"
                            y="11.57%"
                            className="red_color_label vertical_center"
                            dy="0em"
                        >
                            30
                        </text>
                        <text
                            x="86.56%"
                            y="44.8%"
                            className="black_color_label vertical_center"
                            dy="0em"
                        >
                            31
                        </text>
                        <text
                            x="13.84%"
                            y="88.8%"
                            className="red_color_label vertical_center"
                            dy="0em"
                        >
                            32
                        </text>
                        <text
                            x="86.56%"
                            y="23.03%"
                            className="black_color_label vertical_center"
                            dy="0em"
                        >
                            33
                        </text>
                        <text
                            x="13.45%"
                            y="44.79%"
                            className="red_color_label vertical_center"
                            dy="0em"
                        >
                            34
                        </text>
                        <text
                            x="86.1%"
                            y="88.86%"
                            className="black_color_label vertical_center"
                            dy="0em"
                        >
                            35
                        </text>
                        <text
                            x="13.45%"
                            y="23.02%"
                            className="red_color_label vertical_center"
                            dy="0em"
                        >
                            36
                        </text>
                        <text
                            x="50%"
                            y="20.91%"
                            className="called_bets_label vertical_center"
                            dy="0em"
                        >
                            TIER
                        </text>
                        <text
                            x="49.99%"
                            y="63.35%"
                            className="called_bets_label vertical_center"
                            dy="0em"
                        >
                            VOISINS
                        </text>
                        <text
                            x="49.98%"
                            y="81.74%"
                            className="called_bets_label vertical_center"
                            dy="0em"
                        >
                            ZERO
                        </text>
                        <text
                            x="52.01%"
                            y="41.75%"
                            className="called_bets_label vertical_center"
                            dy="0em"
                        >
                            ORPH.
                        </text>
                        {renderCheckedBets()}
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default PortraitRacetrack;