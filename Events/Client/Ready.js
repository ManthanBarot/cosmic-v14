const { Events, ActivityType } = require('discord.js')
const { CustomClient } = require("../../Structures/Classes/CustomClient")
const { loadCommands } = require("../../Structures/Functions/CommandLoader")
module.exports = {
    name: Events.ClientReady,

    /**
     * @param {CustomClient} client
     */

    execute(client){

        const { user } = client

        loadCommands(client)

        console.log(`${user.tag} is now online!`)

        user.setActivity({
            name: "RickRoll",
            type: ActivityType.Watching
        })
    }
}