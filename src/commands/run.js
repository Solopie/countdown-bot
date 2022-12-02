const { SlashCommandBuilder, PermissionsBitField, ChannelType } = require("discord.js");
const countdown = require("../utils/countdown");
const config = require("../utils/config");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("run")
        .setDescription("Run the countdown"),
    async execute(interaction) {
        if (config.RUNTIME_CONFIG["INTERVAL_ID"] != null) {
            return interaction.reply({ content: "Countdown has already started", ephemeral: true });
        }

        config.RUNTIME_CONFIG["TITLE_CHANNEL"] = await interaction.guild.channels.create({ name: "CTF Countdown:", type: ChannelType.GuildVoice, permissionOverwrites: [{ id: interaction.client.application.id, allow: [PermissionsBitField.Flags.Connect] }, { id: interaction.guild.roles.everyone.id, deny: [PermissionsBitField.Flags.Connect] }] });
        config.RUNTIME_CONFIG["COUNTDOWN_CHANNEL"] = await interaction.guild.channels.create({ name: countdown.curTime(), type: ChannelType.GuildVoice, permissionOverwrites: [{ id: interaction.client.application.id, allow: [PermissionsBitField.Flags.Connect] }, { id: interaction.guild.roles.everyone.id, deny: [PermissionsBitField.Flags.Connect] }] });
        config.RUNTIME_CONFIG["INTERVAL_ID"] = setInterval(async () => {
            const temp = countdown.curTime();
            if (temp === config.RUNTIME_CONFIG["PREV_TIME"]) {
                return;
            }
            config.RUNTIME_CONFIG["PREV_TIME"] = temp;
            await config.RUNTIME_CONFIG["COUNTDOWN_CHANNEL"].setName(temp);
        }, 5 * 60 * 1000); // Attempt update every 5 minutes

        interaction.reply({ content: "Countdown started", ephemeral: true });
    },
};

