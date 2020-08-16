# Using Vue in Markdown

## Browser API Access Restrictions

Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the [universal code requirements](https://ssr.vuejs.org/en/universal.html). In short, make sure to only access Browser / DOM APIs in `beforeMount` or `mounted` hooks.

If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in `<ClientOnly>` component:
::: tip
This is a tip
:::
##

>
## test if it will show

:electric_plug:

jklsahdfglöjkashdfg sdlöfg hjskldhjf göäklshd jfgköl
```js {2}
// fkljhasd f
let a = 10
function () {
    return 'asjdajsd'
}
```
##