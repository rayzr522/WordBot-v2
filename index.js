const config = require('./config');
const bot = new (require('discord.js')).Client();
bot.on('ready', () => bot.generateInvite(['READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'MANAGE_NICKNAMES', 'CHANGE_NICKNAME']).then(console.log))
    .on('message', message => message.content !== config.word && Promise.all([message.delete(), message.channel.send(config.word), message.member.setNickname(config.word)]).catch(() => { }))
    .login(config.token)