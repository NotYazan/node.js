const Discord = require('discord.js');
const client = new Discord.Client()


const prefix = "$"

client.on('ready', () => {
    console.log(`${client.user.tag} !`)
})


client.on("message", yazan =>{
  if(yazan.content === ("1")){
    if (yazan.channel.type == "dm") return; 
    yazan.delete()
    yazan.author.send("2")
  }
  });

client.login(process.env.token);