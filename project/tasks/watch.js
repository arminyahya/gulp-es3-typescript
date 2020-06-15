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
    }, 500),
  )

  gulp.watch('node_modules/gulp-es3-typescript-library/dist/index.js').on(
    'change',
    debounce(() => {
      npm.load(() => npm.run('build:production'))
    }, 2000),  )
}

module.exports = {
  watch,
}
