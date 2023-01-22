import gulp from 'gulp';
import gulpEjs from 'gulp-ejs'
import rename from 'gulp-rename';

import config from './config';

const fs = require('fs');

export const ejs = () => {

  return gulp
    .src([config.ejs.src, config.ejs.excluded_src])
    .pipe(gulpEjs())
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest(config.ejs.dest));
}
