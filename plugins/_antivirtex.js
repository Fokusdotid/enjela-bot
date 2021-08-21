let handler = m => m
let timeout = 5000
handler.all = async function (m, { isBotAdmin }) {
	
	let name = m.fromMe ? conn.user : conn.contacts[m.sender]
	if (!db.data.settings.antitroli) return // antitroli aktif?
    if (!m.isBaileys && !isBotAdmin && m.text.length > 4000) {
    conn.reply(m.chat, `*「 ANTI VIRTEX 」* \n\nTerdeteksi *${'+' + name.jid.split`@`[0]}*\ntelah mengirim virtex!\n\nMaaf Kamu akan dikick dari grup ini!`, m)
        await this.groupRemove(m.chat, [m.sender])
        await this.modifyChat(m.chat, 'delete')
        if (m.isGroup) global.db.data.chats[m.chat].welcome = false
     this.reply(global.owner[0] + '@s.whatsapp.net', `
Pelaku pengirim virtex @${m.sender.split`@`[0]}
ID: ${m.isGroup ? m.chat : m.sender}
Nama: ${m.isGroup ? this.getName(m.chat) : this.getName(m.sender)}
`.trim(), null, { contextInfo: { mentionedJid: [m.sender] } })
    }
}
        

module.exports = handler
