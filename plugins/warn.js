let handler = async (m, { conn, args}) => {
    if (args.length > 0) {
        let mention = args[0].replace(/[@.+-]/g, '').replace(' ', '')
        let ban = (mention + '@s.whatsapp.net')
        let warn = global.db.data.users[ban].warn
        if (warn < 3) {
            global.db.data.users[ban].warn += 1
            conn.reply(m.chat, `berhasil Warn`, m)
            m.reply('*Kamu di warn oleh owner atau moderator, dan sekarang kamu punya ' + (warn + 1) + '.Ingat Jika kamu mendapat warn 4 kali kamu akan otomatis ke banned*', ban)
        } else if (warn == 3) {
            global.db.data.users[ban].Banneduser = true
            global.db.data.users[ban].warn = 0
            conn.reply(m.chat, '*Dia sudah kebanned, karena mendapatkan 4 warn*', m)
             m.reply('*Kamu ke banned karena telah mendapatkan 4 kali warn*', ban)
        }
    } else conn.reply(m.chat, 'Siapa yang mau di Warn mas Agus?', m)
}
handler.help = ['warn @mention']
handler.tags = ['owner']
handler.command = /^warn$/i
handler.owner = true

module.exports = handler
