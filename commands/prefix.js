const { Client, GatewayIntentBits, Partials } = require('discord.js');
require('dotenv').config();

const prefix = 'm!';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,          
        GatewayIntentBits.GuildMessages,   
        GatewayIntentBits.MessageContent,   
    ],
    partials: [Partials.Channel]         
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const command = message.content.slice(prefix.length).trim().split(' ')[0];

    if (command === 'ping') {
        message.channel.send('Pong!');
    }
});

client.login(process.env.TOKEN);