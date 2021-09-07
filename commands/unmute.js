const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder().setName('unmute')
        .setDescription('Unmute an user.')
        .addUserOption(option => option.setName('user').setRequired(true).setDescription('The user to disconnect.')),
    async execute(interaction) {
        if (interaction.user.roles.cache.some(role => role.name === 'Administrator')) {
            const member = interaction.options.getMember('user');
            member.voice.setMute(false);
            await interaction.reply(`${interaction.user.username} desmutou ${member.user.username}`);
        } else {
            await interaction.reply('tu não tem a rola grande o suficiente, parça');
        }

    }
}