const path = require('path');
const gulp = require('gulp');
const debounce = require('debounce');
const npm = require('npm');

function watch() {
  console.log(path.resolve(__dirname));
  npm.load({}, function () {
    npm.run('build:host:production');
  });
  gulp.watch('src/**/*.ts').on('change', () => {
    console.log('changed..');
    // npm.load(() => npm.run("build:host:production"));
  });
}

module.exports = {
  watch,
};
