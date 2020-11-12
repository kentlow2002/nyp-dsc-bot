const Discord = require('discord.js');
const client = new Discord.Client();
 

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('guildMemberAdd', (member) => {
    member.guild.channels.fetch("776009068610977792")
        .then(ch => ch.send("new member"))
        .catch(console.log("message went wrong!"));
    member.guild.roles.fetch("776017709543850025")
        .then(role => member.roles.add(role))
        .catch(console.log("role went wrong!"));
    
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret