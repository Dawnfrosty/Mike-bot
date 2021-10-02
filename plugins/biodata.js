let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
*BIODATA OWNER*

*Nama* : Dawnfrost
*Umur* : Private
*Kelas* : 9 Smp
*Status* : Private

*SOSIAL MEDIA*

*instagran* : @Dawnfrost.ig
*Facebook* : Private
*Chanel Youtube* : none
*Gmail* : semangkamuda134@gmail.com

_Oke udah itu aja terimakasih_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Dawnfrost')).buffer(), ext, 'Recoded By Dawnfrosty', 'Nomor Owner', '.nowner', 'Donasi', '.donasi', 'Sewa Bot', '.sewa', m)

}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler