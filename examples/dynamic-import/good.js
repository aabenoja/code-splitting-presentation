import first from './common/first';

import('./common/second')
  .then(module => console.log(module.default));

