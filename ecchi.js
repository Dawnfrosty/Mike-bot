let axios = require('axios');
let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
     let handler  = async (m, { conn, command, usedPrefix }) => {
     	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
     json = (await axios.get('https://meme-api.herokuapp.com/gimme/ecchi')).data
   conn.sendButtonImg(m.chat, json.url, json.title, '© mikebot', 'Next', `${command + usedPrefix}, m, false)
}
handler.help = ['ecchi']
handler.tags = ['hentai']
handler.command = /^ecchi$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
