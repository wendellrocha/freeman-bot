module.exports = {
	name: 'ban',
	description: 'ban a user from the server.',
	usage: '<user>',
	guildOnly: true,
	execute(message) {
		if (message.member.roles.cache.some(role => role.name === 'Freeman') || message.member.roles.cache.some(role => role.name === 'Ranger Hardcore')) {
			if (!message.mentions.users.size) {
				return message.reply('Você tem que taggear o usuário!');
			}

			const taggedUser = message.mentions.users.first();
			const member = message.mentions.members.first();
			member.ban();
			message.channel.send(`${taggedUser.username} foi banido.`);

		} else {
			return message.reply('tu não tem a rola grande o suficiente, parça');
		}
	},
};