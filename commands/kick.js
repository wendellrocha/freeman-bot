const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder().setName('kick')
        .setDescription('Kick a user from the server.')
        .addUserOption(option => option.setName('user').setRequired(true).setDescription('The user to kick.')),
    async execute(interaction) {
        if (interaction.user.roles.cache.some(role => role.name === 'Administrator')) {
            const member = interaction.options.getMember('user');
            member.kick();
            await interaction.reply(`${interaction.user.username} expulsou ${member.user.username} na bicuda.`);
        } else {
            await interaction.reply('tu não tem a rola grande o suficiente, parça');
        }
    }
}