let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink && !isAdmin && !m.isBaileys && m.isGroup) {
    let thisGroup = `https://chat.whatsapp.com/${await conn.groupInviteCode(m.chat)}`
    if (m.text.includes(thisGroup)) throw false // jika link grup itu sendiri gak dikick
    m.reply(` *─────「 ANTILINK 」─────* ${isBotAdmin ? '' : '\n\n_Eh maap Enjela Bukan Atmin :)'}\n\nLink Group Terdeteksi, Kamu Akan Di Kick!!`)
    if (isBotAdmin) await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler
