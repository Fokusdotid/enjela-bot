let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.pintar)}”`, m)
}
handler.help = ['pintarcek']
handler.tags = ['game']
handler.command = /^(pintarcek)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.pintar = [
'Pintar Level : 4%\n\nGapunya Otak?!',
'Pintar Level : 7%\n\nSerius ya,, Lu Goblok bgt njir!',
'Pintar Level : 12%\n\nMakin lama lu goblok bgt!',
'Pintar Level : 22%\n\nMungkin otak lo isinya bokep mulu😂',
'Pintar Level : 27%\n\nKeknya gak bakal naik kelas,, berdoa aja',
'Pintar Level : 35%\n\nHarus belajar lagi deh',
'Pintar Level : 41%\n\nSemoga diberkati Kepintaran',
'Pintar Level : 48%\n\nBelajar lagi ya ayang',
'Pintar Level : 56%\n\nLu Setengah Pintar :v',
'Pintar Level : 64%\n\nCukuplah',
'Pintar Level : 71%\n\nLumayan pinter juga lu ya',
'Pintar Level : 1%\n\nAWOAKAK GOBLOG!!!',
'Pintar Level : 1%\n\nAWOAKAK GOBLOG!!!',
'Pintar Level : 1%\n\nAWOAKAK GOBLOG!!!',
'Pintar Level : 1%\n\nAWOAKAK GOBLOG!!!',
'Pintar Level : 77%\n\nGak akan Salah Kalo Giat Belajar',
'Pintar Level : 83%\n\nDijamin Lu Bakal Pinter',
'Pintar Level : 89%\n\nhmmm🤔.. Lumayan!',
'Pintar Level : 94%\n\nAARRGGHHH!!!',
'Pintar Level : 100%\n\nLU EMANG ORANG TERPINTAR YANG PERNAH GW LIAT!!!',
]