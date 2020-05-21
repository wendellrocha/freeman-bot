module.exports = {
	name: 'help',
	description: 'Lista de todos os comandos ou informação sobre um comando específico',
	aliasses: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const prefix = '.';
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Lista de comandos:');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nVocê pode usar \`${prefix}help\` para obter ajuda sobre um comando específico.`);

			return message.author.send(data, { split: true }).then(() => {
				if (message.channel.type === 'dm') return;
				message.reply('Olha tua DM, carai.');
			}).catch(error => {
				console.error(`Não consegui enviar DM pro corno do ${message.autor.tag}.\n`, error);
				message.reply('Tu tá com a DM bloqueada, animal.');
			});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || command.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('404. COMO TU QUER SABER INFO SOBRE UM COMANDO QUE NÃO EXISTE?');
		}

		data.push(`**Nome:** ${command.name}`);
		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Descrição:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} segundos`);

		message.channel.send(data, { split: true });
	},
};