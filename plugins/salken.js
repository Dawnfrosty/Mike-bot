let handler  = async (m, { conn, usedPrefix }) => { 
	conn.sendButton(m.chat, `Halo Kak👋\nsaya adalah MikeBot, MikeBot adalah Sebuah Bot yang bisa membantumu di grup ini, klik tombol dibawah ini jika kamu ingin menggunakan bot!`.trim(), '© mikebot', 'Menu', '.menu', m)
	}

handler.command = /^(salken)$/i

module.exports = handler