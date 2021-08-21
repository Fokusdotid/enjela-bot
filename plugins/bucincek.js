let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.buchin)}”`, m)
}
handler.help = ['bucincek']
handler.tags = ['game']
handler.command = /^(bucincek)$/i
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

global.buchin = [
'Bucin Level : 4%\n\nWARASS KAN LU?!',
'Bucin Level : 7%\n\nSerius ya,, Lu ampir mirip kayak Monyet!',
'Bucin Level : 12%\n\nMakin lama denger lo ngebucin gw bisa muntah!',
'Bucin Level : 22%\n\nMungkin karna lo ngebucin tentang maksiat😂',
'Bucin Level : 27%\n\nKeknya bakal dikacangin jodoh lu,, berdoa aja',
'Bucin Level : 35%\n\nYang sabar ya ayang',
'Bucin Level : 48%\n\nDijamin lo pasti sering di kacangin',
'Bucin Level : 56%\n\nLu Setengah Bucin :v',
'Bucin Level : 64%\n\nCukuplah',
'Bucin Level : 71%\n\nLumayan bucin juga lu ya',
'Bucin Level : 1%\n\nAWOAKAK!!!',
'Bucin Level : 1%\n\nAWOAKAK!!!',
'Bucin Level : 1%\n\nAWOAKAK!!!',
'Bucin Level : 1%\n\nAWOAKAK!!!',
'Bucin Level : 77%\n\nLumayanlah!!',
'Bucin Level : 83%\n\nDijamin bucin lu gak akan ngecewain orang!',
'Bucin Level : 89%\n\nOrang² pasti auto baper klo sama lo!',
'Bucin Level : 94%\n\nAARRGGHHH BIKIN BAPERRRR!!!',
'Bucin Level : 100%\n\nLU EMANG ORANG TERBUCIN YANG PERNAH GW LIAT!!!',
]