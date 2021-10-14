### NoSites

This is the component that is presented to the user when there are no sites found. It prompts the user to create a site.

```html
<template>
    <DefaultWrapper>
        <h1>It looks like you have no sites. Would you like to make one?</h1>
        <MyButton label='Yes' variant='primary' @click='root.route("EditSite")'/>
    </DefaultWrapper>
</template>
```

```javascript
<script>
    import DefaultWrapper from './DefaultWrapper.vue'
    import MyButton from './MyButton.vue'
    import Card from './Card.vue'

    export default {
        components: {
            MyButton,
            Card,
            DefaultWrapper,
        },

        props: {
            root: { required: true, type: Object },
        },
    }
</script>
```
