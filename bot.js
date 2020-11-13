const Discord = require('discord.js');
const client = new Discord.Client();
 

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('guildMemberAdd', (member) => {
    member.guild.channels.cache.find(ch => ch.name === "entry-logs").send("Welcome <@"+member.id+"> ! Enjoy your stay here :> .");
    member.guild.roles.fetch("776017709543850025")
        .then(role => member.roles.add(role))
        .catch(error => {
            console.log("public role assignment went wrong!");
            console.log(error);
        });
    
});

client.on('message', message => {
    if (message.channel.name === "verify") {
        
    }
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret