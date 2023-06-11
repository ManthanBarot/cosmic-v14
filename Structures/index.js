require("dotenv").config();

const { Client, GatewayIntentBits, Partials } = require("discord.js")
const { CustomClient } = require('./Classes/CustomClient')
const client = new Client({
    
    intents:[
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent
    ],
    partials:[
        Partials.Channel,
        Partials.Message,
        Partials.Reaction
    ]
})
client.login(process.env.TOKEN)
