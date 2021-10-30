let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler  = async (m, { conn, DevMode }) => {
  global.db.data.settings[conn.user.jid].backupDB = 0
  m.reply('Berhasil Backup Database!')
}

handler.help = ['backup']
handler.tags = ['owner']
handler.command = /^(backup)$/i
handler.owner = false

module.exports = handler
