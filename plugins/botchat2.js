let moment = require('moment-timezone')
let fs = require('fs')
let handler = async (m, { conn, command }) => {
let img = './src/mike.png'
let user = global.DATABASE.data.users[m.sender]
conn.sendFile(m.chat, img, '', `Halo juga kak ${conn.getName(m.sender)}`, { key: { fromMe: false, remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: `${ucapan()} ${conn.getName(m.sender)}`, itemCount: 999, thumbnail: fs.readFileSync('./src/mikey.jpg')
}}})
}
handler.customPrefix = /^(Hallo|halo|Halo|hallo|hi|helo|hai|hi|Hai|Helo|Hello|oy|p)$/i
handler.command = new RegExp

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang🌞"
    }
    if (time >= 15) {
        res = "Selamat sore🌝"
    }
    if (time >= 18) {
        res = "Selamat malam🌚"
    }
    return res
}