### Index

This is the first component the user sees when the application is loaded. It presents the user with a list of sites, or a prompt to create a site.

```html
<template>
    <NoSites v-if='sites.length === 0' :root='root'/>
</template>
```

```javascript
<script>
    import NoSites from './NoSites.vue'

    export default {
        props: {
            root: { required: true, type: Object },
        },

        components: {
            NoSites,
        },

        computed: {
            sites() {
                return fs.readdirSync(this.root.rootdir)
            }
        },
    }
</script>
```
