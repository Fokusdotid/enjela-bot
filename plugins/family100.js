let fs = require('fs')
let winScore = 500
async function handler(m) {
    this.game = this.game ? this.game : {}
    let id = 'family100_' + m.chat
    if (id in this.game) {
        this.sendButton(m.chat, 'Masih ada kuis yang belum terjawab di chat ini', 'Fokus Dot Id', 'NYERAH', 'surrender', { quoted: this.game[id].msg })
        throw false
    }
    let src = JSON.parse(fs.readFileSync(`./api/family.json`))
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*Soal:* ${json.soal}

Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}

+${winScore} XP tiap jawaban benar
    `.trim()
    this.game[id] = {
        id,
        msg: await this.sendButton(m.chat, caption, 'Fokus Dot Id', 'NYERAH', 'surrender'),
        ...json,
        terjawab: Array.from(json.jawaban, () => false),
        winScore,
    }
}
handler.help = ['family100']
handler.tags = ['game']
handler.command = /^family100$/i

module.exports = handler