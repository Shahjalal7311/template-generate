import gulp from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackConfig from '../webpack.config'

import config from './config';

export const scripts = () => {
  return gulp
    .src(config.scripts.src)
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(config.scripts.dest));
}
