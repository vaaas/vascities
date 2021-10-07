<template>
    <site>
        <username>{{ value.username }}</username>

        <sitename>{{ value.sitename }}</sitename>

        <author>{{ value.author }}</author>

        <lang>{{ value.language }}</lang>

        <blurb v-html='value.blurb'/>

        <links>
            <a v-for='link in value.links' :href='link.target'>{{ link.text }}</a>
        </links>

        <posts>
            <post v-for='post in value.posts'
                v-html='post.contents'
                :timestamp='post.timestamp'
                :filename='post.filename ?? ""'
                :tag='post.tag'
                :state='post.state'/>
        </posts>
    </site>
</template>

<script>
    export default {
        props: {
            value: { required: true, type: Object },
        },

        methods: {
            serialise() {
                return this.$el.innerHTML
            }
        },
    }
</script>
