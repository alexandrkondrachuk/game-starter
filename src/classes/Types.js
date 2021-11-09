

export default class Types {

    // Material UI Theme

    static MATERIAL_UI_THEME = {
        typography: {
            fontFamily: [
                '-apple-system',
                'Inter',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            h1: {
                fontSize: '3rem',
            },
            h2: {
                fontSize: '1.875rem',
            },
            h3: {
                fontSize: '1.5rem',
            },
            h4: {
                fontSize: '1.0625rem',
            },
            h5: {
                fontSize: '0.75rem',
            },
            h6: {
                fontSize: '0.625rem',
            },
        },
        palette: {
            primary: {
                dark: '#4affff',
                main: '#96ffff',
                light: '#e3ffff',
                contrastText: '#FFF',
            },
            secondary: {
                dark: '#A28E5B',
                main: '#EBC200',
                light: '#FFEFCA',
                contrastText: '#FFF',
            },
            error: {
                dark: '#F8B0A3',
                main: '#FF473C',
                light: '#FFE5DB',
                contrastText: '#FFF',
            },
            text: {
                primary: '#545454',
                secondary: 'rgba(84, 84, 84, 0.5)',
            },
        },
    };

    // Device orientation
    static ORIENTATION__LANDSCAPE = 'landscape';

    static ORIENTATION__PORTRAIT = 'portrait';

    // Api incoming messages

    static API__INCOMING__MESSAGES = [
        { id: 0, name: 'RoundState', method: 'onRoundState' },
        { id: 1, name: 'NewRound', method: 'onNewRound' },
        { id: 2, name: 'EndBetting', method: 'onEndBetting' },
        { id: 3, name: 'BetPlaced', method: 'onBetPlaced' },
        { id: 4, name: 'PlayerInfo', method: 'onPlayerInfo' },
        { id: 5, name: 'LeftUntilEndBet', method: 'onLeftUntilEndBet' },
        { id: 6, name: 'Win', method: 'onWin' },
        { id: 7, name: 'UndoBetPlaced', method: 'onUndoBetPlaced' },
        { id: 8, name: 'ChatUserMessage', method: 'onChatUserMessage' },
        { id: 9, name: 'Currency', method: 'onCurrency' },
        { id: 10, name: 'PlayerBlocked', method: 'onPlayerBlocked' },
        { id: 11, name: 'PlayerPaused', method: 'onPlayerPaused' },
        { id: 12, name: 'TechBreakStarted', method: 'onTechBreakStarted' },
        { id: 13, name: 'TechBreakStopped', method: 'onTechBreakStopped' },
        { id: 14, name: 'Connected', method: 'onConnected' },
        { id: 15, name: 'RouletteStat', method: 'onRouletteStat' },
        { id: 16, name: 'Limits', method: 'onLimits' },
    ];

    // Api Round Stage

    static API__ROUND__STAGE = {
        1: 'InitializeShoeOrDisplay',
        2: 'Bet',
        3: 'DealCard',
        4: 'FixRoundResult',
    };

    // Api Round Stage Description

    static API__STAGE__DESCRIPTION = {
        InitializeShoeOrDisplay: 'Place your bets',
        Bet: 'Place your bets',
        DealCard: 'Bets closed',
        FixRoundResult: '{name} win',
        WaitAnotherRound: 'Please, wait while new round start',
        LowBalance: 'Your balance is too low',
    };

    // Api Bet Type

    static API__BET__TYPE = {
        1: 'Player',
        2: 'Banker',
        3: 'Tie',
        4: 'PlayerPair',
        5: 'BankerPair',
    };

    static API__BET__TYPE__NAME = {
        1: 'Player',
        2: 'Banker',
        3: 'Tie',
        4: 'Player Pair',
        5: 'Banker Pair',
    };

    static API__BET__TYPE__CLASS = {
        Player: 'Player',
        Banker: 'Banker',
        Tie: 'Tie',
        'Player Pair': 'PlayerPair',
        'Banker Pair': 'BankerPair',
    };

    // Game Results

    static GAME__RESULTS = {
        ppair: {
            id: 0,
            className: 'player',
            text: 'player pair',
        },
        player: {
            id: 1,
            className: 'player',
            text: 'player',
        },
        tie: {
            id: 2,
            className: 'tie',
            text: 'tie',
        },
        banker: {
            id: 3,
            className: 'banker',
            text: 'banker',
        },
        bpair: {
            id: 4,
            className: 'banker',
            text: 'banker pair',
        },
    };

    // Chips

    static chips = [
        {
            id: 0, nominal: 1, color: 'blue', active: true,
        },
        {
            id: 1, nominal: 5, color: 'green', active: false,
        },
        {
            id: 3, nominal: 25, color: 'orange', active: false,
        },
        {
            id: 4, nominal: 100, color: 'red', active: false,
        },
        {
            id: 5, nominal: 500, color: 'purple', active: false,
        },
        {
            id: 6, nominal: 1000, color: 'dark', active: false,
        },
    ];

    static chipsMap = Types.chips.reduce((acc, c) => acc.set(c.id, c), new Map());

    // Beat Road

    static winMetric = {
        P: 'player',
        B: 'banker',
        T: 'tie',
    };

    static winPairMetric = {
        P: 'P',
        B: 'B',
    };

    // Date formats

    static dateFormatLong = 'YYYY-MM-DD HH:mm:ss';

    static dateFormatShort = 'YY/MM/DD HH:mm:ss';

    // Main Settings Tabs

    static mainSettingsTabs = [
        { index: 0, label: 'General', component: 'General' },
        { index: 1, label: 'Video', component: 'Video' },
        { index: 2, label: 'Sound', component: 'Sound' },
    ];

    static mainSettingsTabsMap = Types.mainSettingsTabs.reduce((acc, s) => acc.set(s.index, s), new Map());

    static mobileMenuItems = [
        {
            index: 0, type: 'chat', label: 'Chat', icon: 'chat', width: '100%', enabled: true,
        },
        {
            index: 1, type: 'limits', label: 'Limits', icon: 'limits', width: '90%', enabled: true,
        },
        {
            index: 2, type: 'history', label: 'History', icon: 'history', width: '90%', enabled: false,
        },
        {
            index: 3, type: 'settings', label: 'Settings', icon: 'settings', width: '90%', enabled: true,
        },
        {
            index: 4, type: 'help', label: 'Help', icon: 'help', width: '90%', enabled: false,
        },
    ];

    static mobileMenuItemsMap = Types.mobileMenuItems.reduce((acc, s) => acc.set(s.type, s), new Map());

    static numberByColors = {
        0: 'Green',
        1: 'Red',
        2: 'Black',
        3: 'Red',
        4: 'Black',
        5: 'Red',
        6: 'Black',
        7: 'Red',
        8: 'Black',
        9: 'Red',
        10: 'Black',
        11: 'Black',
        12: 'Red',
        13: 'Black',
        14: 'Red',
        15: 'Black',
        16: 'Red',
        17: 'Black',
        18: 'Red',
        19: 'Red',
        20: 'Black',
        21: 'Red',
        22: 'Black',
        23: 'Red',
        24: 'Black',
        25: 'Red',
        26: 'Black',
        27: 'Red',
        28: 'Black',
        29: 'Black',
        30: 'Red',
        31: 'Black',
        32: 'Red',
        33: 'Black',
        34: 'Red',
        35: 'Black',
        36: 'Red',
    };
}
