let fetch = require('node-fetch')

let handler = async(m, { conn, text, usedPrefix }) => {

    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'chord hanya rindu', m)
    await m.reply(global.wait)
    let res = await fetch(`https://api.lolhuman.xyz/api/chord?apikey=Dawnfrostkey&query=${text}`)
          let hasil = `*• Chord Lagu = ${res.result.title} :*\nDibuat = ${res.result.created}\nChord\n${res.result.chord}`
            conn.reply(m.chat, hasil, m)
}
handler.help = ['chord <judul lagu>']
handler.tags = ['edukasi']
handler.command = /^(chord)$/i

handler.limit = true

module.exports = handler
