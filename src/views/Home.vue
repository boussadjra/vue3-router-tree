<template>
<section class="flex flex-col p-4 text-gray-700 pb-40" style="overflow-y: auto; max-height: calc(100vh - 64px)">
    <div class="w-full flex flex-col space-y-4 py-10 justify-center items-center">
        <h1 class="text-4xl font-bold">Vue 3 Router Tree</h1>
        <article class="px-8 w-11/12 sm:w-10/12 lg:w-9/12">
            This component is based on <b class="font-bold">Vue.js 3</b>, it
            represents your routes or items as a tree view, by default takes it
            takes the routes configuration as items, but you could provide your
            custom items that respects the following format :

            <div class="py-4">
                <prism language="javascript" :code="code"></prism>
            </div>
            <h2 class="self-start text-xl font-bold">Props</h2>

            <table class="w-full overflow-x-scroll divide-y divide-gray-200 mt-4">
                <thead class="bg-gray-50">
                    <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                        Description
                    </th>
                    <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                        default
                    </th>
                </thead>

                <tbody class="bg-white divide-y divide-gray-200 text-sm">
                    <tr v-for="prop in propDetails" :key="prop.name" class="transition-all hover:bg-gray-50 hover:shadow-sm">
                        <td class="px-6 pt-4 whitespace-nowrap flex flk">
                            {{ prop.name }}
                        </td>
                        <td class="px-6 py-4">
                            {{ prop.desc }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap" :style="{ color: prop.default }">
                            {{ prop.default }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 class="self-start text-xl font-bold mb-4 mt-8">Slots</h2>

            <table class="w-full overflow-x-scroll divide-y divide-gray-200 mt-4">
                <thead class="bg-gray-50">
                    <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                        Description
                    </th>
                </thead>

                <tbody class="bg-white divide-y divide-gray-200 text-sm">
                    <tr class="transition-all hover:bg-gray-50 hover:shadow-sm">
                        <td class="px-6 pt-4 whitespace-nowrap flex flk">item</td>
                        <td class="px-6 py-4">override the default item rendering</td>
                    </tr>
                </tbody>
            </table>
            <h2 class="self-start text-xl font-bold mb-4 mt-8">Demo</h2>

            <div class="p-4">
                <vue3-router-tree :items="files" no-max-width class="w-80 bg-p-indigo-800 rounded text-white">
                    <template #item="{ item }">
                        <div class="flex justify-between items-center w-full hover:font-bold">
                            <div class="flex items-center">
                                <icon :name="`${item.type || 'file'}`" />
                                <span class="ml-2 text-sm"> {{ item.name }}</span>
                            </div>
                            <span class="px-1 text-xs" :class="colors[item.info]">{{
                  item.info
                }}</span>
                        </div>
                    </template>
                </vue3-router-tree>
            </div>
        </article>
    </div>
</section>
</template>

<script>
import TabView from "@/devComponents/navigation/TabView.vue";
import Vue3RouterTree from "@/components/Vue3RouterTree/index";
import Icon from "@/components/icons/Icon.vue";
export default {
    name: "App",
    data: () => ({
        code: `[
  {
      path:'/somePath',//optional
      name:'someName',//required
      component:SomeComponent //optional but if it's provided the tree node will be a link that redirects to this component
      meta:{ //optional
          // you could add a property that specify the excluded items/routes
      },
      children:[

      ]
  }

]`,

        propDetails: [{
                name: "items",
                desc: "the tree items or if not provided the component renders the current available routes",
                default: "current routes",
            },
            {
                name: "active-color",
                desc: "specify the selected item color",
                default: "#5d1df1",
            },
            {
                name: "default-open",
                desc: "specify the default opened path",
                default: "''",
            },
            {
                name: "exclude-field",
                desc: "In your route config you could specify a field inside meta option which will be used to exclude ",
                default: "''",
            },
            {
                name: "open-all",
                desc: "Expand all items that have children",
                default: "false",
            },
        ],
        files: [{
                name: ".git",
                type: "folder",
            },
            {
                name: "node_modules",
                type: "folder",
            },
            {
                name: "public",
                type: "folder",
                children: [{
                        name: "static",
                        type: "folder",
                        children: [{
                            name: "logo.png",
                            file: "png",
                            info: "U",
                        }, ],
                    },
                    {
                        name: "favicon.ico",
                        file: "png",
                    },
                    {
                        name: "index.html",
                        file: "html",
                    },
                ],
            },
            {
                name: ".gitignore",
                file: "txt",
            },
            {
                name: "babel.config.js",
                file: "js",
                info: "M",
            },
            {
                name: "package.json",
                file: "json",
                info: "M",
            },
            {
                name: "README.md",
                file: "md",
                info: "U",
            },
            {
                name: "vue.config.js",
                file: "js",
                info: "C",
            },
            {
                name: "yarn.lock",
                file: "txt",
                info: "+1",
            },
        ],

        colors: {
            M: "text-yellow-300",
            U: "text-green-400",
            C: "text-purple-700",
            "+1": "text-red-500",
        },
    }),
    components: {
        Vue3RouterTree,
        Icon,
    },
};
</script>
