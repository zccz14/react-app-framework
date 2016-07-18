var path = require('path');
module.exports = {
    entry: './src',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        // If you want to output a library, config
        libraryTarget: "var",
        library: "App"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel']
        }]
    },
    externals: {
        "react": 'React',
        "react-dom": 'ReactDOM',
        // "redux": 'Redux',
        // "react-redux": 'ReactRedux',
    }
};