### MySelect

MySelect is an HTML select dropdown select, but its options are defined through the `options` prop in the following format:

	[
		{ text: "Text", value: 1 },
		{ text: "Other text", value: true }
	]

```html
<template>
    <select class='myselect' :value='modelValue' @input='$emit("update:modelValue", $event.target.value)'>
        <option v-for='option in options' :value='option.value'>{{ option.text }}</option>
    </select>
</template>
```

```css
<style>
	.myselect {
		padding: 0.5rem;
	}
</style>
```

```javascript
<script>
    export default {
        props: {
            modelValue: { required: true },
            options: { required: true, type: Array },
        },
    }
</script>
```
