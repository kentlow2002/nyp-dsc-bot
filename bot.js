const Discord = require('discord.js');
const client = new Discord.Client();
const { GoogleSpreadsheet, GoogleSpreadsheetWorksheet } = require('google-spreadsheet');

client.on('ready', () => {
    console.log('I am ready!');
});

function checkID(inputID, checkID) {
    return inputID == checkID;
}

//add public role upon entry
client.on('guildMemberAdd', (member) => {
    var sheet;
    const doc = new GoogleSpreadsheet("1wyaGvhrTkjPn8aTFV3Os0Jn8zd0Ij0ooLr0UOTW6HcI");
    doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g,'\n'),
    })
    .then(
        () => {
            doc.loadInfo()
                .then(
                    () => {
                        sheet = doc.sheetsById[1564289141];
                        sheet.loadCells("B2:B")
                            .then(
                                () => {
                                    var cells = sheet["_cells"];
                                    console.log(cells.includes(member.id));
                                    if (cells.includes(member.id)) {                                       
                                        const memRole = member.guild.roles.cache.find(r => r.name === "Member");
                                        member.roles.add(memRole);
                                    }
                                }
                            )
                            .catch(
                                (error) => console.log(error)
                            );

                    }
                )
                .catch(error => console.log(`wow doc load fail heres ur shitty error\n${error}`));
        }
    )
    .catch(error => { console.log("oops doc auth fail"); console.log(error); });
    const pubRole = member.guild.roles.cache.find(r => r.name === "Public");
    member.guild.channels.cache.find(ch => ch.name === "entry-logs").send("Welcome <@"+member.id+"> ! Enjoy your stay here :>");
    member.roles.add(pubRole);
    
    
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret