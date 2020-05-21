module.exports = {
	name: 'avatar',
	description: 'Pega o avatar o usuário taggeado ou o seu próprio avatar.',
	aliases: ['icon', 'pfp'],
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`${message.author.displayAvatarURL({ format: 'png', dynamic: true })}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.displayAvatarURL({ format: 'png', dynamic: true })}`;
		});

		message.channel.send(avatarList);
	},
};