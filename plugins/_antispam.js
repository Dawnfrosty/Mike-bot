module.exports = {
    async all(m) {
    if (!db.data.settings[this.user.jid].antispam) return // antispam aktif?
    if (m.isBaileys && m.fromMe) return
    if (!m.message) return
    if (db.data.chats[m.chat].isBanned) return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 5) {
                await this.sendButton(m.chat, 'Jangan spam!, Jika spam kamu akan diwarn oleh owner,\nSpam: 5/10', '© mikebot', 'Pemilik Bot', '.nowner', m)
            }
            if (this.spam[m.sender].count > 10) {
                db.data.users[m.sender].warn += 1
                await this.sendButton(m.chat, 'kamu diwarn karena spam!', '© mikebot', 'Pemilik Bot', '.nowner', m)
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
      else this.spam[m.sender] = {
          jid: m.sender,
          count: 0,
          lastspam: 0
      }
   }
}
