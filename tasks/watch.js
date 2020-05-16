const gulp = require('gulp');
const npm = require('npm');

function watch() {
    npm.load({}, function () { npm.run("build:production"); });
    gulp.watch('src/**/*.ts').on('change', () => {
        npm.load(() => npm.run("build:production"));
    })
    gulp.watch('site/compiled-webpack-bundle.js').on('change', () => { /* IE5 dosn't support browserSync */ })
}

module.exports = {
    watch
}