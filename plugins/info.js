let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.db.data.users).length
  let old = Math.round(performance.now())
  await m.reply('wait Kakak!!')
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
╭─ꕥ *INGFO* ꕥ─✾
│•> *Nama:* ENJELA-BOT
│•> *Owner:* Fokus Dot Id
│•> *Wea:* wa.me/6282324892737
│•> *Prefix:* ' ${usedPrefix} '
│•> *Menu:* ${usedPrefix}menu
│•> *Ping:* ${neww - old} *ms*
│•> *Total user:* ${totalreg} *user*
│•> *Uptime:* ${uptime}
╰─────────────

╭─ꕥ *DONASI* ꕥ─✾
│•> Dana : 081320170984
│•> Pulsa: 081320170984
│ *Note :* Disarankan Ke Dana
│ *Mau Donasi?*
│ *Hubungi owner yah :v*
╰─────────────

✾─────────ꕥ *RULES* ꕥ─────────✾
➤ Tolong Gunakan Delay Jangan Spam Saat Menggunakan Bot
➤ Call/VC Bot Auto Block.
➤ Chat Bot? Sewajarnya
➤ Mau Menambahkan Playlist Musik Di Menu Tebaklagu? https://open.spotify.com/playlist/3Rpt0QWIdS8mKKrLRg2lKM?si=XvI7g8EVQ0aV0M95jGhm1w&utm_source=copy-link&dl_branch=1
➤ Jangan Call/VC Bot Kalau Tidak aktif.
➤ Bot tidak aktif 24 jam, jadi tergantung kalau ownernya lagi ada waktu botnya juga on.
➤ Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
➤ Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
➤ Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
➤ Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!
✾───────ꕥ *ENJELA-BOT* ꕥ───────✾
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info(bot)?|rules)$/i

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
