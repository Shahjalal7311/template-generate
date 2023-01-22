const SOURCE = 'src';
const DESTINATION = 'public';

const env = process.env.NODE_ENV || "development"

export default {
  src: SOURCE,
  dist: DESTINATION,
  pdflib: {
    src: `${SOURCE}/css/*.css`,
    dest: `${DESTINATION}/css`
  },
  styles: {
    src: `${SOURCE}/scss/**/*.scss`,
    dest: `${DESTINATION}/css`
  },
  scripts: {
    src: `${SOURCE}/js/**/*.js`,
    srcRoot: `${SOURCE}/js`,
    dest: `${DESTINATION}/js`
  },
  ejs: {
    src: `${SOURCE}/ejs/**/*.ejs`,
    excluded_src: `!${SOURCE}/ejs/**/_*.ejs`,
    dest: `${DESTINATION}`
  },
  newsEjs: {
    src: `${SOURCE}/ejs/news/contents/**/*.ejs`,
    excluded_src: `!${SOURCE}/ejs/**/_*.ejs`,
    dest: `${DESTINATION}/news`
  },
  images: {
    src: `${SOURCE}/assets/images/**/*`,
    dest: `${DESTINATION}/images`
  },
  env: env,
  isDevelopment: env == "development",
  isProduction: env == "production"
};
