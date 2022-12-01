const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("The bot will reply with a 'pong'."),
    async execute(interaction) {
        await interaction.reply("Pong");
    },
};

