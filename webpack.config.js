const path = require('path'); 

module.exports = {
    entry: './src/index.js', 
    devtool: 'inline-source-map', //It will be easier to track down errors 
    output: { 
        filename: 'main.js', 
        path: path.resolve(__dirname, 'dist')
    }, 
}; 