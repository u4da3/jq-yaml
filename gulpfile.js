'use strict';
var gulp = require('gulp');
var del = require('del');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');

gulp.task('default', ['build']);

gulp.task('build', function(callback) {
  runSequence(
    'clean',
    'browserify',
    'uglify',
    callback
  );
});

gulp.task('clean', function() {
    return del('./dist/*.js');
});

gulp.task('browserify', function(){
  return browserify('./src/index.js')
  .bundle()
  .pipe(source('jq-yaml.js'))
  .pipe(gulp.dest('./dist/'));
});

gulp.task('uglify', function(){
  return gulp.src(["./dist/*.js","!./dist/*.min.js"])
    .pipe(uglify({ mangle: {reserved: ['jQuery']} }))
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest('./dist/'));
});
