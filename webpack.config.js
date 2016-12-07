var path = require('path');
module.exports = {
    entry : './js/main.js',
    output : {
        path : __dirname,
        filename : 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : path.join(__dirname,'js'),
                loader : 'babel-loader',
                query : {
                    presets : ['es2015']
                }
            }
        ]
    },
    resolve : {
        extensions : ['','.js','.json','.coffee']
    }
}