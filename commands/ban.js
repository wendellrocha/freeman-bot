const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder().setName('ban')
        .setDescription('Ban a user from the server.')
        .addUserOption(option => option.setName('user').setRequired(true).setDescription('The user to disconnect.')),
    async execute(interaction) {
        if (interaction.user.roles.cache.some(role => role.name === 'Administrator')) {
            const member = interaction.options.getMember('user');
            member.ban();
            await interaction.reply(`${interaction.user.username} derrubou ${member.user.username} da ponte.`);
        } else {
            await interaction.reply('tu não tem a rola grande o suficiente, parça');
        }

    }
}