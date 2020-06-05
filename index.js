const tmi = require('tmi.js');

const options = {
	options: {
		debug: true,
	},
	connection: {
		cluster: 'aws',
		reconnect: true,
	},
	identity: {
			username: 'username', //username of your bot goes here
			password: 'oauth:notpostingmyactualoauth', //use oauth instead of plaintext password
	},
	channels: ['channel'], //the channel(s) you want the bot active in
};

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
	client.action('channel', 'username online');
});

client.on('chat', (channel, user, message, self) => {
	if (message === '!game') {
		client.action('channel', 'channel is playing (game)!'); //the game you're currently playing
	}
	if (message === '!social') {
		client.action('channel', 'social links!'); //your social links go here
	}

	client.action('channel', `Hello ${user['display-name']}!`); //bot greets users
});