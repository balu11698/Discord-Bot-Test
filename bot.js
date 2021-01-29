require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is ready to go!!');
});
client.on('message',msg=>{
    if(msg.content=="Tanith"){
        msg.channel.send("Yes Tanith n00b")
    }
    if(msg.content=="balu"){
        msg.reply("g0d")
    }
})
client.login(process.env.BOT_TOKEN)