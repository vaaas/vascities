<template>
    <component :is='component' v-bind='bound_props'/>
</template>

<style>
    html {
        font-size: 20px;
        background: #eee;
        min-height: 100vh;
        width: 100vw;
        font-family: sans-serif;

        --border-colour: rgba(0,0,0,0.25);
        --radius: 0.5rem;
        --primary: #69F;
        --primary-light: #7AF;
    }

    body {
        margin: 0;
        min-height: 100vh;
    }

    .w100 { width: 100%; }

    .center { text-align: center; }

    .doublecenter {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .fullh { height: 100vh; }

    input, textarea {
        font-size: 1rem;
        padding: 0.25rem 0.5rem;
        width: 100%;
    }

    textarea { height: 10ex; }
</style>

<script>
    import Index from './Index.vue'
    import MakeSite from './MakeSite.vue'

    export default {
        components: {
            Index,
            MakeSite,
        },

        data() { return {
            component: 'Index',
            bound_props: { root: this },
            V: {},
        }},

        computed: {
            rootdir() {
                if (this.system === 'linux')
                    return path.join(os.homedir(), '.local', 'share', 'vascities')
                else
                    return path.join(os.homedir(), 'AppData', 'Local', 'vascities')
            },

            system() {
                switch (os.type()) {
                    case 'Linux': return 'linux'
                    case 'Windows_NT': return 'windows'
                }
            },
        },

        mounted() {
            fs.mkdirSync(this.rootdir, { recursive: true })
        },

        methods: {
            route(component, props={}) {
                this.component = component
                this.bound_props = { ...props, root: this }
            },
        },
    }
</script>
