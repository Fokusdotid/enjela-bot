let { getBuffer } = require('../lib/functions')

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap masukan query', m)

 await m.reply('Searching...')
let str = `
*Hasil Pencarian :*

${text}
`.trim()

  let hasil = await getBuffer('http://lolhuman.herokuapp.com/api/gimage?apikey=31caf10e4a64e86c1a92bcba&query=' + text)

     conn.sendFile(m.chat, hasil, 'foto.jpg', str, m)
}
handler.help = ['pinterest2 <query>']
handler.tags = ['internet', 'downloader']
handler.command = /^pinterest2$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
