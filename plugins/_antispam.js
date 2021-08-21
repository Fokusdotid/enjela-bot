let handler = m => m

handler.all = async function (m) {
    if (!db.data.settings.antispam) return // antispam aktif?
    if (m.isBaileys && m.fromMe) return
    if (!m.message) return
    if (!m.isCommand) return
    if (db.data.users[m.sender].banned) return
    if (db.data.chats[m.chat].isBanned) return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 7) {
            if (this.spam[m.sender].count > 7) {
                db.data.users[m.sender].banned = true
                await this.sendButton(m.chat, '*kamu dibanned!\karna sudah melakukan spam*', 'Fokus Dot Id', 'PEMILIK BOT', ',owner')
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

module.exports = handler