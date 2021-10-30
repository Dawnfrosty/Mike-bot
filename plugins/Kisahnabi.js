let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Nama Nabi nya', m)

	axios.get(`https://videfikri.com/api/religi/kisahnabi/?nabi=${text}`).then ((res) => {
	 	let hasil = `*NAMA NABI*			: ${text}\n*TEMPAT LAHIR*		: ${res.data.result.tempat_lahir}\n*TAHUN KELAHIRAN*	: ${res.data.result.tahun_kelahiran}\n*UMUR*				: ${res.data.result.usia}\n*KISAH*				: ${res.data.result.description}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['kisah|kisah nabi|nabi'].map(v => v + ' <nama nabi>')
handler.tags = ['islam']
handler.command = /^(kisah|kisahnabi|nabi)$/i

module.exports = handler
