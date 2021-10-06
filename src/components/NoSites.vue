<template>
    <DefaultWrapper>
        <h1>It looks like you have no sites. Would you like to make one?</h1>
        <MyButton label='Yes' variant='primary' @click='root.route("MakeSite")'/>
    </DefaultWrapper>
</template>

<script>
    import DefaultWrapper from './DefaultWrapper'
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
