module.exports = {
    apps: [{
        name: 'node-red-filmoteka',
        script: './node_modules/node-red/red.js',
        args: '-s settings.js -u ./',
        watch: false,
        node_args: '--max_old_space_size=1500',
        instances: 1,
        exec_mode: 'cluster',
        autorestart: true,
		env: {
            NODE_ENV: 'dev',
	    fbToken: 'EAADABZBqmUFsBAN0TRRf2RwSZBgOrhqnX8mhxpfILvrXUkbRS1LHQyJrzUzfesAq5Ha2LpITjDFTA3ZB0H3j81u0ZCxUrPlLN8esI3hrQxlPhL6LZB9B0FFZC9Ch8xGEPfVZAXcHoxXQYvdDqFNnky7HN5fpaJlC64D51Vq4ZAEgOgZDZD',
        PORT: 1880
    },
	}
    ]
};