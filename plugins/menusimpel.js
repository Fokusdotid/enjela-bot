let { performance } = require('perf_hooks')
let util = require('util')
let fetch = require('node-fetch');
let { MessageType, mentionedJid } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
const moment = require('moment-timezone')
let PhoneNumber = require('awesome-phonenumber')
let fs = require ('fs')
let path = require('path')

let handler = async (m, { conn, usedPrefix: _p }) => {

let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
let aguz = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../data/aguz.json')).catch(_ => '{}'))

let namabot = aguz.namabot
let namaowner = aguz.namaowner

let { exp, limit, level, role, age, money, registered, healt, coin, tigame } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)

    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)

    const jam = moment.tz('Asia/Jakarta').format('HH')

 var ucapanWaktu = 'Selamat Pagi 🌄'
                if (jam >= '03' && jam <= '10') {
                ucapanWaktu = 'Selamat Pagi 🌄'
                } else if (jam >= '10' && jam <= '13') {
                ucapanWaktu = 'Selamat Siang ☀️'
                } else if (jam >= '13' && jam <= '18') {
                ucapanWaktu = 'Selamat Sore 🌅'
                } else if (jam >= '18' && jam <= '23') {
                ucapanWaktu = 'Selamat Malam 🌙'
                } else {
                ucapanWaktu = 'Selamat Malam 🌙'
                }

    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
        let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let battery = ['100','99','98','97','96','95','94','93','92','91','90','89','88','87','86','85','84','83','82','81','80','79','78','77','76','75','74','73','72','71','70','69','68','67','66','65','64','63','62','61','60','59','58','57','56','55','54','53','52','51','50','49','48','47','46','45','44','43','42','41','40','39','38','37','36','35','34','33','32','31','30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9','8','7','6','5','4','3','2','1'][Math.floor(((d * 1) + gmt) / 8460) % 100]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    const dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let totalgc = Object.keys(global.db.data.users).length
    let rtotalreg = 0
    try {
    rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    } catch {
    }

    let tags = {
  'main': 'Main',
  'about': 'About',
  'rpg': 'RPG',
  'game': 'Game',
  'absen': 'Absen',
  'xp': 'Exp',
  'sticker': 'Sticker',
  'audio': 'Audio',
  'kerang': 'Kerang',
  'quotes': 'Quotes',
  'quran': 'Ngaji',
  'group': 'Group',
  'premium': 'Premium',
  'database': 'Database',
  'internet': 'Internet',
  'anonymous': 'Anonymous',
  'nulis': 'Nulis',
  'downloader': 'Download',
  'tools': 'Tools',
  'fun': 'Funn',
  'vote': 'Voting',
  'jadibot': 'Jadi Bot',
  'owner': 'Owner',
  'nsfw': 'NSFW',
  'host': 'Host',
  'advanced': 'Entah',
  'info': 'Ingfo',
  '': 'Sw Bot',
  'image': 'Image',
  'spammer': 'Spamm',
  'maker': 'Maker',
}
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })

    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }

    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `╭─「 ${namabot} 」
│ ${ucapanWaktu} ${name}!
│ 
│ Tersisa *${limit} Limit*
│ Rank *${role}*
│ Level *${level} (${exp - min} / ${xp})* [${max - exp} lagi untuk levelup]
│ ${exp} XP in Total
│ 
│ Tanggal: *${week} ${weton}, ${date}*
│ Tanggal Islam: *${dateIslamic}*
│ Waktu: *${time}*
│
│ Uptime: *${uptime} (${muptime})*
│ Database: ${rtotalreg} of ${totalreg}
│ Github: *PRIVATE*
│ 
│ Owner BOT: *${namaowner}*
`

    let header = conn.menu.header || ` `
    let body = conn.menu.body || ' '
    let footer = conn.menu.footer || ' '
    let after = conn.menu.after || '╰────'
let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      namabot: aguz.namabot,
      namaowner: aguz.owner,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      age, level, limit, name, weton, week, date, time, totalreg, totalgc, rtotalreg, role, healt, money, battery, coin, tigame, 
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => ''+replace[name])
   let q = m.quoted ? m.quoted : m

conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `${before}`,
                        "description": `${after}`,
                        "buttonText": "Pilih Disini Kakk!!",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": 'Semua Menu',
                                        "description": "",
                                        "rowId": ".allmenu"
                                    },{
                                        "title": 'Group Menu',
                                        "description": "",
                                        "rowId": ".groupmenu"
                                    },{
                                        "title": "Owner Menu",
                                        "description": "",
                                        "rowId": ".ownermenu"
                                    },{    
                                        "title": "Game Menu",
                                        "description": "",
                                        "rowId": ".gamemenu"
                                    },{
                                        "title": "Exp Menu",
                                        "description": "",
                                        "rowId": ".xpmenu"                 
                                    },{
                                        "title": "Sticker Menu",
                                        "description": "",
                                        "rowId": ".stikermenu"                 
                                    },{
                                    	"title": "Download Menu",
                                        "description": "",
                                        "rowId": ".downloadmenu"                 
                                    },{
                                        "title": "Internet Menu",
                                        "description": "",
                                        "rowId": ".internetmenu"                 
                                    },{
                                        "title": "Audio Menu",
                                        "description": "",
                                        "rowId": ".audiomenu"                 
                                    },{
                                        "title": "Kerang Menu",
                                        "description": "",
                                        "rowId": ".kerangmenu"
 			                              },{
                                        "title": "Quotes Menu",
                                        "description": "",
                                        "rowId": ".menuquotes"                 
                                    },{
                                        "title": "Premium Menu",
                                        "description": "",
                                        "rowId": ".premiummenu"
                                    },{
                                        "title": "Database Menu",
                                        "description": "",
                                        "rowId": ".databasemenu"
                                    },{
                                        "title": "NSFW Menu",
                                        "description": "",
                                        "rowId": ".nsfwmenu"               
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 5

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)



function clockString(ms) {

  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')

}