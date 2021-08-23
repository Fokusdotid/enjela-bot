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

let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))

let { exp, limit, level, registered } = global.db.data.users[m.sender] //  ini let level,exp,money,limit, dll. tambahin aja  kalo mau dibuat ada umurnya atau apa gitu

    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender) // ini nama user

   let q = m.quoted ? m.quoted : m // ini sih gk guna, tapi gw tambahin aja biar suatu saat nnti psti lu butuh ini

const jam = moment.tz('Asia/Jakarta').format('HH') // ini jam online

 var ucapanWaktu = 'Selamat Pagi 🌄' // ini ucapan



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

conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `*${ucapanWaktu} ${name}*\nSaya ENJELA\n\nMenu Ini Khusus ADMIN Ya Kak\nPilih Menu Di Bawah Yaa\nDan Jangan Lupa Baca Dibawah ini\n\nSpam = Banned\nTelp = Blok\n\n\nDonasinya Ke Sini Kak :)\nhttp://wa.me/6282324892737\n\nAtau bisa juga dengan ketik *.donasi*\n\n`,
                        "description": "*©FOKUSDOTID*",
                        "buttonText": "Klik Disini Untuk Liat List",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": "GROUP OPEN/BUKA",
                                        "description": "",
                                        "rowId": ".group buka"
                                    },{
                                        "title": "GROUP CLOSE/TUTUP",
                                        "description": "",
                                        "rowId": ".group close"
                                    },{
                                        "title": "ANTILINK GROUP NYALA",
                                        "description": "",
                                        "rowId": ".on antilink"                 
                                    },{
                                    	"title": "*ANTILINK GROUP MATI*",
                                        "description": "",
                                        "rowId": ".off antilink"                 
                                    },{
                                        "title": "*WELLCOME NYALA*",
                                        "description": "",
                                        "rowId": ".on welcome"                 
                                    },{
                                        "title": "*WELLCOME MATI*",
                                        "description": "",
                                        "rowId": ".off welcome"                 
                                    },{    
                                        "title": "*ANTITROLI GROUP NYALA*",
                                        "description": "",
                                        "rowId": ".on antitroli"                 
                                    },{
                                        "title": "*ANTITROLI GROUP MATI*",
                                        "description": "",
                                        "rowId": ".off antitroli"
 			                        },{
                                        "title": "*PESAN SEMENTARA NYALA*",
                                        "description": "",
                                        "rowId": ".ephe on"
				                    },{
                                        "title": "*PESAN SEMENTARA MATI*",
                                        "description": "",
                                        "rowId": ".ephe off"
                                    },{
                                        "title": "*PESAN ANTI HAPUS NYALA*",
                                        "description": "",
                                        "rowId": ".on antidelete"
                                    },{
                                        "title": "*PESAN ANTI HAPUS MATI*",
                                        "description": "",
                                        "rowId": ".off antidelete"
                                    },{
                                        "title": "*DETECT ADMIN GROUP NYALA*",
                                        "description": "",
                                        "rowId": ".on detect"                 
                                    },{
                                        "title": "*DETECT ADMIN GROUP MATI*",
                                        "description": "",
                                        "rowId": ".off detect"
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
handler.help = ['setgc']
handler.tags = ['group']
handler.command = ['setgc']
handler.register = true
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)



function clockString(ms) {

  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')

}