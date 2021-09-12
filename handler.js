let util = require('util')
let fetch = require('node-fetch')
let simple = require('./lib/simple')
const uploadImage = require('./lib/uploadImage')
let { MessageType } = require('@adiwajshing/baileys')

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))
module.exports = {
  async handler(chatUpdate) {
    // console.log(chatUpdate)
    if (!chatUpdate.hasNewMessage) return
    if (!chatUpdate.messages && !chatUpdate.count) return
    let m = chatUpdate.messages.all()[0]
    try {
      simple.smsg(this, m)
      switch (m.mtype) {
        case MessageType.image:
        case MessageType.video:
        case MessageType.audio:
          if (!m.key.fromMe) await delay(1000)
          if (!m.msg.url) await this.updateMediaMessage(m)
          break
      }
      m.exp = 0
      m.limit = false
      try {
        let user = global.db.data.users[m.sender]
        if (typeof user !== 'object') global.db.data.users[m.sender] = {}
        if (user) {
          if (!isNumber(user.healt)) user.healt = 0
          if (!isNumber(user.level)) user.level = 1
          if (!isNumber(user.exp)) user.exp = 0
          if (!isNumber(user.limit)) user.limit = 10
          if (!isNumber(user.lastclaim)) user.lastclaim = 0
          if (!isNumber(user.lastclaim)) user.lastclaimm = 0  
          if (!isNumber(user.lastngojek)) user.lastngojek = 0
          if (!isNumber(user.lastnebang)) user.lastnebang = 0
          if (!isNumber(user.lastnyampah)) user.lastnyampah = 0
          if (!isNumber(user.lastowner)) user.lastowner = 0
          if (!isNumber(user.money)) user.money = 0
          if (!isNumber(user.diamond)) user.diamond = 0
          if (!isNumber(user.iron)) user.iron = 0
          if (!isNumber(user.common)) user.common = 0
          if (!isNumber(user.uncommon)) user.uncommon = 0
          if (!isNumber(user.mythic)) user.mythic = 0
          if (!isNumber(user.legendary)) user.legendary = 0
          if (!isNumber(user.pet)) user.pet = 0
          if (!isNumber(user.potion)) user.potion = 0
          if (!isNumber(user.sampah)) user.sampah = 0
          if (!isNumber(user.armor)) user.armor = 0
          if (!isNumber(user.kucing)) user.kucing = 0
          if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
          if (!isNumber(user.kuda)) user.kuda = 0
          if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
          if (!isNumber(user.rubah)) user.rubah = 0
          if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
          if (!isNumber(user.anjing)) user.anjing = 0
          if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0

          if (!('banned' in user)) user.banned = false
          if (!isNumber(user.warn)) user.warn = 0
          if (!isNumber(user.warning)) user.warning = 0
          if (!isNumber(user.call)) user.call = 0  

          if (!isNumber(user.afk)) user.afk = -1
          if (!('afkReason' in user)) user.afkReason = ''  
          // RPG
          if (!isNumber(user.anakkucing)) user.anakkucing = 0
          if (!isNumber(user.anakkuda)) user.anakkuda = 0
          if (!isNumber(user.anakrubah)) user.anakrubah = 0
          if (!isNumber(user.anakanjing)) user.anakanjing = 0
          if (!isNumber(user.makananpet)) user.makananpet = 0
          if (!isNumber(user.antispam)) user.antispam = 0
          if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0
          if (!isNumber(user.kayu)) user.kayu = 0
          if (!isNumber(user.batu)) user.batu = 0
          if (!isNumber(user.string)) user.string = 0
          if (!isNumber(user.sword)) user.sword = 0
          if (!isNumber(user.sworddurability)) user.sworddurability = 0
          if (!isNumber(user.pickaxe)) user.pickaxe = 0
          if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
          if (!isNumber(user.fishingrod)) user.fishingrod = 0
          if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
          if (!isNumber(user.lastadventure)) user.lastadventure = 0
          if (!isNumber(user.lastfishing)) user.lastfishing = 0
          if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
          if (!isNumber(user.lastduel)) user.lastduel = 0
          if (!isNumber(user.lastmining)) user.lastmining = 0
          if (!isNumber(user.lasthunt)) user.lasthunt = 0
          if (!isNumber(user.lastweekly)) user.lastweekly = 0
          if (!isNumber(user.lastmonthly)) user.lastmontly = 0  
          if (!('registered' in user)) user.registered = false
          if (!user.registered) {
            if (!('name' in user)) user.name = this.getName(m.sender)
            if (!isNumber(user.age)) user.age = -1
            if (!isNumber(user.regTime)) user.regTime = -1
          }
          if (!user.role) user.role = 'Warrior'
          if (!('autolevelup' in user)) user.autolevelup = true
          if (!isNumber(user.pc)) user.pc = 0
          //mancing
          if (!isNumber(user.as)) user.as = 0
          if (!isNumber(user.paus)) user.paus = 0
          if (!isNumber(user.kepiting)) user.kepiting = 0
          if (!isNumber(user.gurita)) user.gurita = 0
          if (!isNumber(user.cumi)) user.cumi= 0
          if (!isNumber(user.buntal)) user.buntal = 0
          if (!isNumber(user.dory)) user.dory = 0
          if (!isNumber(user.lumba)) user.lumba = 0
          if (!isNumber(user.lobster)) user.lobster = 0
          if (!isNumber(user.hiu)) user.hiu = 0
          if (!isNumber(user.udang)) user.udang = 0
          if (!isNumber(user.ikan)) user.ikan = 0
          if (!isNumber(user.orca)) user.orca = 0
        } else global.db.data.users[m.sender] = {
          healt: 100,
          level: 1,
          exp: 0,
          limit: 10,
          lastclaim: 0,
          lastclaimm: 0,
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

        let chat = global.db.data.chats[m.chat]
        if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
        if (chat) {
          if (!('isBanned' in chat)) chat.isBanned = false
          if (!('welcome' in chat)) chat.welcome = false
          if (!('detect' in chat)) chat.detect = true
          if (!('sWelcome' in chat)) chat.sWelcome = ''
          if (!('sBye' in chat)) chat.sBye = ''
          if (!('sPromote' in chat)) chat.sPromote = ''
          if (!('sDemote' in chat)) chat.sDemote = ''
          if (!('descUpdate' in chat)) chat.descUpdate = true
          if (!('stiker' in chat)) chat.stiker = false
          if (!('delete' in chat)) chat.delete = false
          if (!('antiLink' in chat)) chat.antiLink = true
          if (!isNumber(chat.expired)) chat.expired = 0
          if (!('antiBadword' in chat)) chat.antiBadword = true
          if (!('antispam' in chat)) chat.antispam = true
          if (!('antitroli' in chat)) chat.antitroli = false
          if (!('antivirtex' in chat)) chat.antivirtex = false
          if (!('nsfw' in chat)) chat.nsfw = false
        } else global.db.data.chats[m.chat] = {
          isBanned: false,
          welcome: false,
          detect: true,
          sWelcome: '',
          sBye: '',
          sPromote: '',
          sDemote: '',
          descUpdate: true,
          stiker: false,
          delete: false,
          antiLink: true,
          expired: 0,
          antiBadword: true,
          antispam: true,
          antitroli: false,
          antivirtex: false,
          nsfw: false,
        }
      let settings = global.db.data.settings[this.user.jid]
        if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
        if (settings) {
          if (!'anon' in settings) settings.anon = true
          if (!'anticall' in settings) settings.anticall = true
          if (!'backup' in settings) settings.backup = false
          if (!isNumber(settings.backupDB)) settings.backupDB = 0
          if (!'groupOnly' in settings) settings.groupOnly = false
          if (!'jadibot' in settings) settings.groupOnly = false
          if (!isNumber(settings.status)) settings.status = 0
          if (!'clear' in settings) settings.clear = false
          if (!isNumber(settings.cleartime)) settings.cleartime = 0 
        } else global.db.data.settings = {
          anon: true,
          anticall: true,
          backup: false,
          backupDB: 0,
          groupOnly: false,
          jadibot: false,
          status: 0,
          clear: false,
          cleartime: 0,
        }  
      } catch (e) {
        console.error(e)
      }
      if (opts['nyimak']) return
      if (!m.fromMe && opts['self']) return
      if (m.chat == 'status@broadcast') return
      if (typeof m.text !== 'string') m.text = ''
      conn.chatRead(m.chat)
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!plugin.all) continue
        if (typeof plugin.all !== 'function') continue
        try {
          await plugin.all.call(this, m, chatUpdate)
        } catch (e) {
          if (typeof e === 'string') continue
          console.error(e)
        }
      }
      if (m.isBaileys) return
      m.exp += Math.ceil(Math.random() * 10)

      let usedPrefix
      let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

      let isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isOwner = isROwner || m.fromMe
      let isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let groupMetadata = m.isGroup ? this.chats.get(m.chat).metadata || await this.groupMetadata(m.chat) : {} || {}
      let participants = m.isGroup ? groupMetadata.participants : [] || []
      let user = m.isGroup ? participants.find(u => u.jid == m.sender) : {} // User Data
      let bot = m.isGroup ? participants.find(u => u.jid == this.user.jid) : {} // Your Data
      let isAdmin = user.isAdmin || user.isSuperAdmin || false // Is User Admin?
      let isBotAdmin = bot.isAdmin || bot.isSuperAdmin || false // Are you Admin?
      let DevMode = (global.DeveloperMode.toLowerCase() == 'true') || false
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) continue
        const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
        let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
        let match = (_prefix instanceof RegExp ? // RegExp Mode?
          [[_prefix.exec(m.text), _prefix]] :
          Array.isArray(_prefix) ? // Array?
            _prefix.map(p => {
              let re = p instanceof RegExp ? // RegExp in Array?
                p :
                new RegExp(str2Regex(p))
              return [re.exec(m.text), re]
            }) :
            typeof _prefix === 'string' ? // String?
              [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
              [[[], new RegExp]]
        ).find(p => p[1])
        if (typeof plugin.before === 'function') if (await plugin.before.call(this, m, {
          match,
          conn: this,
          participants,
          groupMetadata,
          user,
          bot,
          isROwner,
          isOwner,
          isAdmin,
          isBotAdmin,
          isPrems,
          chatUpdate,
        })) continue
        if (typeof plugin !== 'function') continue
        if ((usedPrefix = (match[0] || '')[0])) {
          let noPrefix = m.text.replace(usedPrefix, '')
          let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
          args = args || []
          let _args = noPrefix.trim().split` `.slice(1)
          let text = _args.join` `
          command = (command || '').toLowerCase()
          let fail = plugin.fail || global.dfail // When failed
          let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
            plugin.command.test(command) :
            Array.isArray(plugin.command) ? // Array?
              plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                cmd.test(command) :
                cmd === command
              ) :
              typeof plugin.command === 'string' ? // String?
                plugin.command === command :
                false

          if (!isAccept) continue
          m.plugin = name
          if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
            let chat = global.db.data.chats[m.chat]
            let user = global.db.data.users[m.sender]
            if (!['unbanchat.js', 'profile.js'].includes(name) && chat && chat.isBanned && !isPrems) return // Kecuali ini, bisa digunakan
            if (!['unbanchat.js', 'profile.js'].includes(name) && user && user.banned) return
          }
          if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.rowner && !isROwner) { // Real Owner
            fail('rowner', m, this)
            continue
          }
          if (plugin.owner && !isOwner) { // Number Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.mods && !isMods) { // Moderator
            fail('mods', m, this)
            continue
          }
          if (plugin.premium && !isPrems) { // Premium
            fail('premium', m, this)
            continue
          }
          if (plugin.group && !m.isGroup) { // Group Only
            fail('group', m, this)
            continue
          } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
            fail('botAdmin', m, this)
            continue
          } else if (plugin.admin && !isAdmin) { // User Admin
            fail('admin', m, this)
            continue
          }
          if (plugin.private && m.isGroup) { // Private Chat Only
            fail('private', m, this)
            continue
          }
          if (plugin.register == true && _user.registered == false) { // Butuh daftar?
            fail('unreg', m, this)
            continue
          }
          if (plugin.nsfw && !global.db.data.chats.nsfw) { // Nsfw
            fail('nsfw', m, this)
            continue
          }

          m.isCommand = true
          let xp = 'exp' in plugin ? parseInt(plugin.exp) : 1 // Pendapatkan XP per Command
          if (xp > 200) m.reply('Ngecit -_-') // Hehehe
          else m.exp += xp
          if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
            this.reply(m.chat, `Limit kamu habis, silahkan beli melalui *${usedPrefix}buy*\natau *${usedPrefix}shop buy limit 1*\n_ingin tanpa limit?_\n\n*Jadilah user premium!!*`, m)
            continue // Limit habis
          }
          if (plugin.level > _user.level) {
            this.reply(m.chat, `diperlukan level ${plugin.level} untuk menggunakan perintah ini. Level kamu ${_user.level}`, m)
            continue // Jika levelnya belum tercapai
          }
          let extra = {
            match,
            usedPrefix,
            noPrefix,
            _args,
            args,
            command,
            text,
            conn: this,
            participants,
            groupMetadata,
            user,
            bot,
            isROwner,
            isOwner,
            isAdmin,
            isBotAdmin,
            isPrems,
            chatUpdate,
            DevMode,
          }
          try {
            await plugin.call(this, m, extra)
            if (!isPrems) m.limit = m.limit || plugin.limit || false
          } catch (e) {
            // Error occured
            m.error = e
            console.error(e)
            if (e) {
              let text = util.format(e)
              for (let key of Object.values(global.APIKeys))
                text = text.replace(new RegExp(key, 'g'), 'AGUZ')
                if (DevMode && text.length > 100) {
                        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid))  m.reply(`*file:* ${m.plugin}\n*Nomor:* ${m.sender}\n*Text:* ${m.text}\n\n\`\`\`${text}\`\`\``, jid)
                }
                m.reply(text)
            }
          } finally {
            // m.reply(util.format(_user))
            if (typeof plugin.after === 'function') {
              try {
                await plugin.after.call(this, m, extra)
              } catch (e) {
                console.error(e)
              }
            }
            if (m.limit) m.reply(+ m.limit + ' Limit Terpakai')
          }
          break
        }
      }
    } finally {
      //console.log(global.db.data.users[m.sender])
      let user, stats = global.db.data.stats
      if (m) {
        if (m.sender && (user = global.db.data.users[m.sender])) {
          user.exp += m.exp
          user.limit -= m.limit * 1
        }

        let stat
        if (m.plugin) {
          let now = + new Date
          if (m.plugin in stats) {
            stat = stats[m.plugin]
            if (!isNumber(stat.total)) stat.total = 1
            if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
            if (!isNumber(stat.last)) stat.last = now
            if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now
          } else stat = stats[m.plugin] = {
            total: 1,
            success: m.error != null ? 0 : 1,
            last: now,
            lastSuccess: m.error != null ? 0 : now
          }
          stat.total += 1
          stat.last = now
          if (m.error == null) {
            stat.success += 1
            stat.lastSuccess = now
          }
        }
      }

      try {
        require('./lib/print')(m, this)
      } catch (e) {
        console.log(m, m.quoted, e)
      }
    }
  },
  async participantsUpdate({ jid, participants, action }) {
    let chat = global.db.data.chats[jid] || {}
    let text = ''
    switch (action) {
      case 'add':
      case 'remove':
        if (chat.welcome) {
          let groupMetadata = await this.groupMetadata(jid)
          for (let user of participants) {
            // let pp = './src/avatar_contact.png'
            let pp = 'https://telegra.ph/file/602c1d4acc82adf1f4a1c.jpg'
            try {
              pp = await uploadImage(await (await fetch(await this.getProfilePicture(user))).buffer())
            } catch (e) {
            } finally {
              text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Selamat datang, @user!').replace('@subject', this.getName(jid)).replace('@desc', groupMetadata.desc) :
                (chat.sBye || this.bye || conn.bye || 'Sampai jumpa, @user!')).replace(/@user/g, '@' + user.split`@`[0])
              let wel = `https://hardianto-chan.herokuapp.com/api/tools/welcomer2?name=${encodeURIComponent(this.getName(user))}&descriminator=${user.split(`@`)[0].substr(-5)}&totalmem=${encodeURIComponent(groupMetadata.participants.length)}&namegb=${encodeURIComponent(this.getName(jid))}&ppuser=${pp}&background=https://i.ibb.co/KhtRxwZ/dark.png&apikey=hardianto`
              let lea = `https://hardianto-chan.herokuapp.com/api/tools/leave2?name=${encodeURIComponent(this.getName(user))}&descriminator=${user.split(`@`)[0].substr(-5)}&totalmem=${encodeURIComponent(groupMetadata.participants.length)}&namegb= ${encodeURIComponent(this.getName(jid))}&ppuser=${pp}&background=https://i.ibb.co/KhtRxwZ/dark.png&apikey=hardianto`

              this.sendFile(jid, action === 'add' ? wel : lea, 'pp.jpg', text, null, false, {
                thumbnail: await (await fetch(action === 'add' ? wel : lea)).buffer(),
                contextInfo: {
                  mentionedJid: [user]
                }
              })
            }
          }
        }
        break
      case 'promote':
        text = (chat.sPromote || this.spromote || conn.spromote || '@user sekarang Admin')
      case 'demote':
        if (!text) text = (chat.sDemote || this.sdemote || conn.sdemote || '@user sekarang bukan Admin')
        text = text.replace('@user', '@' + participants[0].split`@`[0])
        if (chat.detect) this.sendMessage(jid, text, MessageType.extendedText, {
          contextInfo: {
            mentionedJid: this.parseMention(text)
          }
        })
        break
    }
  },
  async delete(m) {
    if (m.key.remoteJid == 'status@broadcast') return
    if (m.key.fromMe) return
    let chat = global.db.data.chats[m.key.remoteJid]
    if (chat.delete) return
    await this.sendButton(m.key.remoteJid, `
        *────────「 ANTI DELETE 」─────────*


*Terdeteksi @${m.participant.split`@`[0]}*
*telah menghapus pesan, ngapain di hapus tong? :'v*

_jangan di matikan om biar gak ada yang main apus" pesan wkwkwk :'v_
`.trim(), '', 'MATIKAN ANTI DELETE', '.off antidelete', {
      quoted: m.message,
      contextInfo: {
        mentionedJid: [m.participant]
      }
    })
    this.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m))
  },
  async onCall(json) {
    let { from } = json[2][0][1]
    let users = global.db.data.users
    let user = users[from] || {}
    if (user.whitelist) return
    switch (this.callWhitelistMode) {
      case 'mycontact':
        if (from in this.contacts && 'short' in this.contacts[from])
          return
        break
    }
   await this.sendMessage(from, 'Maaf, karena anda menelfon bot. anda diblokir otomatis', MessageType.extendedText)
    await this.blockUser(from, 'add')
  },
  async GroupUpdate({ jid, desc, descId, descTime, descOwner }) {
    if (!global.db.data.chats[jid].descUpdate) return
    let caption = `
@${descOwner.split`@`[0]} telah mengubah deskripsi grup.

${desc}

ketik *.off desc* untuk mematikan pesan ini
    `.trim()
    this.sendButton(jid, caption, '', 'MATIKAN DESKRIPSI', ',off desc', { contextInfo: { mentionedJid: this.parseMention(caption) } })
  }
}

global.dfail = (type, m, conn) => {
  let msg = {
    rowner: `Perintah ini hanya dapat digunakan oleh _*Pemilikku:')*_`,
    owner: `*[❗]*  Perintah ini hanya dapat digunakan oleh _*Pemilikku :')*_`,
    mods: 'Perintah ini hanya dapat digunakan oleh _*Moderator*_',
    premium: 'Perintah ini hanya untuk pengguna _*Premium*_',
    group: 'Perintah ini hanya dapat digunakan di grup',
    private: 'Perintah ini hanya dapat digunakan di Chat Pribadi',
    admin: 'Perintah ini hanya untuk *Admin* grup',
    botAdmin: 'Jadikan bot sebagai *Admin* untuk menggunakan perintah ini',
    unreg: ' *「 BELUM DAFTAR TERDETEKSI 」* \nHalo kaka, Yuk Daftar Dulu Soalnya Anda Belum Terdaftar Di Database Enjela Nih\n\n *── Segera Registrasi Data Diri Anda ──* \n\nKetik : #daftar nama|umur\nContoh : #daftar Enjela|16',
    nsfw: 'NSFW tidak aktif boskuhh >_<'
  }[type]
  if (msg) return m.reply(msg)
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'handler.js'"))
  delete require.cache[file]
  if (global.reloadHandler) console.log(global.reloadHandler())
})
