const gulp = require('gulp');
const npm = require('npm');

function watch() {
    npm.load({}, function () { npm.run("build:production"); });
    gulp.watch('src/**/*.ts').on('change', () => {
        npm.load(() => npm.run("build:production"));
    });
}

module.exports = {
    watch
}