import { defineComponent, h, PropType, resolveDirective, Transition, VNode, withDirectives } from 'vue';
import './style.scss'
interface TreeNode {
	name: string;
	path: string;
	component: VNode;
	children: Array<TreeNode>
}

import CaretRight from './CaretRight.vue'





export default defineComponent({
	props: {
		title: {
			type: String,
		},
		items: {
			type: Array as () => Array<TreeNode>
		}
	},
	components: {
		CaretRight
	},
	data() {
		return {
			expandedItemIndex: -1,

		}
	},
	
	methods: {

		renderTree(items: Array<TreeNode>): any {
			return items?.map((item, index) => {

				return this.renderItems(item, index)

			})
		},
		expandItem(index: number) {
			this.expandedItemIndex = index === this.expandedItemIndex ? -1 : index
		},
		renderItems(item: TreeNode, index: number): any {
			

			if (item.children) {

				return h('li', { class: 'vrt-tree vrt-tree--has-children' },
					[h(CaretRight, { class: 'vrt-tree__item_caret' }),
					h('li',
						{
							class: 'vrt-tree__item vrt-tree__item--has-more',
							onClick: ($event: Event) => this.expandItem(index)
						},
						item.name),

					h(Transition, { name: "slide" }, this.expandedItemIndex === index ? h('ul',
						{ class: 'vrt-tree' },
						this.renderTree(item.children)) :
						h('span', ''))])
			} else {
				return h('li', { class: 'vrt-tree__item' }, item.name)
			}
		},
	},
	render(): VNode {
		return h(h('ul', { class: 'vrt-tree' }), this.renderTree(this.items || []));
	},
});
