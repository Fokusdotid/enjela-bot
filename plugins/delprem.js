let fs = require('fs')
let handler = async (m, { conn, args }) => {

    const json = JSON.parse(fs.readFileSync('./data/premium.json'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else who = args[0] ? args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    if (json.includes(who)) throw `${conn.getName(who)} belum premium!`
    let index = json.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    json.splice(index, 1)
    fs.writeFileSync('./data/premium.json', JSON.stringify(json))
    m.reply(`${conn.getName(who)} sekarang bukan premium!`)

    delete require.cache[require.resolve('../config')]
    require('../config')

}
handler.help = ['delprem [@user]']
handler.tags = ['owner']
handler.command = /^(remove|hapus|-|del)prem$/i

handler.owner = true

module.exports = handler
