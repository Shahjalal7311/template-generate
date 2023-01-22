import gulp from 'gulp';

import { sass } from './tasks/sass';
import { ejs } from './tasks/ejs';
import { scripts } from './tasks/scripts';
import { images } from './tasks/images';
import { reload, serve } from './tasks/server';
import clean from './tasks/clean';

import config from './tasks/config';

const watch = () => {
  gulp.watch(config.styles.src, gulp.series(sass, reload));
  gulp.watch(config.scripts.src, gulp.series(scripts, reload));
  gulp.watch(config.ejs.src, gulp.series(ejs, reload));
  gulp.watch(config.images.src, gulp.series(images, reload));
}

export const dev = gulp.series(
  clean,
  gulp.parallel(ejs, sass, scripts, images),
  serve,
  watch
);

export const build = gulp.series(
  clean,
  gulp.parallel(ejs, sass, scripts, images)
)
