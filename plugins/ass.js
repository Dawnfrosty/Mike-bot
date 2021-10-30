let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
  res = await fetch(`https://api.xteam.xyz/randomimage/ass?APIKEY=Dawnfrostkey`)
  heum = await res.buffer()
  conn.sendButtonImg(m.chat, heum, 'wangy wangy wangy', '© mikebot', 'Next', `${usedPrefix + command}`, m)
}
handler.help = ['ass']
handler.tags = ['hentai']

handler.command = /^(ass)$/i
handler.limit = true

module.exports = handler

