const loader = require('vue-loader')
module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new loader.VueLoaderPlugin()
    ],
    resolve: {
        fallback: {
            'fs': false,
        },
    },
}
