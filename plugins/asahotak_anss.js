const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*ao/i.test(m.quoted.contentText)) return !0
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    if (!(id in conn.asahotak)) return m.reply('Soal itu telah berakhir')
    if (/^(me)?nyerah$/i.test(m.text)) {
        await this.sendButton(m.chat, `Jawabannya adalah ${JSON.parse(JSON.stringify(conn.asahotak[id][1].jawaban))}`.trim(), 'kok nyerah :v', 'ASAH OTAK', '.asahotak').then(() => { delete conn.asahotak[id] })
    }
    //if (m.quoted.id == conn.asahotak[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.asahotak[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
    if (/^.*ao$/i.test(m.text)) return !0
    if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
        global.db.data.users[m.sender].exp += conn.asahotak[id][2]
        await this.sendButton(m.chat, `*Benar!* +${conn.asahotak[id][2]} XP`.trim(), '', 'ASAH OTAK', '.asahotak')
        //m.reply(`*Benar!*\n+${conn.asahotak[id][2]}XP Buat Kamu`)
        clearTimeout(conn.asahotak[id][3])
        delete conn.asahotak[id]
    } else if (similarity(m.text.toLowerCase().endsWith(json.jawaban.split` `[1])) >= threshold) m.reply(`*Dikit Lagi!*`)
    else await this.sendButton(m.chat, `*Salah!*`.trim(), '', 'NYERAH', 'nyerah')
    //}
    return !0
}
handler.exp = 0

module.exports = handler
