const { loadFiles } = require("./FileLoader")
const { CustomClient } = require("../Classes/CustomClient")

/**
 * @param {CustomClient} client
 */
async function loadCommands(client) {

    const { commands, config, application, guilds } = client

    commands.clear()

    let Loader = 0
    let Failed = 0
    let CommandsArray = []

    const files = await loadFiles("Commands")

    files.forEach(file => {

        const command = require(file)
        if (!command.data.name) return Failed++

        commands.set(command.data.name, commands)
        CommandsArray.push(command.data.toJSON())

        Loaded++
    })

    if(Loaded !==0) console.log(`Loaded ${Loaded} commands`)
    if(Failed !==0) console.log(`Failed ${Loaded} commands`)

    if(config.global === true) {
        application.commands.set(CommandsArray)
    } else{
        const guild = guilds.cache.get(config.guildId)
        if(!guild) return

        guild.commands.set(CommandsArray)
    }
}

module.exports = { loadCommands }