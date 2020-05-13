const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

//Welcomes new guild(server) members
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member.log');
    if(!channel) return;
    channel.send('Welcome to the server, ${member}');
})

//If the bot successfuly logged it will post a massage in console
client.on('ready' , () => {
    console.log(`${client.user.tag} has logged in.`)
});

//Logs the username of every massage sent
client.on('message', function(message){
    console.log(message.author.username);
});

//Replies to hello with hello there!
client.on('message', function(message){
    if(message.author.bot) return;
    if(message.content === 'hello'){
        message.reply('hello there!');
    }
});

//Replies to "Hello there" with "General Kenobi"
client.on('message', function(message){
    if(message.author.bot) return;
    if(message.content === 'Hello there!'){
        message.reply('General Kenobi!');
    }
});

// Replies to !author with my name and contact info
client.on('message', function(message){
    if(message.author.bot) return;
    if(message.content === '!author'){
        message.reply('Ádám "Tehbuckets" Detki made me, contact: detki88@gmail.com ');
    }
});

// A notification that class starts in 30 minutes
client.on('message', function(message){
    
    if(message.author.bot) return;
    if(message.content === '!class'){
        message.react('@everyone Az óra 30 perc múlva kezdődik!');
    }
});

//Trying to make a timer
/*
client.on('massage', message => {
    let Timer = args[0];

    if(!args[0]){
        return message.channel.send("Usage: !timer + időtartam + s|m|h")
    }

    if(args[0] <= 0){
        return message.channel.send("Usage: !timer + időtartam + s|m|h")
    }

    message.channel.send("Timer lejár:" + ms(ms(Timer), {long: true}))
    setTimeout(function(){
        message.channel.send(message.author.toString()+ `Maradék időtartam: ${ms(ms(Timer), {long: true})}`)
    })
})
*/







// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
bot_secret_token = "NzA5OTE2NDE3Nzg0MjgzMTM2.Xrvh5Q.5kaAhfPPNDY61biuss7JXNvHQqk"

client.login(bot_secret_token)