const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, process.env.NODE_ENV === 'production' ? './docs' : './dist'),
    publicPath: process.env.NODE_ENV === 'production'
        ? '/jetScheduler/'
        : '/'
};
