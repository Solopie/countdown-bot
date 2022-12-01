const { SlashCommandBuilder } = require("discord.js");
const config = require("../utils/config");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("stop")
        .setDescription("Stop the countdown"),
    async execute(interaction) {
        if (config.RUNTIME_CONFIG["INTERVAL_ID"] == null) {
            return interaction.reply({ content: "Countdown hasn't started", ephemeral: true });
        }

        clearInterval(config.RUNTIME_CONFIG["INTERVAL_ID"]);
        config.RUNTIME_CONFIG["INTERVAL_ID"] = null;
        config.RUNTIME_CONFIG["TITLE_CHANNEL"].delete();
        config.RUNTIME_CONFIG["TITLE_CHANNEL"] = null;
        config.RUNTIME_CONFIG["COUNTDOWN_CHANNEL"].delete();
        config.RUNTIME_CONFIG["COUNTDOWN_CHANNEL"] = null;


        interaction.reply({ content: "Channels deleted", ephemeral: true });
    },
};

