import { computed, defineComponent, h, onMounted, ref, Transition, VNode, watch, watchEffect } from 'vue';
import './style.scss'

import CaretRight from './CaretRight.vue'
import { RouteRecordRaw, RouterLink, useRouter } from 'vue-router';

interface TreeNode {
	name: string;
	path: string;
	component: VNode;
	children: Array<TreeNode>;
	id: number;
	info?: string | number | boolean
}


export default defineComponent({
	props: {

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
		},
		excludeField: {
			type: String,
			default: ''
		},
		openAll: {
			type: Boolean,
			default: false
		},
		noMaxWidth: {
			type: Boolean,
			default: false
		}
	},
	components: {
		CaretRight
	},
	setup(props, { slots }) {

		const expandedItem = ref<TreeNode | null>(null);
		const selectedItem = ref<TreeNode | null>(null);
		const id = ref(0);
		const navigationPath = ref<Array<number>>([])

		const router = useRouter()


		const items = computed(() => {

			let routes = router.options?.routes || router.getRoutes();

			let _items = props.items ? props.items : routes.filter(route => !route.meta || route.meta && !route.meta[props.excludeField]);

			return addId(_items)
		})

		watchEffect(() => {
			findOpenItems(items.value)


		})


		/***
		 * functions
		 */
		function findOpenItems(_items: TreeNode[]) {
			_items.forEach((_item: TreeNode) => {
				if (_item.children) {
					findOpenItems(_item.children);
				}

				if (props.defaultOpen.includes(_item.name)) {

					navigationPath.value.push(_item.id)
				}
			})


		}

		function renderTree(_items: Array<TreeNode | RouteRecordRaw>) {
			return (_items as any[]).map((item: TreeNode, index) => {
				return <div class="  px-4  cursor-pointer">

					<div onClick={(event: Event) => {
						event.stopPropagation();
						if (item.children) {
							expandItem(item)
						} else {
							if (expandedItem.value?.children.find((_item) => _item.id === item.id)) {

							} else {
								navigationPath.value = []
							}

							selectedItem.value = item;
						}

					}}
						style={{ color: selectedItem.value?.id === item.id ? props.activeColor : '' }}
						class={`flex items-center justify-between p-2 hover:text-xl `}

					>
					{renderSlot(item)}
						<span class="pl-4">{item.children && <CaretRight />}</span>
					</div>

					<div  >

						{((item.children) && (navigationPath.value.includes(item.id) || props.openAll)) && renderTree(item.children)}


					</div>



				</div>
			})
		}

		function renderSlot(item: TreeNode) {
			return slots.item ? slots.item({
				item: item
			}) : item.name
		}

		function addId(items: Array<TreeNode | RouteRecordRaw>): any {
			return items.map(item => {
				return item.children ? { ...item, id: id.value++ ,children: addId(item.children) } : { ...item, id: id.value++, };
			})
		}

		function expandItem(item: TreeNode) {

			if (navigationPath.value.includes(item.id)) {
				let index = navigationPath.value.findIndex(p => p === item.id)
				navigationPath.value.splice(index);

				navigationPath.value = navigationPath.value.filter(el => el !== item.id)
			} else {
				let found =items.value.find((_item: TreeNode) => _item.id === item.id)

				
				if (found && navigationPath.value.length > 0) {
					navigationPath.value = [];
					navigationPath.value.push(item.id)
				} else {
					navigationPath.value.push(item.id)
				}
				
				expandedItem.value = item;
			}


		}
		/**
		 * 
		 * jsx template
		 */
		return () => (
			<div class="   py-2" style={{ minWidth: 240,maxWidth:props.noMaxWidth?'none':'max-content' }}>
				{
					renderTree(items.value)
				}

			</div>
		)
	}

});
