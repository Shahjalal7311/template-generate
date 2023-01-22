import del from 'del';

import config from './config';

export default (done) => {
  del(`${config.dist}/**/*`);
  done();
}
