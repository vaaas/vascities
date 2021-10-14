## Components

In Vue, our application is separated in "components". Vue also provides a reactivity library, which allows dataflow programming. When a variable is updated, it sends signals to other variables that watch it, so that they can recalculate themselves.

Vue permits "Single File Components" in which a component's HTML, JS, and CSS is written within a single file.

### Main

The main component serves as a router for other components, as well as a storage area for global functions and variables. It passes a pointer to itself to other components as a prop. We import all the components we can route to and then add them to the components object.

```html src/components/Main.vue
<template>
    <component :is='component' v-bind='bound_props'/>
</template>
```

```javascript src/components/Main.vue
<script>
    import Index from './Index.vue'
    import EditSite from './EditSite.vue'

    export default {
        components: {
            Index,
            EditSite,
        },

        data() { return {
            component: 'Index',
            bound_props: { root: this },
        }},
```

We are going to store the site data in a  directory dedicated to our application. Different OSes provide different directories. We figure out this directory, the rootdir.

```javascript src/components/Main.vue
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
```

Of course, when application is first launched, our rootdir may not even exist, so we use the node.js fs API to create it.

```javascript src/components/Main.vue
	mounted() {
		fs.mkdirSync(this.rootdir, { recursive: true })
	},
```

We use this component's route method to change the currently visible component.

```javascript src/components/Main.vue
	methods: {
		route(component, props={}) {
			this.component = component
			this.bound_props = { ...props, root: this }
		},
	},
}
</script>
```
