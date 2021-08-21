let handler = async (m, { conn }) => {
  if (new Date - global.db.data.users[m.sender].lastclaim > 86400000) {
    conn.reply(m.chat, 'Nih Gw Kasih Modal Buat Judi 100.000 XP ➕ 10.000 Money', m)
    global.db.data.users[m.sender].exp += 100000
    global.db.data.users[m.sender].money += 10000
    global.db.data.users[m.sender].lastclaim = new Date * 1
  } else conn.reply(m.chat, 'Usaha Ngab Kalo Mau Dapat Uang Tambahan:v', m)
}
handler.help = ['bonus', 'hadiah']
handler.tags = ['premium']
handler.command = /^(bonus|hadiah)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

