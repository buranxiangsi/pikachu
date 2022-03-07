import string from './css.js'

const player = {
    id: undefined,
    time: 100,
    ui: {
        demo1: document.querySelector('#demo1'),
        demo2: document.querySelector('#demo2')
    },
    events : {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast',
    },
    n: 1,
    init: () => {
        player.ui.demo1.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.play()
        player.bindEvents()
    },
    bindEvents: () => {
        for (let key in player.events)
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(id)
            return
        }
        // console.log(n + ':' + string.substr(0, player.n))
        player.ui.demo1.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight
    },
    play: () => {
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 300
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 100
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    }
}
player.init()