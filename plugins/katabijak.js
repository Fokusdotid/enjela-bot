﻿const { quotes } = require('../lib/scrape')
let handler = async (m, { command, args, usedPrefix }) => {
    let er = `contoh:\n\n${usedPrefix + command} cinta

Opsi Tersedia:
• cinta
• rindu
• mimpi
• sendiri
• sabar
• kesedihan
• pernikahan
• kemerdekaan
`
    if (!args[0]) throw er
    switch (args[0].toLowerCase()) {
        case 'cinta':
        case 'rindu':
        case 'mimpi':
        case 'sendiri':
        case 'sabar':
        case 'kesedihan':
        case 'pernikahan':
        case 'kemerdekaan':
            quotes(args[0].toLowerCase()).then(res => {
                let data = JSON.stringify(res)
                let json = JSON.parse(data)
                let random = Math.floor(Math.random() * json.data.length)
                let hasil = json.data[random]
                let { author, bio, quote } = hasil
                m.reply(`“${quote}”\n\n${author} - ${bio}`)
            })
            break
        default:
            throw er
    }
}
handler.help = ['katabijak'].map(v => v + ' <opsi>')
handler.tags = ['internet']
handler.command = /^(katabijak|jagokata)$/i

module.exports = handler