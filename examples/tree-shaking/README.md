# Tree Shaking Example

## installation

```shell
npm install
```

## Verifying Tree Shaking

By default tree shaking is "off." In Order to activate tree shaking in this project update the `.babelrc` to include `modules: false`.

```json
{
  "presets": [["env", { "modules": false }]]
}
```
