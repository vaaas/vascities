### MyButton

This is a button with a label. It accepts a prop, `variant`, which changes the looks of the button.

```html
<template>
    <button :class='class'>
        {{ label }}
    </button>
</template>
```

```css
<style>
    .mybutton {
        padding: 0.5rem 1rem;
        border: 1px solid var(--border-colour);
        border-radius: var(--radius);
        background: #fff;
        cursor: pointer;
    }

    .mybutton:hover {
        outline: 1px solid var(--border-colour);
    }

    .mybutton.primary {
        background: var(--primary);
        color: #fff;
    }

    .mybutton.primary:hover {
        background: var(--primary-light);
    }
</style>
```

```javascript
<script>
    export default {
        props: {
            label: { required: true, type: String },
            variant: { default: null },
        },

        computed: {
            class() {
                return ['mybutton', this.variant].filter(I).join(' ')
            }
        },
    }
</script>
```
