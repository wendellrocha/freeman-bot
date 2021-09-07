const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder().setName('disconnect')
        .setDescription('Disconnect a user from the voice channel.')
        .addUserOption(option => option.setName('user').setRequired(true).setDescription('The user to disconnect.')),
    async execute(interaction) {
        const member = interaction.options.getMember('user');
        member.voice.setChannel(null);
        await interaction.reply(`${interaction.user.username} desconectou ${member.user.username} do canal de voz.`);
    }
}