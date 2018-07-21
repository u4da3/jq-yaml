'use strict';
var gulp   = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', [
  'dist:debug',
  'dist:release',
]);

gulp.task('dist:release', function(){
  gulp.src(["./dist/*.js","!./dist/*.min.js"])
    .pipe(uglify({ mangle: {reserved: ['jQuery']} }))
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('dist:debug', function(){
  browserify('./src/index.js')
  .bundle()
  .pipe(source('jq-yaml.js'))
  .pipe(gulp.dest('./dist/'));
});
