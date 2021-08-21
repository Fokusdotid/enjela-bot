let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "HALO KAK\nSaya ENJELA\n\nMenu Ini Khusus ADMIN Ya Kak\nPilih Menu Di Bawah Yaa\nDan Jangan Lupa Baca Dibawah ini\n\nSpam = Banned\nTelp = Blok\n\n\nDonasinya Ke Sini Kak :)\nhttp://wa.me/6282324892737\n\nAtau bisa juga dengan ketik *.donasi*\n\n",
                        "description": "*©FOKUSDOTID*",
                        "buttonText": "Klik Disini Untuk Liat List",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `*GROUP OPEN/BUKA*`,
                                        "description": "\nGroup Saya Buka",
                                        "rowId": ".group buka"
                                    },{
                                        "title": "*GROUP CLOSE/TUTUP*",
                                        "description": "\nGroup Saya Tutup",
                                        "rowId": ".group close"
                                    },{
                                        "title": "*ANTILINK GROUP NYALA*",
                                        "description": "\nNyalakan Antilink Group",
                                        "rowId": ".on antilink"                 
                                    },{
                                    	"title": "*ANTILINK GROUP MATI*",
                                        "description": "\nMatikan Antilink Group",
                                        "rowId": ".off antilink"                 
                                    },{
                                        "title": "*WELLCOME NYALA*",
                                        "description": "\nNyalakan Welcome Group",
                                        "rowId": ".on welcome"                 
                                    },{
                                        "title": "*ANTITROLI GROUP NYALA*",
                                        "description": "\nNyalakan AntiTroli Di Group Ini",
                                        "rowId": ".on antitroli"                 
                                    },{
                                        "title": "*ANTITROLI GROUP MATI*",
                                        "description": "\nMatikan AntiTroli Di Group Ini",
                                        "rowId": ".off antitroli"
 			            },{
                                        "title": "*PESAN SEMENTARA NYALA*",
                                        "description": "\nNyalakan Pesan Sementara",
                                        "rowId": ".ephe on"
				    },{
                                        "title": "*PESAN SEMENTARA MATI*",
                                        "description": "\nMatikan Pesan Sementara",
                                        "rowId": ".ephe off"
                                    },{
                                        "title": "*PESAN ANTI HAPUS NYALA*",
                                        "description": "\nNyalakan Pesan Anti Hapus",
                                        "rowId": ".on antidelete"
                                    },{
                                        "title": "*PESAN ANTI HAPUS MATI*",
                                        "description": "\nMatikan Pesan Anti Hapus",
                                        "rowId": ".off antidelete"
                                    },{
                                        "title": "*DETECT ADMIN GROUP NYALA*",
                                        "description": "\nNyalakan Fitur Deteksi Jadi Admin Group",
                                        "rowId": ".on detect"                 
                                    },{
                                        "title": "*DETECT ADMIN GROUP MATI*",
                                        "description": "\nMatikan Fitur Deteksi Jadi Admin Group",
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
handler.help = ['setgc']
handler.tags = ['group']
handler.command = ['setgc']
handler.register = true
module.exports = handler
