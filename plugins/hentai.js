let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
  let heum = await (await fetch(`https://api.lolhuman.xyz/api/random/nsfw/waifu?apikey=Dawnfrostkey`)).buffer()
   conn.sendButtonImg(m.chat, json, '🥵🥵🥵', '© mikebot', 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['hentai']
handler.tags = ['hentai']

handler.command = /^(hentai(pic)?|nsfw)$/i
handler.limit = true

module.exports = handler
