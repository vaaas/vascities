const mix = require('laravel-mix')
mix.webpackConfig({
    resolve: {
        fallback: {
            'electron': false,
            'fs': false,
            'os': false,
        },
    },
})
mix.js('src/index.js', 'dist/main.js').vue()
