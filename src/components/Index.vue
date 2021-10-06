<template>
    <NoSites v-if='sites.length === 0' :root='root'/>
</template>

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
