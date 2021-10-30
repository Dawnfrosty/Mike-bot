let axios = require('axios')
let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
     let handler  = async (m, { conn, usedPrefix, command }) => {
     	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
     let json = await fetch(`https://meme-api.herokuapp.com/gimme/biganimetiddies`)
   conn.sendButton(m.chat, await (await fetch(json.url)).buffer(), 'oppai', '© mikebot', 'Next', `${usedPrefix + command}`, m, false)
}
handler.help = ['boobs']
handler.tags = ['hentai']
handler.command = /^boobs$/i
handler.limit = true

module.exports = handler
