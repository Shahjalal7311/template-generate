import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import mozjpeg from 'imagemin-mozjpeg';

import config from './config';

export const images = () => {
  return gulp
    .src(config.images.src, { since: gulp.lastRun(images) })
    .pipe(imagemin(
      [
        pngquant({ quality: [.65, .85], speed: 1 }),
        mozjpeg({ quality: 80 }),
        imagemin.svgo(),
        imagemin.gifsicle()
      ]
    ))
    .pipe(gulp.dest(config.images.dest));
}
