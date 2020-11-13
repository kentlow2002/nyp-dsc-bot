const Discord = require('discord.js');
const client = new Discord.Client();
 

client.on('ready', () => {
    console.log('I am ready!');
});

//add public role upon entry
client.on('guildMemberAdd', (member) => {
    member.guild.channels.cache.find(ch => ch.name === "entry-logs").send("Welcome <@"+member.id+"> ! Enjoy your stay here :> .");
    const pubRole = member.guild.roles.cache.find(r => r.name === "Public");
    member.roles.add(pubRole);
    
});

client.on('message', message => {
    const patt = /^[0-9]{6}$/;
    if (message.channel.name === "verify" && message.content.match(patt)) {
        
    }
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret