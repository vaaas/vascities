### LabelForm

A simple label with an attached input. Useful in forms.

```html
<template>
    <fieldset class='labelform'>
        <label>{{ label }}</label>
        <div :style='style'>
            <slot/>
        </div>
    </fieldset>
</template>
```

```css
<style>
    .labelform {
        display: flex;
        border: none;
    }

    .labelform > * { flex: 1; }
</style>
```

```javascript
<script>
    export default {
        props: {
            label: { required: true, type: String },
            flex: { required: false, default: 1 },
        },

        computed: {
            style() {
                return 'flex: ' + this.flex
            },
        },
    }
</script>
```
