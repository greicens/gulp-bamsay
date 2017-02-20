var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var sass = require("gulp-sass");

gulp.task('default', function() {
  console.log('I am the default task!');
});

gulp.task('currenttime', function(){
  var today = new Date()
  console.log(today)
});

gulp.task('jshint', function() {
  return gulp.src('./js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});

gulp.task('sass', function () {
return gulp.src('./css/**/*.scss')
 .pipe(sass().on('error', sass.logError))
 .pipe(gulp.dest('./css/'))
});
