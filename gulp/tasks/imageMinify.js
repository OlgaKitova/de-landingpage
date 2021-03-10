const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

module.exports = function imageMinify() {
  return gulp.src('src/img/*')
		.pipe(gulp.dest('build/img'))
}
