const gulp = require('gulp')

module.exports = function serverPHP() {
  return gulp.src('src/sender.php')
    .pipe(gulp.dest('build/sender'))
}
