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
            <input type='file' accept='image/png, image/jpeg' @change='x => value_copy.icon = x.target.files[0].path'/>
        </LabelForm>

        <div class='flex end'>
            <MyButton variant='primary'
                @click='() => update ? update_site() : create_site()'
                :label='update ? "Update" : "Create"'/>
        </div>

        <SiteSerialiser ref='serialiser' :value='value_copy' />
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
	 import SiteSerialiser from './SiteSerialiser.vue'

    export default {
        components: {
            LabelForm,
            DefaultWrapper,
            MyButton,
            MySelect,
            SiteSerialiser,
        },

        props: {
            root: { required: true, type: Object },
            value: { required: false, default: null, },
        },

        computed: {
            update() { return this.value !== null },

            valid() {
                return
                    this.value_copy.username.length > 0 &&
                    this.value_copy.sitename.length > 0 &&
                    this.value_copy.author.length > 0 &&
                    this.value_copy.lang.length > 0
            },
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
                pages: [],
                icon: '',
            },
            langs: Object.entries(langs).map(x => ({ text: x[0], value: x[1] })),
        }},

        methods: {
            update_site() {
                fs.mkdirSync(path.join(this.root.rootdir, this.value_copy.sitename))
                fs.mkdirSync(path.join(this.root.rootdir, this.value_copy.sitename, 'render'))
                if (this.value_copy.icon.length && this.value_copy.icon.length > 0 && !this.value_copy.icon.startsWith('icon')) {
	                fs.copy(this.value_copy.icon, path.join(this.root.rootdir, this.value_copy.sitename, 'render', 'icon' + path.extname(this.value_copy.icon)))
                    this.value_copy.icon = 'icon' + path.extname(this.value_copy.icon)
		        }
                fs.writeFileSync(path.join(this.root.rootdir, this.value_copy.sitename, 'site.xml'), this.$refs.serialiser.$el.innerHTML)
                this.root.route('Index')
			},

            create_site() {
                fs.mkdirSync(path.join(this.root.rootdir, this.value_copy.sitename))
                fs.mkdirSync(path.join(this.root.rootdir, this.value_copy.sitename, 'render'))
                if (this.value_copy.icon.length && this.value_copy.icon.length > 0) {
	                fs.copy(this.value_copy.icon, path.join(this.root.rootdir, this.value_copy.sitename, 'render', 'icon' + path.extname(this.value_copy.icon)))
                    this.value_copy.icon = 'icon' + path.extname(this.value_copy.icon)
		        }
                fs.writeFileSync(path.join(this.root.rootdir, this.value_copy.sitename, 'site.xml'), this.$refs.serialiser.$el.innerHTML)
                this.root.route('Index')
            },
        },
    }
</script>
```
