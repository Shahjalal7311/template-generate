import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import gulpIf from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps'
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

import config from './config';

export const sass = () => {
  return gulp
    .src(config.styles.src)
    .pipe(gulpIf(config.isDevelopment, sourcemaps.init()))
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(postcss([
      autoprefixer({
        cascade: false
      }),
      cssnano({ autoprefixer: false })
    ]))
    .pipe(gulpIf(config.isDevelopment, sourcemaps.write()))
    .pipe(gulp.dest(config.styles.dest))
}
