let fetch = require('node-fetch')
let handler = async function (m, { text, usedPrefix, command }) {
  if (!text) throw `Contoh:\n${usedPrefix + command} apa itu javascript?`
  let res = await fetch(global.API('pencarikode', '/api/brainly', { search: text }, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  m.reply(json.data.map(v => `*Pertanyaan:* ${v.pertanyaan}\n*Jawaban:* ${v.jawaban}`).join('\n────────\n'))
}
handler.help = ['brainly <soal>']
handler.tags = ['internet']

handler.command = /^brainly$/i

module.exports = handler
