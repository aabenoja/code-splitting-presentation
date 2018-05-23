# Breaking Down The Front End
Vertical Slices Works For Bread, Why Not Our Javascript

---

## Words Of The Day
* Tree Shaking
* Dynamic Imports
* CSS
* Code Splitting React Components

---

## Tree Shaking 

----

### I Just Need One Tree, Do I Really Need The Whole Forest

NOTE: Go over the concept of tree shaking

----

### What We Think Is Happening

```js
import { includes } from 'lodash'

// becomes

const includes = require('lodash/includes')

// or

const { includes } from 'lodash'
```

----

### How It Works

1. Analyze all imports/exports in the bundle chain
2. Orphan Unused Exports
3. ???
4. Profit

----

### Tree Shaking Only Operates On ES2015 IMPORTS/EXPORTS

```
"modules": false
```

NOTE: Show the tree shaking demo in examples/tree shaking with
lodash and compare bundle sizes with and without tree shaking
enabled

---

## Dynamic Imports

NOTE: Discuss lazy loading modules and how easy it is in webpack

---

## Living With(out) Css

> Does my css need to live with my components?

NOTE: Demo usage of mini-css-extract-plugin

---

## Code Splitting React Components

NOTE: Eventually demo of an app with a bundles split
by each individual page
