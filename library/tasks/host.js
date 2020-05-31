const gulp =  require('gulp');
const watchTask  =  require('./watch.host.js');
const watch   = gulp.series( watchTask.watch );

module.exports = {
	watch
}

module.exports.default = watch
