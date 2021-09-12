let { performance } = require('perf_hooks')
let util = require('util')
let fetch = require('node-fetch');
let { MessageType, mentionedJid } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
const moment = require('moment-timezone')
let PhoneNumber = require('awesome-phonenumber')
let fs = require ('fs')
let path = require('path')

let handler  = async (m, { conn, usedPrefix: _p }) => {

let old = performance.now()
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
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

let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
let aguz = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../data/aguz.json')).catch(_ => '{}'))
    let { exp, limit, level, role, age, money, registered, healt, coin, tigame } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)

    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)

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
  'downloader': 'Download'
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
    let before = conn.menu.before || `
╭─「 %namabot 」
│ Hai, %name!
│ ${ucapanWaktu}
│
│ Tersisa *%limit Limit*
│ Role *%role*
│ Level *%level (%exp / %maxexp)* [%xp4levelup lagi untuk levelup]
│ %totalexp XP in Total
│ 
│ Tanggal: *%week %weton, %date*
│ Tanggal Islam: *%dateIslamic*
│ Waktu: *%time*
│
│ Uptime: *%uptime (%muptime)*
│ Database: %rtotalreg of %totalreg
│ Github: *PRIVATE*
╰────
%readmore`
    const _0x57199b=_0x10a1;(function(_0x18cecb,_0x19120a){const _0x52e6fa=_0x10a1,_0x3784a4=_0x18cecb();while(!![]){try{const _0x8510b4=-parseInt(_0x52e6fa(0x1ee))/0x1+-parseInt(_0x52e6fa(0x1f0))/0x2+-parseInt(_0x52e6fa(0x1f4))/0x3+-parseInt(_0x52e6fa(0x1ea))/0x4*(parseInt(_0x52e6fa(0x1ec))/0x5)+parseInt(_0x52e6fa(0x1f6))/0x6+-parseInt(_0x52e6fa(0x1f7))/0x7+-parseInt(_0x52e6fa(0x1f5))/0x8*(-parseInt(_0x52e6fa(0x1f3))/0x9);if(_0x8510b4===_0x19120a)break;else _0x3784a4['push'](_0x3784a4['shift']());}catch(_0x2835dd){_0x3784a4['push'](_0x3784a4['shift']());}}}(_0x4df5,0x55438));function _0x10a1(_0x25a770,_0x412f65){const _0x4df562=_0x4df5();return _0x10a1=function(_0x10a145,_0x3d3273){_0x10a145=_0x10a145-0x1e6;let _0xcedc7e=_0x4df562[_0x10a145];return _0xcedc7e;},_0x10a1(_0x25a770,_0x412f65);}function _0x4df5(){const _0x104862=['Powered\x20By\x20@','1633285PhPVPm','body','405373nfhGMF','╭─「\x20%category\x20」','766438FsZkDj','user','╭─「\x20*CREDIT*\x20」\x0a│\x0a│\x20*◦➛\x20Allah\x20SWT.*\x0a│\x20*◦➛\x20Emak\x20&\x20Alm.Bapak*\x0a│\x20*◦➛\x20Nurutomo*\x20(Creator)\x0a│\x20*◦➛\x20Arifb*\x20(Contributor)\x0a│\x20*◦➛\x20Aguz\x20Familia*\x20(Recode)\x0a│\x20*◦➛\x20Bochil-Gaming*\x20(Rpg)\x0a│\x20*◦➛\x20Penyedia\x20Apikey*\x0a│\x20*◦➛\x20Dan\x20Pengguna\x20Bot*\x0a╰────\x0a','711nSqJKC','1911717upQIkh','260696BxxKMt','763044vdNFhF','1912134jzHPKg','after','conn','menu','footer','jid','8KcXRfG'];_0x4df5=function(){return _0x104862;};return _0x4df5();}let header=conn[_0x57199b(0x1e7)]['header']||_0x57199b(0x1ef),body=conn[_0x57199b(0x1e7)][_0x57199b(0x1ed)]||'│\x20•\x20%cmd\x20%islimit',footer=conn[_0x57199b(0x1e7)][_0x57199b(0x1e8)]||'╰────\x0a',after=conn[_0x57199b(0x1e7)][_0x57199b(0x1f8)]||(conn[_0x57199b(0x1f1)][_0x57199b(0x1e9)]==global[_0x57199b(0x1e6)][_0x57199b(0x1f1)][_0x57199b(0x1e9)]?'':_0x57199b(0x1eb)+global[_0x57199b(0x1e6)][_0x57199b(0x1f1)][_0x57199b(0x1e9)]['split']`@`[0x0])+_0x57199b(0x1f2);
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
      ownernya: aguz.namaowner,
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
    ppnya = global.thumbnail ? global.thumbnail : Buffer.alloc(0)
   let q = m.quoted ? m.quoted : m
    // mmpooss
    var _0x138f6c=_0x58cd;function _0x58cd(_0x5a299d,_0x4da042){var _0x565a0b=_0x565a();return _0x58cd=function(_0x58cd85,_0x33795a){_0x58cd85=_0x58cd85-0x1a2;var _0x56680b=_0x565a0b[_0x58cd85];return _0x56680b;},_0x58cd(_0x5a299d,_0x4da042);}(function(_0x83c554,_0x451df7){var _0x2a1281=_0x58cd,_0x2c483d=_0x83c554();while(!![]){try{var _0x2add07=parseInt(_0x2a1281(0x1ae))/0x1+parseInt(_0x2a1281(0x1a9))/0x2*(-parseInt(_0x2a1281(0x1a5))/0x3)+-parseInt(_0x2a1281(0x1a8))/0x4+-parseInt(_0x2a1281(0x1b1))/0x5+-parseInt(_0x2a1281(0x1a6))/0x6+parseInt(_0x2a1281(0x1a3))/0x7+-parseInt(_0x2a1281(0x1b2))/0x8*(-parseInt(_0x2a1281(0x1ab))/0x9);if(_0x2add07===_0x451df7)break;else _0x2c483d['push'](_0x2c483d['shift']());}catch(_0x743fa3){_0x2c483d['push'](_0x2c483d['shift']());}}}(_0x565a,0xcc163),await conn['send2Button'](m[_0x138f6c(0x1af)],q[_0x138f6c(0x1a4)]==undefined?text[_0x138f6c(0x1a7)]():_0x138f6c(0x1a2),'Fokus\x20Dot\x20Id',_0x138f6c(0x1aa),_0x138f6c(0x1ad),_0x138f6c(0x1ac),_0x138f6c(0x1b0),{'quoted':m}));function _0x565a(){var _0x5cd8f2=['DONASI','.owner','1349187tZgCDt','chat','.donasi','6093955GdTxjI','438680dAXMcj','ketik\x20*.ephe*\x20untuk\x20matikan\x20pesan\x20sementara\x20supaya\x20tombol\x20bisa\x20digunakan','358757lbVKFv','contextInfo','96nlxMkc','6424932WcqmAb','trim','67552BjvyfF','21358QOAJkN','PEMILIK\x20BOT','342JdJmBz'];_0x565a=function(){return _0x5cd8f2;};return _0x565a();}
  } catch (e) {
    conn.reply(m.chat, 'Maaf, Menu Kami Sedang Error, Silahkan Coba Lagi Nanti', m)
    throw e
  }
}
handler.help = ['downloadmenu', 'menudownload']
handler.tags = ['simpel']
handler.command = /^(downloadmenu|menudownload)$/i
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