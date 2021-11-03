import { targets } from './targets';

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
    webrtcSettings: {
        "source": {
            "entries": [
                {
                    "index": 0,
                    "label": "1080p",
                    "tag": "",
                    "info": {
                        "bitrate": 4500,
                        "width": 1920,
                        "height": 1080,
                        "framerate": 30
                    },
                    "hls": "",
                    "h5live": {
                        "rtmp": {
                            "url": "rtmp://bintu-play.nanocosmos.de:1935/play",
                            "streamname": "DIlYv-BlDNb"
                        },
                        "server": {
                            "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",
                            "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
                            "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"
                        },
                        "token": "",
                        "security": {}
                    },
                    "bintu": {}
                },
                {
                    "index": 1,
                    "label": "720p",
                    "tag": "",
                    "info": {
                        "bitrate": 2000,
                        "width": 1280,
                        "height": 720,
                        "framerate": 30
                    },
                    "hls": "",
                    "h5live": {
                        "rtmp": {
                            "url": "rtmp://bintu-play.nanocosmos.de:1935/play",
                            "streamname": "DIlYv-BlDNb"
                        },
                        "server": {
                            "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",
                            "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
                            "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"
                        },
                        "token": "",
                        "security": {}
                    },
                    "bintu": {}
                },
                {
                    "index": 2,
                    "label": "480p",
                    "tag": "",
                    "info": {
                        "bitrate": 800,
                        "width": 852,
                        "height": 480,
                        "framerate": 30
                    },
                    "hls": "",
                    "h5live": {
                        "rtmp": {
                            "url": "rtmp://bintu-play.nanocosmos.de:1935/play",
                            "streamname": "DIlYv-BlDNb"
                        },
                        "server": {
                            "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",
                            "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
                            "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"
                        },
                        "token": "",
                        "security": {}
                    },
                    "bintu": {}
                },
                {
                    "index": 3,
                    "label": "360p",
                    "tag": "",
                    "info": {
                        "bitrate": 400,
                        "width": 640,
                        "height": 360,
                        "framerate": 25
                    },
                    "hls": "",
                    "h5live": {
                        "rtmp": {
                            "url": "rtmp://bintu-play.nanocosmos.de:1935/play",
                            "streamname": "DIlYv-BlDNb"
                        },
                        "server": {
                            "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",
                            "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
                            "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4"
                        },
                        "token": "",
                        "security": {}
                    },
                    "bintu": {}
                }
            ],
            "options": {
                "adaption": {
                    "rule": "deviationOfMean"
                },
                "switch": {
                    "method": "client",
                    "pauseOnError": false,
                    "forcePlay": true,
                    "fastStart": false,
                    "timeout": 10
                }
            },
            "startIndex": 3
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
        },
        "metrics": {
            "accountId": "nanocosmos1",
            "accountKey": "nc1wj472649fkjah",
            "userId": "nanoplayer-demo",
            "eventId": "nanocosmos-demo",
            "statsInterval": 10,
            "customField1": "demo",
            "customField2": "public",
            "customField3": "online resource"
        }
    },
    targets,
    chip: {
        width: 30,
        height: 30,
    },
    pointer: {
        width: 64,
        height: 64,
        fill: '#fbdc01',
    }
};

export default config;