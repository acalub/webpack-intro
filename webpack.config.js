var path = require("path");


module.exports = {
        entry: "./public/js/MyCoolAppWP.js",
        output: {
                path: __dirname + "/public/js",
                filename: "bundle.js",
                sourceMapFilename:"bundle.map",
        },
        module: {
                loaders: [
                        { test: /\.scss$/, loader: "style!css!sass" },
                        { test: /\.hbs/, loader:"handlebars-loader"}
                ]
        },
        externals:[{
                'Handlebars/runtime': {
                        root: 'Handlebars',
                        amd: 'handlebars.runtime',
                        commonjs2: 'handlebars/runtime',
                        commonjs: 'handlebars/runtime'
                    },
                    'Handlebars': {
                        root: 'Handlebars',
                        amd: 'handlebars',
                        commonjs: 'handlebars',
                        commonjs2: 'handlebars'
                    }
        }],
        resolve:{
                root:[
                        path.resolve('./public/libs'),
                        path.resolve('./public')
                ]
        },
        devtool:'source-map'
};
