### DefaultWrapper

A simple, good-looking wrapper element. It centres its contents both vertically and horizontally.

```html
<template>
    <div class='defaultwrapper'>
        <section class='contents'>
            <slot/>
        </section>
    </div>
</template>
```

```css
<style>
    .defaultwrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
</style>
```
