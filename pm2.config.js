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
        PORT: 1880
    },
	}
    ]
};