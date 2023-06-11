const { Events, ChatInputCommandInteraction } = require("discord.js")
const { CustomClient } = require("../../Structures/Classes/CustomClient")

module.exports = {
    name: Events.InteractionCreate,
/**
 * @param {ChatInputCommandInteraction} interaction
 * @param {CustomClient} client
 */

    execute(interaction, client){

        if(!interaction.isChatInputCommand()) return

        const { commandName, guild, user } = interaction

        if(!guild) return

        const command = client.commands.get(commandName)
        if(!command) return
    }
}