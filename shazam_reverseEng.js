(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5611], {
    2688: function(e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/sigx.048766c4.wasm"
    },
    38087: function(e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/sigx-worker.2f5a3b3f.js"
    },
    31961: function(e, t, n) {
        "use strict";
        e.exports = n.p + "static/media/sigx.ed01c303.js"
    },
    25611: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            AppleMusicLink: function() {
                return f
            },
            getAppleMusicHref: function() {
                return h
            },
            useAppleMusicHref: function() {
                return v
            }
        });
        var r = n(57437)
          , i = n(4794)
          , a = n(89726)
          , s = n(55807)
          , o = n(94076)
          , c = n(59715)
          , u = n(2265)
          , l = n(10195)
          , d = n(10875)
          , m = n(70225)
          , p = n.n(m);
        function f(e) {
            let {trackId: t, songId: n, playlistId: m, musicVideoId: f, amLink: v, forceToMusicDotApple: k, children: S, "aria-label": E, className: I, screenName: b, dataTestId: A, ..._} = e
              , {isUserAuthorized: N} = (0,
            s.qm)()
              , U = (0,
            c.F)()
              , {link: y, onClick: L, clientbeaconuuid: x} = function(e, t, n) {
                let r, i, a, {trackId: c, songId: d, musicVideoId: m, playlistId: p} = n, {state: {platform: {ios: f, android: v}, promotionCampaign: k}} = (0,
                u.useContext)(l.Il), {isUserAuthorized: S, setIsUserAuthorized: E} = (0,
                s.qm)(), I = (0,
                u.useCallback)(async()=>{
                    let e = MusicKit.getInstance();
                    await e.authorize(),
                    E(e.isAuthorized)
                }
                , [E]);
                if (f ? S || (i = k ? h({
                    trackId: c,
                    songId: d,
                    playlistId: p,
                    musicVideoId: m
                }) : "".concat(g, "/subscribe")) : v ? (a = I,
                S && (i = e)) : (a = I,
                S ? i = e : k && (i = h({
                    trackId: c,
                    songId: d,
                    playlistId: p,
                    musicVideoId: m
                }))),
                t && e && (i = e),
                i && (null == i ? void 0 : i.indexOf(g)) == 0) {
                    let e = new URL(i)
                      , t = e.searchParams;
                    T.forEach(e=>{
                        t.has(e) || t.set(e, w[e])
                    }
                    ),
                    r = (0,
                    o.k$)(),
                    t.set("mttnsub2", r || ""),
                    i = e.toString()
                }
                return {
                    link: i,
                    clientbeaconuuid: r,
                    onClick: a
                }
            }(v, k, {
                trackId: t,
                songId: n,
                musicVideoId: f,
                playlistId: m
            })
              , R = {
                providerName: "applemusic",
                providerDescription: N ? "gotoapplemusic" : "gotowebflow",
                store: "applemusic",
                songId: n,
                playlistId: m,
                shazamTrackId: t,
                type: "open",
                ..._
            }
              , C = {
                type: "open",
                providerName: "applemusic",
                providerDescription: N ? "gotoapplemusic" : "gotowebflow",
                store: "applemusic",
                songId: n,
                ..._
            };
            return y ? (0,
            r.jsx)(i.UserEventLink, {
                className: (0,
                d.Z)(p().link, I),
                href: y,
                "aria-label": E,
                target: "_blank",
                rel: "noopener",
                ...x ? {
                    clientbeaconuuid: x
                } : {},
                screenName: b || U || a.m.UNKNOWN,
                dataTestId: A || "appleMusicLink",
                ...R,
                children: (0,
                r.jsxs)(r.Fragment, {
                    children: [" ", S]
                })
            }) : L ? (0,
            r.jsx)(i.UserEventButton, {
                screenName: b || U || a.m.UNKNOWN,
                dataTestId: A || "appleMusicLink",
                ...C,
                ...x ? {
                    clientbeaconuuid: x
                } : {},
                children: (0,
                r.jsx)("div", {
                    onClick: L,
                    className: I,
                    children: S
                })
            }) : (0,
            r.jsx)(r.Fragment, {})
        }
        function h(e) {
            let {trackId: t, songId: n, musicVideoId: r, playlistId: i} = e
              , a = "https://www.shazam.com/applemusic";
            return n ? a = "https://www.shazam.com/applemusic/song/".concat(n) : t && (a = "https://www.shazam.com/applemusic/track/".concat(t)),
            a
        }
        function v(e) {
            let {trackId: t, songId: n, musicVideoId: r} = e;
            return h({
                trackId: t,
                songId: n,
                musicVideoId: r
            })
        }
        let g = "https://music.apple.com"
          , w = {
            itsct: "Shazam_web",
            itscg: "30201",
            mttnagencyid: "769459046716559743",
            mttnsiteid: "125115",
            mttn3pid: "a_custom_779816081798873874",
            app: "music",
            mttnsub2: "5348615A-616D-3235-3830-44754D6D5973"
        }
          , T = Object.keys(w)
    },
    4794: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            BeaconComponentContextProvider: function() {
                return v
            },
            Impression: function() {
                return S
            },
            PageView: function() {
                return k
            },
            PreUserEventLink: function() {
                return w
            },
            UserEventButton: function() {
                return g
            },
            UserEventLink: function() {
                return T
            }
        });
        var r = n(57437)
          , i = n(2265)
          , a = n(87138)
          , s = n(86805)
          , o = n(34004)
          , c = n(68456)
          , u = n(16463)
          , l = n(10195);
        function d() {
            var e, t, n, r;
            let a = (0,
            i.useContext)(l.Il)
              , s = (null == a ? void 0 : null === (e = a.state) || void 0 === e ? void 0 : e.environment) === "prod"
              , o = (null !== (r = null === (n = (0,
            u.useSearchParams)()) || void 0 === n ? void 0 : null === (t = n.get("debug")) || void 0 === t ? void 0 : t.indexOf("beacons")) && void 0 !== r ? r : -1) > -1;
            return !s && o
        }
        var m = n(92411)
          , p = n(59715);
        function f() {
            let[e,t] = (0,
            i.useState)()
              , n = (0,
            p.F)();
            return (0,
            i.useEffect)(()=>{
                let e = document.referrer
                  , r = new URLSearchParams(window.location.search).get("referrer");
                if (n && (e || r)) {
                    let i;
                    r ? i = r : -1 == e.indexOf("shazam.com") && -1 == e.indexOf("shz.am") && (i = new URL(e).hostname),
                    i && t({
                        beaconType: "deeplink",
                        deeplinkreferrer: i,
                        providername: i,
                        screenName: n
                    })
                }
            }
            , [n]),
            (0,
            r.jsx)(s.Bb, {
                beaconDefinition: e
            })
        }
        let h = (0,
        o.Y$)(a.default);
        function v(e) {
            var t;
            let {children: n} = e
              , i = null !== (t = (0,
            u.usePathname)()) && void 0 !== t ? t : "unknownPath"
              , a = (0,
            m.eL)(i, "en-us");
            "/" == a && (a = "/home");
            let s = d();
            return (0,
            r.jsxs)(c.vb.Provider, {
                value: {
                    isEnabled: s,
                    path: a,
                    allowKeysList: ["action", "artistId", "destination", "commonTrackId", "eventId", "hasTickets", "label", "lyricsId", "origin", "outcome", "playlistId", "providerName", "providerDescription", "removed", "section", "store", "songId", "shazamTrackId", "shazamVenueId", "type"],
                    transformMap: {
                        artistId: "artist_adam_id",
                        eventId: "shazam_event_id",
                        hasTickets: "hastickets",
                        lyricsId: "lyricsid",
                        screenName: "screenname",
                        songId: "track_adam_id",
                        shazamTrackId: "trackkey",
                        providerName: "providername",
                        providerDescription: "providerdesc",
                        shazamVenueId: "shazam_venueid"
                    }
                },
                children: [n, (0,
                r.jsx)(f, {})]
            })
        }
        let g = (0,
        c.rK)({
            UserEvent: s.LT
        })
          , w = (0,
        c.Y$)({
            UserEventLink: h
        })
          , T = e=>{
            let t = d()
              , {href: n, ...a} = e
              , [s,o] = (0,
            i.useState)(n);
            return (0,
            i.useEffect)(()=>{
                if (t && (null == n ? void 0 : n.startsWith("/")) && "undefined" != typeof document) {
                    let e = new URL(n,document.baseURI);
                    e.searchParams.set("debug", "beacons"),
                    o(e.href)
                } else
                    o(n)
            }
            , [n, t]),
            (0,
            r.jsx)(w, {
                ...a,
                href: s
            })
        }
          , k = (0,
        c.Rl)({
            Basic: s.Bb
        })
          , S = (0,
        c._q)({
            Impression: s.Ub
        })
    },
    77185: function(e, t, n) {
        "use strict";
        n.d(t, {
            Y: function() {
                return i
            },
            Z: function() {
                return a
            }
        });
        var r = n(83706);
        let i = Object.keys(r.n)
          , a = r.a
    },
    92411: function(e, t, n) {
        "use strict";
        n.d(t, {
            Ds: function() {
                return h
            },
            JU: function() {
                return p
            },
            T6: function() {
                return f
            },
            Xg: function() {
                return v
            },
            aq: function() {
                return l
            },
            bn: function() {
                return g
            },
            eL: function() {
                return d
            },
            oF: function() {
                return m
            },
            z: function() {
                return u
            }
        });
        var r = n(57437)
          , i = n(2265)
          , a = n(89726)
          , s = n(36226)
          , o = n(83706)
          , c = n(77185);
        function u(e, t, n) {
            let[a,s] = e.split(t);
            return [(0,
            r.jsx)(i.Fragment, {
                children: a
            }, "start"), (0,
            r.jsx)(i.Fragment, {
                children: n
            }, "component"), (0,
            r.jsx)(i.Fragment, {
                children: s
            }, "component")]
        }
        function l(e, t) {
            return e.startsWith("/") ? ("en-us" == t ? "" : "/".concat(t)) + e : e
        }
        function d(e, t) {
            var n, r;
            let[i,a] = null !== (n = null == e ? void 0 : e.split("?")) && void 0 !== n ? n : []
              , s = null !== (r = null == i ? void 0 : i.split("/").slice(1)) && void 0 !== r ? r : []
              , c = Object.keys(o.n).includes(s[0]);
            return (t !== o.a ? "/" + t : "") + "/" + s.slice(c ? 1 : 0).join("/") + (a ? "?" + a : "")
        }
        function m() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return (0,
            s.oF)(null != e ? e : "")
        }
        function p(e) {
            var t;
            return null !== (t = null == e ? void 0 : e.toLowerCase()) && void 0 !== t ? t : "us"
        }
        function f(e) {
            return e && e.replace("https://is1-ssl.mzstatic.com", "/mkimage")
        }
        function h(e) {
            let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300;
            var r = this;
            return function() {
                for (var i = arguments.length, a = Array(i), s = 0; s < i; s++)
                    a[s] = arguments[s];
                clearTimeout(t),
                t = setTimeout(()=>{
                    e.apply(r, a)
                }
                , n)
            }
        }
        function v(e) {
            var t, n, r;
            let i = d(e, "en-us")
              , s = null !== (n = null == i ? void 0 : null === (t = i.split("/")) || void 0 === t ? void 0 : t[1]) && void 0 !== n ? n : ""
              , o = {
                "": a.m.HOME,
                apps: a.m.APPS,
                album: a.m.ALBUM,
                artist: a.m.ARTIST,
                track: a.m.TRACK,
                charts: a.m.CHARTS,
                events: a.m.EVENTS,
                playlist: a.m.PLAYLIST,
                song: a.m.TRACK,
                shazamkit: a.m.SHAZAMKIT,
                event: a.m.EVENTS_EVENT,
                radiospins: a.m.RADIOSPINS
            };
            return null !== (r = null == o ? void 0 : o[s]) && void 0 !== r ? r : a.m.UNKNOWN
        }
        function g(e, t) {
            let n = e.split("/")
              , r = n[1];
            return c.Y.includes(r) && n[2] && (r = n[2]),
            !(n.includes("artist") && n.includes("events")) && t.includes(r)
        }
    },
    89726: function(e, t, n) {
        "use strict";
        var r, i;
        n.d(t, {
            m: function() {
                return r
            }
        }),
        (i = r || (r = {})).ALBUM = "album",
        i.APPS = "apps",
        i.ARTIST = "artist",
        i.CHARTS = "charts",
        i.HIGHLIGHTS = "highlights",
        i.DETAILS = "details",
        i.EXAMPLES = "examples",
        i.EVENTS_EVENT = "events_event",
        i.EVENTS_LIST = "events_list",
        i.EVENTS_LIST_ARTIST = "events_artist_search",
        i.EVENTS_LIST_LOCATION = "events_location_search",
        i.EVENTS_LIST_DATE = "events_date_search",
        i.EVENTS_LIST_GENRE = "events_genre_search",
        i.EVENTS = "events",
        i.EVENTS_VENUE = "events_venue",
        i.EVENTS_ARTIST_TOUR = "events_artist_tour",
        i.NAVBAR = "navbar",
        i.HOME = "home",
        i.MICDENIED = "micdenied",
        i.NOMATCH = "nomatch",
        i.PLAYERBAR = "playerbar",
        i.PLAYLIST = "playlist",
        i.SHAZAMKIT = "shazamkit",
        i.SONG = "song",
        i.TAGGING = "tagging",
        i.TRACK = "track",
        i.RADIOSPINS = "radio_spins",
        i.UNKNOWN = "unknown"
    },
    59715: function(e, t, n) {
        "use strict";
        n.d(t, {
            F: function() {
                return a
            }
        });
        var r = n(92411)
          , i = n(16463);
        function a() {
            let e = (0,
            i.usePathname)();
            return (0,
            r.Xg)(e)
        }
    },
    94076: function(e, t, n) {
        "use strict";
        let r, i, a, s, o;
        n.d(t, {
            k$: function() {
                return U
            },
            kk: function() {
                return T
            },
            po: function() {
                return k
            }
        }),
        n(77641);
        let c = null, u = null, l = Date.now(), d = !1, m = !1, p, f, h, v = null, g = 0, w = [], T = (e,t,n)=>{
            s = t,
            o = n,
            c || (c = new AudioContext),
            navigator.mediaDevices.getUserMedia({
                audio: {
                    echoCancellation: !1,
                    noiseSupression: !1
                },
                video: !1
            }).then(function(e) {
                try {
                    u = e,
                    r = c.createMediaStreamSource(e),
                    i = c.createScriptProcessor(4096, 1, 1),
                    m = !0,
                    crypto.randomUUID(),
                    r.connect(i),
                    i.connect(c.destination),
                    i.onaudioprocess = function(e) {
                        let t;
                        if (!m)
                            return;
                        let n = e.inputBuffer;
                        for (let e = 0; e < n.numberOfChannels; e++) {
                            let r = n.getChannelData(e);
                            g += n.length,
                            (t = new Float32Array(n.length)).set(r),
                            w.push(t)
                        }
                    }
                    ,
                    S()
                } catch (e) {
                    console.log(e)
                }
            }).catch(e=>{
                o("error", null)
            }
            )
        }
        , k = e=>{
            y(e)
        }
        , S = ()=>{
            p = setTimeout(function() {
                I()
            }, 3e3),
            f = setTimeout(function() {
                I()
            }, 6e3),
            h = setTimeout(function() {
                I()
            }, 9e3),
            v = setTimeout(function() {
                d = !0,
                I()
            }, 12e3)
        }
        , E = (e,t)=>{
            let n = new Float32Array(t)
              , r = 0;
            for (let t = 0; t < e.length; t++)
                n.set(e[t], r),
                r += e[t].length;
            return n
        }
        , I = ()=>{
            let e = E(w, g);
            var t, n, r = new Blob([(t = new DataView(new ArrayBuffer(44 + 2 * e.length)),
            n = c.sampleRate,
            _(t, 0, "RIFF"),
            t.setUint32(4, 36 + 2 * e.length, !0),
            _(t, 8, "WAVE"),
            _(t, 12, "fmt "),
            t.setUint32(16, 16, !0),
            t.setUint16(20, 1, !0),
            t.setUint16(22, 1, !0),
            t.setUint32(24, n, !0),
            t.setUint32(28, 4 * n, !0),
            t.setUint16(32, 2, !0),
            t.setUint16(34, 16, !0),
            _(t, 36, "data"),
            t.setUint32(40, 2 * e.length, !0),
            function(e, t, n) {
                for (var r = 0; r < n.length; r++,
                t += 2) {
                    var i = Math.max(-1, Math.min(1, n[r]));
                    e.setInt16(t, i < 0 ? 32768 * i : 32767 * i, !0)
                }
            }(t, 44, e),
            t)],{
                type: "audio/wav"
            });
            {
                let e = new FileReader;
                e.onload = function() {
                    let t = window.open()
                      , n = document.createElement("a");
                    n.setAttribute("href", e.result),
                    n.setAttribute("download", "".concat(l, ".wav")),
                    t.document.body.appendChild(n),
                    n.click()
                }
                ,
                (window.URL || window.webkitURL).createObjectURL(r)
            }
            b(e)
        }
        , b = e=>{
            let t = window.location.origin;
            new n.U(n(2688));
            let r = new n.U(n(31961))
              , i = "".concat(t).concat(r.href)
              , a = c.sampleRate;
            try {
                A({
                    type: "getSigX",
                    audioF32: e,
                    index: 0,
                    sampleRate: a,
                    sigxJSPath: i
                })
            } catch (e) {
                console.log("could not invoke worker", e)
            }
        }
        , A = e=>{
            let t = window.location.origin
              , r = new n.U(n(38087))
              , i = new Worker(new URL("".concat(t).concat(r.href),"file:///usr/src/app/src/js/rec/rec.js"));
            i.postMessage({
                type: "load",
                url: e.sigxJSPath
            }),
            i.addEventListener("message", function(e) {
                switch (e.data.type) {
                case "sigready":
                    N(e.data.index, e.data.signatureArray);
                    break;
                case "error":
                    errorHandler({
                        msg: e.data.msg
                    });
                    break;
                default:
                    console.log("console", e.data.msg)
                }
            }, !1);
            try {
                i.postMessage(e)
            } catch (e) {
                console.log(e)
            }
        }
        ;
        function _(e, t, n) {
            for (var r = 0; r < n.length; r++)
                e.setUint8(t + r, n.charCodeAt(r))
        }
        let N = (e,t)=>{
            fetch("/services/webrec/match", {
                method: "POST",
                body: JSON.stringify({
                    data: function(e) {
                        for (var t, n = 0, r = e.length, i = ""; n < r; )
                            t = e.subarray(n, Math.min(n + 32768, r)),
                            i += String.fromCharCode.apply(null, t),
                            n += 32768;
                        return window.btoa(i)
                    }(new Uint8Array(t.buffer)),
                    sessionId: U(),
                    lang: "en",
                    country: "US"
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(e=>e.json()).then(e=>{
                if (e.matches.length > 0) {
                    let t = e.matches[0];
                    y(!0),
                    fetch("/services/amapi/v1/catalog/US/songs?l=en&ids=".concat(t.adamId)).then(e=>e.json()).then(e=>{
                        let n = e.data[0].attributes.artwork
                          , r = {
                            ...t,
                            artwork: n
                        };
                        s(r, a),
                        o("match", r.trackid)
                    }
                    )
                } else
                    d && y(!1)
            }
            ).catch(e=>{
                console.log("error", e),
                o("error", null),
                y()
            }
            )
        }
          , U = ()=>"10000000-1000-4000-8000-100000000000".replace(/[018]/g, e=>(e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16))
          , y = e=>{
            r && i && u && (r.disconnect(i),
            i.disconnect(c.destination),
            u.getAudioTracks()[0].stop()),
            clearTimeout(p),
            clearTimeout(f),
            clearTimeout(h),
            clearTimeout(v),
            m = !1,
            d = !1,
            g = 0,
            w = [],
            u = null,
            i = null,
            r = null,
            p = f = h = v = null,
            "match" !== e && ("cancel" === e || "no_match" === e) && o(e, null)
        }
    },
    70225: function(e) {
        e.exports = {
            link: "AppleMusicLink_link__MD7ZC"
        }
    }
}]);
