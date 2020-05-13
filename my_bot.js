const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config/config.js')

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member.log');
    if(!channel) return;
    channel.send('Welcome to the server, ${member}');
})














// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
bot_secret_token = "NzA5OTE2NDE3Nzg0MjgzMTM2.Xrvh5Q.5kaAhfPPNDY61biuss7JXNvHQqk"

client.login(bot_secret_token)