module.exports = {
	name: 'beep',
	description: 'Beep!',
	execute(message) {
		message.channel.send('Me deixa em paz, caralho.');
	},
};