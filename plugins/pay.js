let pajak = 0.02
let handler = async (m, { conn, text, usedPrefix, command }) => {
  let fail = `perintah ini buat ngasih XP ke pengguna lain\n\ncontoh:\n${usedPrefix + command} @6285157336614 10\natau balas pesan doi dengan perintah: ${usedPrefix + command} 10`
  let who
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  else who = m.chat
  if (!who) {
    conn.reply(m.chat, fail, m, { contextInfo: { mentionedJid: ['6285157336614@s.whatsapp.net'] } })
    throw false
  }
  if (typeof global.db.data.users[who] == "undefined") {
    global.db.data.users[who] = {
        healt: 100,
        level: 1,
        exp: 0,
        limit: 10,
        lastclaim: 0,
        lastngojek: 0,
        lastnebang: 0,
        lastnyampah: 0,
        lastowner: 0,
        money: 0,
        diamond: 0,
        iron: 0,
        common: 0,
        uncommon: 0,
        mythic: 0,
        legendary: 0,
        pet: 0,
        potion: 0,
        sampah: 0,
        armor: 0,
        kucing: 0,
        kucinglastclaim: 0,
        kuda: 0,
        kudalastclaim: 0,
        rubah: 0,
        rubahlastclaim: 0,
        anjing: 0,
        anjinglastclaim: 0,
        banned: false,
        warn: 0,
        warning: 0,
        call: 0,
        afk: -1,
        afkReason: '',
        anakkucing: 0,
        anakkuda: 0,
        anakrubah: 0,
        anakanjing: 0,
        makananpet: 0,
        antispam: 0,
        antispamlastclaim: 0,
        kayu: 0,
        batu: 0,
        string: 0,
        sword: 0,
        sworddurability: 0,
        pickaxe: 0,
        pickaxedurability: 0,
        fishingrod: 0,
        fishingroddurability: 0,
        lastadventure: 0,
        lastfishing: 0,
        lastdungeon: 0,
        lastduel: 0,
        lastmining: 0,
        lasthunt: 0,
        lastweekly: 0,
        lastmonthly: 0,
        registered: false,
        name: this.getName(m.sender),
        age: -1,
        regTime: -1,
        regTime: -1,
        role: 'Warrior',
        autolevelup: true,
        pc: 0,
        // Mancing cuk
        as: 0,
        paus: 0,
        kepiting: 0,
        gurita: 0,
        cumi: 0,
        buntal: 0,
        dory: 0,
        lumba: 0,
        lobster: 0,
        hiu: 0,
        udang: 0,
        ikan: 0,
        orca: 0,
    }
  }
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) {
    conn.reply(m.chat, fail, m, { contextInfo: { mentionedJid: ['6285157336614@s.whatsapp.net'] } })
    throw false
  }
  if (isNaN(txt)) throw 'Hanya angka'
  let xp = parseInt(txt)
  let exp = xp
  let pjk = Math.ceil(xp * pajak)
  exp += pjk
  if (exp < 1) throw 'minimal 1'
  let users = global.db.data.users
  if (exp > users[m.sender].exp) throw 'Exp tidak mencukupi untuk mentransfer, ada pajaknya juga'
  users[m.sender].exp -= exp
  users[who].exp += xp

  m.reply(`(${-xp} XP) + (${-pjk} XP (Pajak 2%)) = ( ${-exp} XP)`)
  conn.fakeReply(m.chat, `+${xp} XP`, who, m.text)
}
handler.help = ['pay @user <jumlah>']
handler.tags = ['xp']
handler.command = /^pay$/

module.exports = handler