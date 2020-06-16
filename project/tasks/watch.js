const gulp = require('gulp')
const debounce = require('debounce')
const npm = require('npm')

function watch() {
  npm.load({}, function () {
    npm.run('build:production')
  })
  gulp.watch('src/**/*.ts').on(
    'change',
    debounce(() => {
      npm.load(() => npm.run('build:production'))
    }, 1000),
  )
}

module.exports = {
  watch,
}
