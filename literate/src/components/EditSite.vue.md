### EditSite

This component lets the user edit or create a site. Through the `value` prop, we can determine if the user is editing or creating a site.

```html
<template>
    <DefaultWrapper class='editsite'>
        <LabelForm label='User Name' flex='3'>
            <input v-model='value_copy.username'/>
        </LabelForm>

        <LabelForm label='Site Title' flex='3'>
            <input v-model='value_copy.sitename'/>
        </LabelForm>

        <LabelForm label='Author Name' flex='3'>
            <input v-model='value_copy.author'/>
        </LabelForm>

        <LabelForm label='Language' flex='3'>
            <MySelect :options='langs' v-model='value_copy.lang'/>
        </LabelForm>

        <LabelForm label='Blurb' flex='3'>
            <textarea v-model='value_copy.blurb'/>
        </LabelForm>

        <LabelForm label='Links' flex='3'>
            <table v-if='value_copy.links.length'>
                <thead>
                    <tr>
                        <th>Target</th>
                        <th>Text</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for='link in value_copy.links'>
                        <td><input v-model='link.target'/></td>
                        <td><input v-model='link.text'/></td>
                    </tr>
                </tbody>
            </table>

            <div class='flex'>
                <MyButton @click='value_copy.links.push({ target: "", text: "" })' label='Add Link'/>
            </div>
        </LabelForm>

        <LabelForm label='Icon' flex='3'>
            <input v-model='value_copy.icon'/>

            <div class='flex'>
                <MyButton label='Select' @click='icon_select'/>
            </div>
        </LabelForm>

        <div class='flex end'>
            <MyButton variant='primary'
                @click='update ? update_site : create_site'
                :label='update ? "Update" : "Create"'/>
        </div>
    </DefaultWrapper>
</template>
```

```css
<style scoped>
    .editsite > .contents > * { min-width: 30rem; }
</style>
```

```javascript
<script>
    import LabelForm from './LabelForm.vue'
    import DefaultWrapper from './DefaultWrapper.vue'
    import MyButton from './MyButton.vue'
    import MySelect from './MySelect.vue'
    import langs from '../data/langs.js'

    export default {
        components: {
            LabelForm,
            DefaultWrapper,
            MyButton,
            MySelect,
        },

        props: {
            root: { required: true, type: Object },
            value: { required: false, default: null, },
        },

        computed: {
            update() { return value !== null },
        },

        data() { return {
            value_copy: this.value ?? {
                username: '',
                sitename: '',
                author: '',
                lang: 'en-gb',
                blurb: '',
                links: [],
                posts: [],
                langs,
            },
        }},

        methods: {
            update_site() {},

            create_site() {},

            icon_select() {
                const pathnames = electron.dialog.showOpenDialogSync({
                    title: 'Select an icon file',
                    filters: [
                        { name: 'Images', extensions: ['jpg', 'jpeg', 'png', 'gif'] },
                        { name: 'All Files', extensions: ['*'] }
                    ],
                    properties: [ 'openFile' ],
                })
                if (!pathnames) return
                this.value_copy.icon = pathnames[0]
            },
        },
    }
</script>
```
