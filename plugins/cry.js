let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn}) => {
  try {
  let res = await fetch('https://api.lolhuman.xyz/api/random/cry?apikey=Dawnfrostkey')
  let json = await res.buffer()
  let { 
result
} = json
let stiker = await sticker(null, result, 'Cry', '@Kokoronationz')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
  }
}
handler.help = ['cry']
handler.tags = ['sticker']
handler.command = /^cry/i

module.exports = handler
