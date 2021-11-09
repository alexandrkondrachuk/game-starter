import { targets } from './targets';
import { racetrackTargets } from './racetrack-targets';

const port = 5003;
const domain = 'https://product.nextgenplay.tk';
const dataPoint = 'Roulette';

const config = {
    name: 'City Roulette Live',
    version: '1.0.0',
    playerInitDelay: 3500,
    server: {
        host: `${domain}:${port}`,
        url: `${domain}:${port}/${dataPoint}`,
        params: {
            productId: 'NGP_Roulette',
            serviceCode: 'ngppitboss',
        },
    },
    apiURLs: {
        home: '/',
        auth: '/auth',
        desktop: '/desktop',
        mobile: '/mobile',
        issue: '/issue',
        maintenance: '/maintenance',
        inaction: '/inaction',
    },
    apiDataPoints: {
        history: '/api/Bets/GetBetsFromPlayerId',
    },
    webrtcSettings: {
        "source": {
            "entries": [
                {
                    "index": 0,
                    "h5live": {
                        "server": {
                            "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4",
                            "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
                            "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"
                        },
                        "rtmp": {
                            "url": "rtmp://bintu-play.nanocosmos.de:1935/play",
                            "streamname": "DIlYv-BlDNb"
                        }
                    }
                }
            ],
            "options": {
                "adaption": {
                    "rule": "deviationOfMean2"
                },
                "switch": {}
            },
            "startIndex": 0
        },
        "playback": {
            "autoplay": true,
            "automute": true,
            "muted": true,
            "forceTech": "h5live",
            "flashplayer": "//demo.nanocosmos.de/nanoplayer/nano.player.swf"
        },
        "style": {
            "controls": false,
            "displayMutedAutoplay": false,
            "scaling": "fill",
        }
    },
    targets,
    racetrackTargets,
    chip: {
        width: 30,
        height: 30,
    },
    pointer: {
        width: 64,
        height: 64,
        fill: '#fbdc01',
    },
    menuResetDelay: 400,
    animationDuration: {
        settings: 500,
        limits: 500,
        chatMessage: 400,
        menuItem: 1000,
    },
};

export default config;