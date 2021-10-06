<template>
    <DefaultWrapper class>
        <LabelForm label='User Name' flex='3'>
            <input/>
        </LabelForm>

        <LabelForm label='Site Title' flex='3'>
            <input/>
        </LabelForm>

        <LabelForm label='Author Name' flex='3'>
            <input/>
        </LabelForm>

        <LabelForm label='Language' flex='3'>
            <input/>
        </LabelForm>

        <LabelForm label='Blurb' flex='3'>
            <textarea/>
        </LabelForm>

        <LabelForm label='Links' flex='3'>
            <input/>
        </LabelForm>

        <LabelForm label='Icon' flex='3'>
            <input/>
        </LabelForm>
    </DefaultWrapper>
</template>

<style scoped>
    .labelform { width: 30rem; }
</style>

<script>
    import LabelForm from './LabelForm.vue'
    import DefaultWrapper from './DefaultWrapper'

    export default {
        components: {
            LabelForm,
            DefaultWrapper,
        },

        props: {
            root: { required: true, type: Object },
        },
    }
</script>
