const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*who/i.test(m.quoted.contentText)) return !0
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    if (!(id in conn.siapakahaku)) return m.reply('Soal itu telah berakhir')
    if (/^(me)?nyerah$/i.test(m.text)) {
        await this.sendButton(m.chat, `Jawabannya adalah ${JSON.parse(JSON.stringify(conn.siapakahaku[id][1].result.jawaban))}`.trim(), 'kok nyerah :v', 'SIAPAKAH AKU', '.siapakahaku').then(() => { delete conn.siapakahaku[id] })
    }
    //if (m.quoted.id == conn.siapakahaku[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.siapakahaku[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
    if (/^.*who$/i.test(m.text)) return !0
    if (m.text.toLowerCase() == json.result.jawaban.toLowerCase()) {
        global.db.data.users[m.sender].exp += conn.siapakahaku[id][2]
        await this.sendButton(m.chat, `*Benar!* +${conn.siapakahaku[id][2]} XP`.trim(), '', 'SIAPAKAH AKU', '.siapakahaku')
        //m.reply(`*Benar!*\n+${conn.siapakahaku[id][2]}XP Buat Kamu`)
        clearTimeout(conn.siapakahaku[id][3])
        delete conn.siapakahaku[id]
    } else if (similarity(m.text.toLowerCase().endsWith(json.result.jawaban.split` `[1])) >= threshold) m.reply(`*Dikit Lagi!*`)
    else await this.sendButton(m.chat, `*Salah!*`.trim(), '', 'NYERAH', 'nyerah')
    //}
    return !0
}
handler.exp = 0

module.exports = handler
