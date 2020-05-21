module.exports = {
	name: 'freeman',
	description: 'Freeman',
	cooldown: 5,
	execute(message) {
		message.channel.send('Rise and shine');
	},
};