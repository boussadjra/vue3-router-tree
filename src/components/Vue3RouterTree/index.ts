import { defineComponent, h, Transition, VNode } from 'vue';
import './style.scss'
interface TreeNode {
	name: string;
	path: string;
	component: VNode;
	children: Array<TreeNode>;
	id: number;
info?:string|number|boolean
}
import CaretRight from './CaretRight.vue'
import { RouteRecordRaw, RouterLink } from 'vue-router';


export default defineComponent({
	props: {
		title: {
			type: String,
		},
		items: {
			type: Array as () => Array<TreeNode>
		},
		activeColor: {
			type: String,
			default: "#5d1df1"
		},
		defaultOpen: {
			type: String,
			default: ''
		}
	},
	components: {
		CaretRight
	},
	data() {
		return {
			expandedItemIndex: -1,
			id: 0,
			navigationPath: [] as number[]
		}
	},
	computed: {
		menuItems(): Array<TreeNode> {
			let _items = this.items ? this.items : this.$router.options?.routes || this.$router.getRoutes() ;

			return this.addId(_items)
		}
	},
	mounted() {
		let found = this.menuItems.find(item => item.name === this.defaultOpen)

		if (found) {
			this.expandItem(found)
		}

	},
	methods: {
		addId(items: Array<TreeNode | RouteRecordRaw>): any {
			return items.map(item => {
				return item.children ? { ...item, id: this.id++, children: this.addId(item.children) } : { ...item };
			})
		},
		renderTree(items: Array<TreeNode>): any {
			return items?.map((item, index) => {
				return this.renderItems(item, index)
			})
		}
		,
		expandItem(item: TreeNode) {

			if (this.navigationPath.includes(item.id)) {
				let index = this.navigationPath.findIndex(p => p === item.id)
				this.navigationPath.splice(index);

				this.navigationPath = this.navigationPath.filter(el => el !== item.id)
			} else {
				if (this.menuItems.find(_item => _item.id === item.id) && this.navigationPath.length > 0) {
					this.navigationPath = [];
					this.navigationPath.push(item.id)
				} else {
					this.navigationPath.push(item.id)
				}

			}


		},
		renderItems(item: TreeNode, index: number): any {



			let slotContent = this.$slots.item ?
				this.$slots.item({
					item: item
				}) : item.name

			if (item.children) {
				return h('li', { class: ` vrt-tree vrt-tree--has-children`, style: { color: `${this.navigationPath.includes(item.id) ? this.activeColor : ''}` } },
					[h(CaretRight, { class: `vrt-tree__item_caret ${this.navigationPath.includes(item.id) ? 'vrt-tree__item_caret--open' : ''}`, style: `${this.navigationPath.includes(item.id) ? this.activeColor : ''}` }),
					h('li',
						{
							class: 'vrt-tree__item vrt-tree__item--has-more',
							onClick: ($event: Event) => { $event.stopPropagation(); this.expandItem(item); }
						},
						slotContent),
					h(Transition, { name: "slide" }, this.navigationPath.includes(item.id) ? h('ul',
						{ class: 'vrt-tree' },
						this.renderTree(item.children)) : '')])
			} else {
				return h('li', { class: 'vrt-tree__item' }, item.component ? h(RouterLink, { to: item.path }, item.name) : slotContent)
			}
		},
	},
	render(): VNode {
		return h(h('ul', { class: 'vrt-tree vrt-tree__wrapper' }), this.renderTree(this.menuItems || []));
	},
});
