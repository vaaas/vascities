### Card

A nice card, with a border and lighter background. Useful for presenting articles.

```html
<template>
    <div class='card'>
        <header v-if='title'>
            {{ title }}
        </header>

        <section>
            <slot/>
        </section>
    </div>
</template>
```

```css
<style>
    .card {
        background: #fff;
        border-radius: var(--radius);
        border: 1px solid var(--border-colour);
        box-shadow: 0 0 20px var(--border-colour);
        transition: box-shadow ease 0.33s;
    }

    .card:hover {
        box-shadow: 0 8px 40px var(--border-colour);
    }

    .card > section { padding: 1rem; }

    .card > header {
        font-size: 2rem;
        padding: 0.5rem;
        border-radius: var(--radius) var(--radius) 0 0;
        background: #eee;
        border-bottom: 4px solid var(--border-colour);
    }
</style>
```

```javascript
<script>
    export default {
        props: {
            title: { required: false, default: null },
        },
    }
</script>
```
