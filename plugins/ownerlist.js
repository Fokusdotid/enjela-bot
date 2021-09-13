let fs = require('fs')
let handler = async (m, { conn, isOwner }) => {
  let prem = JSON.parse(fs.readFileSync('./data/owner.json')).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
  conn.reply(m.chat, `┌〔 Daftar Owner Di Bot Ini 〕` + `\n` + prem.map(v => isOwner ? '├ @' + v.replace(/@.+/, '') : '│ ' + conn.getName(v)).join`\n` + '\n└────', m, { contextInfo: { mentionedJid: prem } })
}
handler.help = ['ownerlist']
handler.tags = ['owner']
handler.command = /^(listowner|ownerlist)$/i

module.exports = handler
