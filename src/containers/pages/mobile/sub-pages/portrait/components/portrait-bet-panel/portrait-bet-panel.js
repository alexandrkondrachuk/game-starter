import React from "react";
import * as _ from 'lodash';
import { useSelector } from 'react-redux';
import config from 'react-global-configuration';
import Chip from '../../../../../../../components/chip';
import Api from '../../../../../../../classes/Api';
import BetEmmitModel from '../../../../../../../models/emmit/bet';
import './portrait-bet-panel.scss';
import { roundStageEnum } from '../../../../../../../enums';

function PortraitBetPanel() {
    const internalTargetGroups = [2, 3, 5, 6];
    const targets = config.get('targets');
    const targetNodes = targets.filter((target) => (internalTargetGroups.includes(target.groupId)));
    const chip = config.get('chip');
    const chips = useSelector((state) => (_.get(state, 'bet.chips', [])));
    const activeChip = chips.find((chip) => (chip.active === true));
    const roundStage = useSelector((state) => (_.get(state, 'game.roundState.stage')));
    const isOpen = roundStageEnum?.get(roundStage)?.value === roundStageEnum?.get(2)?.value;
    const totalBets = useSelector((state) => (_.get(state, 'game.player.totalBets', [])));
    const luckyNumber = useSelector((state) => (_.get(state, 'game.roundState.winNumber.luckyNumber', '')));
    const isResult = roundStageEnum?.get(roundStage)?.value === roundStageEnum?.get(4)?.value;

    const getChipCoordinates = (key) => {
        const target = targets.find((target) => (target.key === key));
        return _.get(target, 'coordinates.mobile', [0, 0]);
    };

    const getChipColor = (nominal) => {
        let color = 'orange';
        chips.forEach((chip) => {
            if (nominal >= chip.nominal) color = chip.color;
        });
        return color;
    };

    const renderChips = () => {
        const totalBetsWithCoordinates = totalBets.map((bet) => ({
            ...bet,
            coordinates: getChipCoordinates(bet.code),
            color: getChipColor(bet.betValue)
        }));

        return totalBetsWithCoordinates.map((bet) => (
            <g
                key={bet.key}
                data-target={bet.key}
                transform={`translate(${bet.coordinates[0] - chip.width / 2}, ${bet.coordinates[1] - chip.height / 2})`}
            >
                <Chip nominal={_.get(bet, 'betValue', 0)} width={chip.width} height={chip.height}
                      color={_.get(bet, 'color', 'orange')}/>
            </g>));
    };
    const renderPointer = () => {
        if (!isResult || !luckyNumber) return  null;

        const activeTarget = targets.find((target) => (target.key === `NMBR.${luckyNumber}`));
        const coordinates = _.get(activeTarget, 'coordinates.mobile', [0,0]);
        const pointer = config.get('pointer');
        const pointerCoordinates = [(coordinates[0] - pointer.width / 2), (coordinates[1] - pointer.height / 2)];

        return (
            <g className="pointer" transform={`translate(${pointerCoordinates[0]}, ${pointerCoordinates[1]})`} fill={pointer.fill}>
                <rect width="14" height="14" x="25" y="2" rx="2" ry="2"/>
                <rect width="14" height="14" x="25" y="48" rx="2" ry="2"/>
                <rect width="14" height="14" x="2" y="25" rx="2" ry="2"/>
                <rect width="14" height="14" x="48" y="25" rx="2" ry="2"/>
                <path d="M55.86 41h-4.33A21.49 21.49 0 0141 51.53v4.33A25.46 25.46 0 0055.86 41zM23 12.47V8.14A25.46 25.46 0 008.14 23h4.33A21.49 21.49 0 0123 12.47zM23 55.86v-4.33A21.49 21.49 0 0112.47 41H8.14A25.46 25.46 0 0023 55.86zM51.53 23h4.33A25.46 25.46 0 0041 8.14v4.33A21.49 21.49 0 0151.53 23z"/>
            </g>
        );
    };

    const doBet = (Code) => {
        if (Api.instance && isOpen) {
            const nominal = _.get(activeChip, 'nominal', 0);
            Api.instance.doBet(new BetEmmitModel({ BetValue: nominal, Code }));
        }
    };
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="PortraitBetPanel"
            viewBox="0 -1 316.3 581.8"
        >
            <g className="phoneBettingGridWrapper">
                <path
                    d="M316.2 38.7L97.9 38.7 97.9 17.5 170.5 6 170.8 6 206.4 0.3 243.4 6.2 243.7 6.2 316.3 17.7z"
                    className="green_color"
                    data-bet-spot-id="0"
                    onClick={() => doBet('NMBR.0')}
                />
                <path
                    d="M97.9 39H170.5V81.1H97.9z"
                    className="red_color"
                    data-bet-spot-id="1"
                    onClick={() => doBet('NMBR.1')}
                />
                <path
                    d="M170.7 39H243.29999999999998V81.1H170.7z"
                    className="black_color"
                    data-bet-spot-id="2"
                    onClick={() => doBet('NMBR.2')}
                />
                <path
                    d="M243.6 39H316.2V81.1H243.6z"
                    className="red_color"
                    data-bet-spot-id="3"
                    onClick={() => doBet('NMBR.3')}
                />
                <path
                    d="M97.9 81.4H170.5V123.5H97.9z"
                    className="black_color"
                    data-bet-spot-id="4"
                    onClick={() => doBet('NMBR.4')}
                />
                <path
                    d="M170.7 81.4H243.29999999999998V123.5H170.7z"
                    className="red_color"
                    data-bet-spot-id="5"
                    onClick={() => doBet('NMBR.5')}
                />
                <path
                    d="M243.6 81.4H316.2V123.5H243.6z"
                    className="black_color"
                    data-bet-spot-id="6"
                    onClick={() => doBet('NMBR.6')}
                />
                <path
                    d="M97.9 123.7H170.5V165.8H97.9z"
                    className="red_color"
                    data-bet-spot-id="7"
                    onClick={() => doBet('NMBR.7')}
                />
                <path
                    d="M170.7 123.7H243.29999999999998V165.8H170.7z"
                    className="black_color"
                    data-bet-spot-id="8"
                    onClick={() => doBet('NMBR.8')}
                />
                <path
                    d="M243.6 123.7H316.2V165.8H243.6z"
                    className="red_color"
                    data-bet-spot-id="9"
                    onClick={() => doBet('NMBR.9')}
                />
                <path
                    d="M97.9 166.1H170.5V208.2H97.9z"
                    className="black_color"
                    data-bet-spot-id="10"
                    onClick={() => doBet('NMBR.10')}
                />
                <path
                    d="M170.7 166.1H243.29999999999998V208.2H170.7z"
                    className="black_color"
                    data-bet-spot-id="11"
                    onClick={() => doBet('NMBR.11')}
                />
                <path
                    d="M243.6 166.1H316.2V208.2H243.6z"
                    className="red_color"
                    data-bet-spot-id="12"
                    onClick={() => doBet('NMBR.12')}
                />
                <path
                    d="M97.9 208.5H170.5V250.5H97.9z"
                    className="black_color"
                    data-bet-spot-id="13"
                    onClick={() => doBet('NMBR.13')}
                />
                <path
                    d="M170.7 208.5H243.29999999999998V250.6H170.7z"
                    className="red_color"
                    data-bet-spot-id="14"
                    onClick={() => doBet('NMBR.14')}
                />
                <path
                    d="M243.6 208.5H316.2V250.5H243.6z"
                    className="black_color"
                    data-bet-spot-id="15"
                    onClick={() => doBet('NMBR.15')}
                />
                <path
                    d="M97.9 250.8H170.5V292.90000000000003H97.9z"
                    className="red_color"
                    data-bet-spot-id="16"
                    onClick={() => doBet('NMBR.16')}
                />
                <path
                    d="M170.7 250.8H243.29999999999998V292.90000000000003H170.7z"
                    className="black_color"
                    data-bet-spot-id="17"
                    onClick={() => doBet('NMBR.17')}
                />
                <path
                    d="M243.6 250.8H316.2V292.90000000000003H243.6z"
                    className="red_color"
                    data-bet-spot-id="18"
                    onClick={() => doBet('NMBR.18')}
                />
                <path
                    d="M97.9 293.1H170.5V335.20000000000005H97.9z"
                    className="red_color"
                    data-bet-spot-id="19"
                    onClick={() => doBet('NMBR.19')}
                />
                <path
                    d="M170.7 293.2H243.29999999999998V335.3H170.7z"
                    className="black_color"
                    data-bet-spot-id="20"
                    onClick={() => doBet('NMBR.20')}
                />
                <path
                    d="M243.6 293.2H316.2V335.3H243.6z"
                    className="red_color"
                    data-bet-spot-id="21"
                    onClick={() => doBet('NMBR.21')}
                />
                <path
                    d="M97.9 335.5H170.5V377.6H97.9z"
                    className="black_color"
                    data-bet-spot-id="22"
                    onClick={() => doBet('NMBR.22')}
                />
                <path
                    d="M170.7 335.5H243.29999999999998V377.6H170.7z"
                    className="red_color"
                    data-bet-spot-id="23"
                    onClick={() => doBet('NMBR.23')}
                />
                <path
                    d="M243.6 335.5H316.2V377.6H243.6z"
                    className="black_color"
                    data-bet-spot-id="24"
                    onClick={() => doBet('NMBR.24')}
                />
                <path
                    d="M97.9 377.9H170.5V420H97.9z"
                    className="red_color"
                    data-bet-spot-id="25"
                    onClick={() => doBet('NMBR.25')}
                />
                <path
                    d="M170.7 377.9H243.29999999999998V420H170.7z"
                    className="black_color"
                    data-bet-spot-id="26"
                    onClick={() => doBet('NMBR.26')}
                />
                <path
                    d="M243.6 377.9H316.2V420H243.6z"
                    className="red_color"
                    data-bet-spot-id="27"
                    onClick={() => doBet('NMBR.27')}
                />
                <path
                    d="M97.9 420.2H170.5V462.3H97.9z"
                    className="black_color"
                    data-bet-spot-id="28"
                    onClick={() => doBet('NMBR.28')}
                />
                <path
                    d="M170.7 420.2H243.29999999999998V462.3H170.7z"
                    className="black_color"
                    data-bet-spot-id="29"
                    onClick={() => doBet('NMBR.29')}
                />
                <path
                    d="M243.6 420.2H316.2V462.3H243.6z"
                    className="red_color"
                    data-bet-spot-id="30"
                    onClick={() => doBet('NMBR.30')}
                />
                <path
                    d="M97.9 462.6H170.5V504.70000000000005H97.9z"
                    className="black_color"
                    data-bet-spot-id="31"
                    onClick={() => doBet('NMBR.31')}
                />
                <path
                    d="M170.7 462.6H243.29999999999998V504.70000000000005H170.7z"
                    className="red_color"
                    data-bet-spot-id="32"
                    onClick={() => doBet('NMBR.32')}
                />
                <path
                    d="M243.6 462.6H316.2V504.70000000000005H243.6z"
                    className="black_color"
                    data-bet-spot-id="33"
                    onClick={() => doBet('NMBR.33')}
                />
                <path
                    d="M97.9 505H170.5V547.1H97.9z"
                    className="red_color"
                    data-bet-spot-id="34"
                    onClick={() => doBet('NMBR.34')}
                />
                <path
                    d="M170.7 505H243.29999999999998V547.1H170.7z"
                    className="black_color"
                    data-bet-spot-id="35"
                    onClick={() => doBet('NMBR.35')}
                />
                <path
                    d="M243.6 504.9H316.2V547H243.6z"
                    className="red_color"
                    data-bet-spot-id="36"
                    onClick={() => doBet('NMBR.36')}
                />
                <path
                    d="M49.1 335.5L49.1 208.5 97.6 208.5 97.6 377.7 49.1 377.7z"
                    className="outsides_color"
                    data-bet-spot-id="2nd12"
                    onClick={() => doBet("SecondDozen")}
                />
                <path
                    d="M49.1 39H97.6V208.2H49.1z"
                    className="outsides_color"
                    data-bet-spot-id="1st12"
                    onClick={() => doBet("FirstDozen")}
                />
                <path
                    d="M0.4 81.4L0.4 39 48.9 39 48.9 123.5 0.4 123.5z"
                    className="outsides_color"
                    data-bet-spot-id="from1to18"
                    onClick={() => doBet("Low")}
                />
                <path
                    d="M0.4 166.1L0.4 123.7 48.9 123.7 48.9 208.1 0.4 208.1z"
                    className="outsides_color"
                    data-bet-spot-id="even"
                    onClick={() => doBet("Even")}
                />
                <path
                    d="M0.4 250.8L0.4 208.5 48.9 208.5 48.9 292.9 0.4 292.9z"
                    className="outsides_color"
                    data-bet-spot-id="red"
                    onClick={() => doBet("Red")}
                />
                <path
                    d="M0.4 335.5L0.4 293.1 48.9 293.1 48.9 377.5 0.4 377.5z"
                    className="outsides_color"
                    data-bet-spot-id="black"
                    onClick={() => doBet("Black")}
                />
                <path
                    d="M0.4 420.2L0.4 377.8 48.9 377.8 48.9 462.2 0.4 462.2z"
                    className="outsides_color"
                    data-bet-spot-id="odd"
                    onClick={() => doBet("Odd")}
                />
                <path
                    d="M0.4 462.6H48.9V547H0.4z"
                    className="outsides_color"
                    data-bet-spot-id="from19to36"
                    onClick={() => doBet("High")}
                />
                <path
                    d="M49.1 547L49.1 377.9 97.6 377.9 97.6 547.1 49.1 547.1z"
                    className="outsides_color"
                    data-bet-spot-id="3rd12"
                    onClick={() => doBet("ThirdDozen")}
                />
                <path
                    d="M97.9 547.3H170.5V580.5999999999999H97.9z"
                    className="outsides_color"
                    data-bet-spot-id="bottom2to1"
                    onClick={() => doBet("FirstColumn")}
                />
                <path
                    d="M170.7 547.3H243.29999999999998V580.5999999999999H170.7z"
                    className="outsides_color"
                    data-bet-spot-id="middle2to1"
                    onClick={() => doBet("SecondColumn")}
                />
                <path
                    d="M243.6 547.3H316.2V580.5999999999999H243.6z"
                    className="outsides_color"
                    data-bet-spot-id="top2to1"
                    onClick={() => doBet("ThirdColumn")}
                />
                <path
                    d="M35.8 335L24.7 307.2 13.6 335 24.7 362.7z"
                    className="black_diamond_color"
                />
                <path
                    d="M35.8 250.9L24.7 223.1 13.6 250.9 24.7 278.6z"
                    className="red_diamond_color"
                />
                <path
                    d="M316.2 17.5L243.6 5.9h-.3L207.2.1l-.9-.1-.9.1-34.7 5.5h-.3L97.8 17.2h-.3v21.5H0v508.5h97.5v33.6h218.8l-.1-563.3zm-72.9 63.6h-72.6V39h72.6v42.1zm0 42.4h-72.6V81.4h72.6v42.1zm0 42.3h-72.6v-42.1h72.6v42.1zm0 42.4h-72.6v-42.1h72.6v42.1zm0 42.4h-72.6v-42.1h72.6v42.1zm0 42.3h-72.6v-42.1h72.6v42.1zm0 42.4h-72.6v-42.1h72.6v42.1zm0 42.3h-72.6v-42.1h72.6v42.1zm0 42.4h-72.6v-42.1h72.6V420zm0 42.3h-72.6v-42.1h72.6v42.1zm0 42.4h-72.6v-42.1h72.6v42.1zm0 42.4h-72.6V505h72.6v42.1zM97.9 505h72.6v42.1H97.9V505zm0-42.4h72.6v42.1H97.9v-42.1zm0-42.4h72.6v42.1H97.9v-42.1zm-48.8-84.7v-127h48.5v169.2H49.1v-42.2zm48.8-169.4h72.6v42.1H97.9v-42.1zm0-42.4h72.6v42.1H97.9v-42.1zm0-42.3h72.6v42.1H97.9V81.4zm72.6 127.1v42H97.9v-42h72.6zm0 84.4H97.9v-42.1h72.6v42.1zm0 42.3H97.9v-42.1h72.6v42.1zm0 42.4H97.9v-42.1h72.6v42.1zm-72.6.3h72.6V420H97.9v-42.1zm72.6-296.8H97.9V39h72.6v42.1zM97.6 39v169.2H49.1V39h48.5zM.4 81.4V39h48.5v84.5H.4V81.4zm0 84.7v-42.4h48.5v84.4H.4v-42zm0 84.7v-42.3h48.5v84.4H.4v-42.1zm0 84.7v-42.4h48.5v84.4H.4v-42zm0 84.7v-42.4h48.5v84.4H.4v-42zM.4 547v-84.4h48.5V547H.4zm48.7 0V377.9h48.5v169.2l-48.5-.1zm48.8 33.6v-33.3h72.6v33.3H97.9zm72.8 0v-33.3h72.6v33.3h-72.6zm145.5 0h-72.6v-33.3h72.6v33.3zm0-33.6h-72.6v-42.1h72.6V547zm0-42.3h-72.6v-42.1h72.6v42.1zm0-42.4h-72.6v-42.1h72.6v42.1zm0-42.3h-72.6v-42.1h72.6V420zm0-42.4h-72.6v-42.1h72.6v42.1zm0-42.3h-72.6v-42.1h72.6v42.1zm0-42.4h-72.6v-42.1h72.6v42.1zm0-42.4h-72.6v-42h72.6v42zm0-42.3h-72.6v-42.1h72.6v42.1zm0-42.4h-72.6v-42.1h72.6v42.1zm0-42.3h-72.6V81.4h72.6v42.1zm0-42.4h-72.6V39h72.6v42.1zm0-42.4H97.9V17.5L170.5 6h.3L206.4.3l37 5.9h.3l72.6 11.5-.1 21z"
                    className="border"
                />
                <text
                    x="65.48%"
                    y="3.36%"
                    className="green_color_label vertical_center"
                    dy="0em"
                >
                    0
                </text>
                <text
                    x="42.43%"
                    y="10.34%"
                    className="red_color_label vertical_center"
                    dy="0em"
                >
                    1
                </text>
                <text
                    x="65.44%"
                    y="10.34%"
                    className="black_color_label vertical_center"
                    dy="0em"
                >
                    2
                </text>
                <text
                    x="88.49%"
                    y="10.34%"
                    className="red_color_label vertical_center"
                    dy="0em"
                >
                    3
                </text>
                <text
                    x="42.43%"
                    y="17.63%"
                    className="black_color_label vertical_center"
                    dy="0em"
                >
                    4
                </text>
                <text
                    x="65.44%"
                    y="17.63%"
                    className="red_color_label vertical_center"
                    dy="0em"
                >
                    5
                </text>
                <text
                    x="88.49%"
                    y="17.63%"
                    className="black_color_label vertical_center"
                    dy="0em"
                >
                    6
                </text>
                <text
                    x="42.43%"
                    y="24.91%"
                    className="red_color_label vertical_center"
                    dy="0em"
                >
                    7
                </text>
                <text
                    x="65.44%"
                    y="24.91%"
                    className="black_color_label vertical_center"
                    dy="0em"
                >
                    8
                </text>
                <text
                    x="88.49%"
                    y="24.91%"
                    className="red_color_label vertical_center"
                    dy="0em"
                >
                    9
                </text>
                <text
                    x="42.43%"
                    y="32.21%"
                    className="black_color_label vertical_center"
                    dy="0em"
                >
                    10
                </text>
                <text
                    x="65.44%"
                    y="32.21%"
                    className="black_color_label vertical_center"
                    dy="0em"
                >
                    1 1
                </text>
                <text
                    x="88.49%"
                    y="32.21%"
                    className="red_color_label vertical_center"
                    dy="0em"
                >
                    12
                </text>
                <text
                    x="42.43%"
                    y="39.5%"
                    className="black_color_label vertical_center"
                    dy="0em"
                >
                    13
                </text>
                <text
                    x="65.44%"
                    y="39.51%"
                    className="red_color_label vertical_center"
                    dy="0em"
                >
                    14
                </text>
                <text
                    x="88.49%"
                    y="39.5%"
                    className="black_color_label vertical_center"
                    dy="0em"
                >
                    15
                </text>
                <text
                    x="42.43%"
                    y="46.79%"
                    className="red_color_label vertical_center"
                    dy="0em"
                >
                    16
                </text>
                <text
                    x="65.44%"
                    y="46.79%"
                    className="black_color_label vertical_center"
                    dy="0em"
                >
                    17
                </text>
                <text
                    x="88.49%"
                    y="46.79%"
                    className="red_color_label vertical_center"
                    dy="0em"
                >
                    18
                </text>
                <text
                    x="42.43%"
                    y="54.07%"
                    className="red_color_label vertical_center"
                    dy="0em"
                >
                    19
                </text>
                <text
                    x="65.44%"
                    y="54.09%"
                    className="black_color_label vertical_center"
                    dy="0em"
                >
                    20
                </text>
                <text
                    x="88.49%"
                    y="54.09%"
                    className="red_color_label vertical_center"
                    dy="0em"
                >
                    21
                </text>
                <text
                    x="42.43%"
                    y="61.37%"
                    className="black_color_label vertical_center"
                    dy="0em"
                >
                    22
                </text>
                <text
                    x="65.44%"
                    y="61.37%"
                    className="red_color_label vertical_center"
                    dy="0em"
                >
                    23
                </text>
                <text
                    x="88.49%"
                    y="61.37%"
                    className="black_color_label vertical_center"
                    dy="0em"
                >
                    24
                </text>
                <text
                    x="42.43%"
                    y="68.67%"
                    className="red_color_label vertical_center"
                    dy="0em"
                >
                    25
                </text>
                <text
                    x="65.44%"
                    y="68.67%"
                    className="black_color_label vertical_center"
                    dy="0em"
                >
                    26
                </text>
                <text
                    x="88.49%"
                    y="68.67%"
                    className="red_color_label vertical_center"
                    dy="0em"
                >
                    27
                </text>
                <text
                    x="42.43%"
                    y="75.95%"
                    className="black_color_label vertical_center"
                    dy="0em"
                >
                    28
                </text>
                <text
                    x="65.44%"
                    y="75.95%"
                    className="black_color_label vertical_center"
                    dy="0em"
                >
                    29
                </text>
                <text
                    x="88.49%"
                    y="75.95%"
                    className="red_color_label vertical_center"
                    dy="0em"
                >
                    30
                </text>
                <text
                    x="42.43%"
                    y="83.24%"
                    className="black_color_label vertical_center"
                    dy="0em"
                >
                    31
                </text>
                <text
                    x="65.44%"
                    y="83.24%"
                    className="red_color_label vertical_center"
                    dy="0em"
                >
                    32
                </text>
                <text
                    x="88.49%"
                    y="83.24%"
                    className="black_color_label vertical_center"
                    dy="0em"
                >
                    33
                </text>
                <text
                    x="42.43%"
                    y="90.54%"
                    className="red_color_label vertical_center"
                    dy="0em"
                >
                    34
                </text>
                <text
                    x="65.44%"
                    y="90.54%"
                    className="black_color_label vertical_center"
                    dy="0em"
                >
                    35
                </text>
                <text
                    x="88.49%"
                    y="90.52%"
                    className="red_color_label vertical_center"
                    dy="0em"
                >
                    36
                </text>
                <g className="outside_color_label">
                    <g className="outside_color_label">
                        <text
                            x="23.19%"
                            y="50.45%"
                            dx="-1.2em"
                            dy=".36em"
                            transform="rotate(90 73.35 293.014)"
                        >
                            2
                        </text>
                        <text
                            x="23.19%"
                            y="50.45%"
                            className="small"
                            dx="-.8em"
                            fontSize="50%"
                            transform="rotate(90 73.35 293.014)"
                        >
                            ND
                        </text>
                        <text
                            x="23.19%"
                            y="50.45%"
                            dx=".7em"
                            dy=".36em"
                            transform="rotate(90 73.35 293.014)"
                        >
                            12
                        </text>
                    </g>
                </g>
                <g className="outside_color_label">
                    <g className="outside_color_label">
                        <text
                            x="23.19%"
                            y="21.27%"
                            dx="-1em"
                            dy=".36em"
                            transform="rotate(90 73.35 123.536)"
                        >
                            1
                        </text>
                        <text
                            x="23.19%"
                            y="21.27%"
                            className="small"
                            dx="-.8em"
                            fontSize="50%"
                            transform="rotate(90 73.35 123.536)"
                        >
                            ST
                        </text>
                        <text
                            x="23.19%"
                            y="21.27%"
                            dx=".7em"
                            dy=".36em"
                            transform="rotate(90 73.35 123.536)"
                        >
                            12
                        </text>
                    </g>
                </g>
                <g className="outside_color_label">
                    <text
                        x="7.79%"
                        y="13.98%"
                        className="outside_color_label vertical_center"
                        dy="0em"
                        transform="rotate(90 24.64 81.196)"
                    >
                        1-18
                    </text>
                </g>
                <g className="outside_color_label">
                    <text
                        x="7.79%"
                        y="28.55%"
                        className="outside_color_label vertical_center"
                        dy="0em"
                        transform="rotate(90 24.64 165.818)"
                    >
                        EVEN
                    </text>
                </g>
                <g className="outside_color_label">
                    <text
                        x="7.79%"
                        y="72.29%"
                        className="outside_color_label vertical_center"
                        dy="0em"
                        transform="rotate(90 24.64 419.86)"
                    >
                        ODD
                    </text>
                </g>
                <g className="outside_color_label">
                    <text
                        x="7.79%"
                        y="86.88%"
                        className="outside_color_label vertical_center"
                        dy="0em"
                        transform="rotate(90 24.64 504.599)"
                    >
                        19-36
                    </text>
                </g>
                <g className="outside_color_label">
                    <g className="outside_color_label">
                        <text
                            x="23.19%"
                            y="79.6%"
                            dx="-1.2em"
                            dy=".36em"
                            transform="rotate(90 73.35 462.317)"
                        >
                            3
                        </text>
                        <text
                            x="23.19%"
                            y="79.6%"
                            className="small"
                            dx="-.8em"
                            fontSize="50%"
                            transform="rotate(90 73.35 462.317)"
                        >
                            RD
                        </text>
                        <text
                            x="23.19%"
                            y="79.6%"
                            dx=".7em"
                            dy=".36em"
                            transform="rotate(90 73.35 462.317)"
                        >
                            12
                        </text>
                    </g>
                </g>
                <g className="outside_small_color_label">
                    <text x="42.43%" y="97.07%" dx="-.65em" dy=".36em">
                        2
                    </text>
                    <text
                        x="42.43%"
                        y="97.07%"
                        className="small"
                        dx=".14em"
                        fontSize="50%"
                    >
                        TO
                    </text>
                    <text x="42.43%" y="97.07%" dx=".75em" dy=".36em">
                        1
                    </text>
                </g>
                <g className="outside_small_color_label">
                    <text x="65.44%" y="97.07%" dx="-.65em" dy=".36em">
                        2
                    </text>
                    <text
                        x="65.44%"
                        y="97.07%"
                        className="small"
                        dx=".14em"
                        fontSize="50%"
                    >
                        TO
                    </text>
                    <text x="65.44%" y="97.07%" dx=".75em" dy=".36em">
                        1
                    </text>
                </g>
                <g className="outside_small_color_label">
                    <text x="88.49%" y="97.07%" dx="-.65em" dy=".36em">
                        2
                    </text>
                    <text
                        x="88.49%"
                        y="97.07%"
                        className="small"
                        dx=".14em"
                        fontSize="50%"
                    >
                        TO
                    </text>
                    <text x="88.49%" y="97.07%" dx=".75em" dy=".36em">
                        1
                    </text>
                </g>
                {renderChips()}
                {targetNodes.map((target) => (
                    <circle
                        className="bet-internal"
                        data-bet-spot-id={target.key}
                        cx={target.coordinates.mobile[0]}
                        cy={target.coordinates.mobile[1]}
                        r={15}
                        fill="blue"
                        fillOpacity={0}
                        onClick={() => doBet(target.key)}
                    />))}
                {renderPointer()}
            </g>
        </svg>
    );
}

export default PortraitBetPanel;