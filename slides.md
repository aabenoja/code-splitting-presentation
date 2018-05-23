# Breaking Down The Front End
Vertical Slices Works For Bread, Why Not Our Javascript

---

## Words Of The Day
* Tree Shaking
* Dynamic Imports

---

## Tree Shaking 

----

### I Just Need One Tree, Do I Really Need The Whole Forest

----

### What We Think Is Happening

```js
import { includes } from 'lodash'

// becomes

const includes = require('lodash/includes')
```

----

### What Is Actually Happening

```js
import { includes } from 'lodash'

// becomes

const { includes } = require('lodash')
```

----

### How It Works

----

```
"modules": false
```
