import { first } from './common';

import('./common')
  .then(({ second }) => console.log(second));
