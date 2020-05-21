module.exports = {
	name: 'clear',
	description: 'clear a user.',
	usage: '<user>',
	guildOnly: true,
	execute(message) {
		if (message.member.roles.cache.some(role => role.name === 'Freeman') || message.member.roles.cache.some(role => role.name === 'Ranger Hardcore')) {
			const args = message.content.split(' ').slice(1);
			const amount = args.join(' ');
			if (!amount) return message.reply('Você não passou a quantidade de mensagens a serem excluídas!');
			if (isNaN(amount)) return message.reply('Tem que ser um número, campeão!');

			if (amount > 100) return message.reply('Você não pode deletar mais do que 100!');
			if (amount < 1) return message.reply('Você tem que deletar pelo menos uma!');

			message.channel.messages.fetch({ limit: amount }).then(messages => {
				message.channel.bulkDelete(messages);
			});

		} else {
			return message.reply('tu não tem a rola grande o suficiente, boy');
		}

	},
};