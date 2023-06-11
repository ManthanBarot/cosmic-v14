const { Events, ActivityType } = require('discord.js')
const { CustomClient }= require("../../Structures/Classes/CustomClient")

module.exports = {
    name: Events.ClientReady,

    /**
     * @param {CustomClient} client
     */

    execute(client){

        const { user } = client

        console.log(`${user.tag} is now online!`)

        user.setActivity({
            name: "RickRoll",
            type: ActivityType.Watching
        })
    }
}