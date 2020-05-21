module.exports = {
	name: 'unmute',
	description: 'Unmute a user.',
	usage: '<user>',
	guildOnly: true,
	execute(message) {
		if (message.member.roles.cache.some(role => role.name === 'Freeman') || message.member.roles.cache.some(role => role.name === 'Ranger Hardcore')) {
			if (!message.mentions.users.size) {
				return message.reply('Você tem que taggear o usuário!');
			}

			const taggedUser = message.mentions.users.first();
			const member = message.mentions.members.first();
			member.voice.setMute(false);

			message.channel.send(`${taggedUser.username} foi desmutado.`);
		} else {
			return message.reply('tu não tem a rola grande o suficiente, boy');
		}

	},
};