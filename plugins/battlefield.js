let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
   let [atas, bawah] = text.split`|`
  if (!atas) throw `Masukkan Parameter\nCth *${usedPrefix + command} Mike|Bot`
  if (!bawah) throw `Masukkan Parameter\nCth *${usedPrefix + command} Mike|Bot`
  m.reply('Sedang Diproses...')
  // https://api.lolhuman.xyz/api/photooxy2/pubg?apikey=beta&text1=LoL&text2=Human
  let res = await fetch(`https://api.lolhuman.xyz/api/photooxy2/pubg?apikey=Dawnfrostkey&text1=${atas}&text2=${bawah}`)
  let buff = await(res).buffer()
  conn.sendFile(m.chat, buff, 'nama.jpg', `Nih Mhank`, m, false)
}
handler.help = ['battlefield'].map(v => v + ' <teks|teks>')
handler.tags = ['sticker']

handler.command = /^(battlefield)$/i
handler.limit = true

module.exports = handler
