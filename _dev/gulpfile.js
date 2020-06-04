'use strict';

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const fs = require('fs');
const cssnano = require('gulp-cssnano');


// scss
gulp.task('sass', () => {
  return gulp
    .src(__dirname + '/scss/**/*.scss')
    .pipe(
      plumber({
        errorHandler: notify.onError('<%= error.message %>')
      })
    )
    .pipe(
      sass({
        outputStyle: 'expanded'
      }).on('error', sass.logError)
    )
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions', 'ie >= 9', 'ChromeAndroid >= 6', 'Android >= 6', 'iOS >= 9']
      })
    )
    .pipe(cssnano())
    .pipe(gulp.dest('../assets/css'));
});


// watch
gulp.task('watch', () => {
  gulp.watch(__dirname + '/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('pcsp', gulp.parallel('watch'));

//default
gulp.task('default', gulp.parallel('pcsp'));
