require("dotenv").config();

const { Client, GatewayIntentBits, Partials } = require("discord.js")
const { CustomClient } = require('./Classes/CustomClient')
const { loadEvents } = require("./Functions/EventLoader")
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

loadEvents(client)
client.login(process.env.TOKEN)
