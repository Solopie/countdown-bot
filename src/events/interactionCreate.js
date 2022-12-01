module.exports = {
    name: "interactionCreate",
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        if (interaction.user.tag != "Solopie#0530") {
            return interaction.reply("You're not Solopie :)");
        }

        const command = interaction.client.commands.get(interaction.commandName);

        try {
            await command.execute(interaction);
        }
        catch (error) {
            console.error(error);
            await interaction.reply({ content: "There was an error while executing this command!", ephemeral: true });
        }
    },
};