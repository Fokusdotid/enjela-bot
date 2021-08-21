let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let [q, n] = text.split`|`
    if (!q) throw `Ketik ${usedPrefix + command} <teks>|<wm>`
    let user = global.db.data.users[m.sender].name
    let name = n ? n : user ? user : await conn.getName(m.sender)
    let res = await fetch(`https://terhambar.com/aw/qts/?kata=${q}&author=${name}&tipe=random`)
    if (!res.ok) throw 'Server error'
    let json = await res.json()
    await conn.sendFile(m.chat, json.result, 'q.jpg', '', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['quotemaker2 <teks | wm>']
handler.tags = ['nulis']
handler.command = /^q(uote)?maker?2$/i
handler.limit = true
//MadeByLeviBot
module.exports = handler
