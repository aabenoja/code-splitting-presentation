# Breaking Down The Front End
Vertical Slices Works For Bread, Why Not Our Javascript

---

## Words Of The Day
* Tree Shaking
* Dynamic Imports
* CSS
* Code Splitting React Applications

---

## Tree Shaking 

> I just need one tree, do I really need the whole forest

NOTE: Go over the concept of tree shaking

----

### What We Think Is Happening

```js
import { includes } from 'lodash'

// becomes

const includes = require('lodash/includes')

// or

const { includes } = require('lodash')
```

NOTE: Tree shaking does not automatically determine the best
import chain. Its only concern is to remove unnecessary exports

----

### How It Works

1. Analyze all imports/exports in the bundle chain
2. Orphan Unused Exports
3. ???
4. Profit

NOTE: Step 3 is the usage of a tool like uglifyjs to remove the
resulting dead code

----

### Tree Shaking Only Operates On ES2015 IMPORTS/EXPORTS

```
"modules": false
```

NOTE: Show the tree shaking demo in examples/tree-shaking with
lodash and compare bundle sizes with and without tree shaking
enabled

---

## Dynamic Imports

----

```html
<link type="text/css" rel="stylesheet" href="/cdn.com/bootstrap.css">
<link type="text/css" rel="stylesheet" href="/public/styles/site.css">

<script type="text/javascript" src="//cdn.com/jquery.min.js"></script>
<script type="text/javascript" src="//cdn.com/jquery-plugin-one.min.js"></script>
<script type="text/javascript" src="//cdn.com/jquery-plugin-one.two.js"></script>
<script type="text/javascript" src="//cdn.com/jquery-plugin-one.five.js"></script>
<script type="text/javascript" src="//cdn.com/jquery-plugin-one.alpha.js"></script>
<script type="text/javascript" src="//cdn.com/jquery-plugin-one.gamma.js"></script>
<script type="text/javascript" src="//cdn.com/underscore.min.js></scripts>
<script type="text/javascript" src="/public/scripts/page.specific.js?v=otherHash"></script>
```

----

```html
<link type="text/css" rel="stylesheet" href="/cdn.com/bootstrap.css">
<link type="text/css" rel="stylesheet" href="/public/styles/site.css">

<script type="text/javascript" src="/public/scripts/vendor.js?v=someHash"></script>
<script type="text/javascript" src="/public/scripts/page.specific.js?v=otherHash"></script>
```

----

```html
<!-- css is loaded into head from the mega bundle -->
<script type="text/javascript" src="/public/scripts/megabundle.someHash.js"></script>
```

----

> It's Okay To Procrastinate (your script loading)

----

### Pull in scripts later with import()

```js
import('/path/to/module')
  .then(module => {});
```

NOTE: This is only available in Chrome

----

### Webpack understands import()

NOTE: Show code splitting demo, including how code splitting
may not work because a module has already been imported earlier.

----

### Caveats

* Be mindful of your `output.publicPath`
  * If you're using the webpack dev server be sure `devserver.publicPath` is the same as `output.publicPath`
* Cache busting is still going to affect the primary bundle, not just the intended split

---

## Living With(out) Css

----

```html
<!-- css is loaded into head from the mega bundle -->
<script type="text/javascript" src="/public/scripts/megabundle.someHash.js"></script>
```

----

```js

const StyledDiv = styled.div`
  css
`

export default function MyComponent(props) {
  return (
    <StyledDiv ... >
      ...
    </StyledDiv>
  )
}
```

NOTE: In many cases this is fine. In this age of componentization it makes sense for the
styling to live directly next to its component.

----

> Does my css need to live with my components?

NOTE: Demo usage of mini-css-extract-plugin. Sometimes it makes sense to simply use  css as it was originally intended.

----

* Cons
  * Adds complexity to your webpack config
  * Lose the benefits of having styles live directly next to a component
* Pros
  * Javascript is for javascript, so smaller bundle size
  * A css file can be cached

---

## Code Splitting React Components

NOTE: Eventually demo of an app with a bundles split
by each individual page
