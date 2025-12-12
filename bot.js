const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('ready', () => {
    console.log(`?? BobBot online como ${client.user.tag}`);
    client.user.setActivity("BOB MENU | Assistente Virtual", { type: 0 });
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.content.toLowerCase() === '!bob') {
        message.reply(":robot: **BobBot aqui! Como posso te ajudar com o BOB MENU?**");
    }

    if (message.content.toLowerCase() === '!comandos') {
        message.reply(`
:package: **COMANDOS DO BOB MENU**
- !ativar ? Ativar o menu  
- !chave ? Instalar sua chave  
- !suporte ? Suporte técnico  
- !conferir ? Conferir menu  
- !status ? Ver status do bot
        `);
    }
});

client.login("MTQ0ODgyMTg3MTUwMzIxMjYyNg.G0Kjxk.kOm7o5qsC1UufV3l57cdaplQgyX0ClQEUdwYBI");
