# Vue 3 router tree

This component is based on **Vue.js 3**, it represents your routes or items as a tree view, by default takes it takes the routes configuration as items, but you could provide your custom items that respects the following format :


```js
[
  {
      path:'/somePath',//optional
      name:'someName',//required
      component:SomeComponent //optional but if it's provided the tree node will be a link that redirects to this component
      children:[


      ]
  }

]

```

You could also add any other field that you need it when you want to customize the items rendering

## Demo

[LIVE DEMO](https://boussadjra.github.io/vue3-router-tree/) or you could check this [boilerplate](https://codesandbox.io/s/vue-3-router-tree-demo-wzxr1?file=/src/App.vue) on codesandbox
## Installation

     npm install vue3-router-tree --save

## Usage

#### With router :

```html
<vue3-router-tree />
```

#### with custom items :

```html
<template>
	<div class="demo">
		<vue3-router-tree :items="routes"> </vue3-router-tree>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import Vue3RouterTree from '.vue3-router-tree';
	export default defineComponent({
		data() {
			return {
				routes: [
					{
						path: '/',
						name: 'Home',
						hasIcon: true,
					},
					{
						path: '/dashboard',
						name: 'Dashboard',
						hasIcon: true,
					},
					{
						path: '/component',
						name: 'Components',
						hasIcon: true,
						children: [
							{
								path: '/alerts',
								name: 'Alerts',
							},
							{
								path: '/avatars',
								name: 'Avatars',
							},
							{
								path: '/buttons',
								name: 'Buttons',
							},
							{
								path: '/forms',
								name: 'Forms',
								children: [
									{
										path: '/autocompletes',
										name: 'Autocompletes',
									},
									{
										path: '/checkboxes',
										name: 'Checkboxes',
									},
								],
							},
						],
					},
				],
			};
		},
	});
</script>
```

### props :

| Name        | default   | description                                                                          |
| ----------- | --------- | ------------------------------------------------------------------------------------ |
| items       | []        | the tree items or if not provided the component renders the current available routes |
| activeColor | "#5d1df1" | the color of the active sub node                                                     |

## slots :

| Name | description                         |
| ---- | ----------------------------------- |
| item | override the default item rendering |

