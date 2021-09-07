module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);

        if (!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);
        if (!command) {
            await interaction.reply({ content: 'Ih bicho, o commando caiu da ponte.', ephemeral: true })
            return;
        };
    
        console.info(`INFO -- ${interaction.user.username} used command ${command.data.name}`);
    
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Ih bicho, o commando caiu da ponte.', ephemeral: true })
        }
    },
};