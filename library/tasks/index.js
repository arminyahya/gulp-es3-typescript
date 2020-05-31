const gulp =  require('gulp');
const watchTask  =  require('./watch');
const watch   = gulp.series( watchTask.watch );

module.exports = {
	watch
}

module.exports.default = watch
