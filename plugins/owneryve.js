let handler = function (m) {
	this.sendContact(m.chat, '6282297563380', 'Owner MikeBot :)', m)
}

handler.customPrefix = ['🍭Owner Mike'] 
handler.command = new RegExp

module.exports = handler