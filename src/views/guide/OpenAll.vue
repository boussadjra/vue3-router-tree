<template>
<div>
    <div class="section__title">Expand all items</div>
    <p class="py-4 px-2">
        This is useful when working with table of content
    </p>
    <tab-view :items="items" @change-tab="changeTab"></tab-view>
    <div class="p-4 bg-green-50">
        <div v-if="showCode">
            <prism language="html" :code="code"></prism>
        </div>
        <vue3-router-tree v-else :items="docSidebar" open-all class="bg-purple-100 ">
            <template #item="{ item }">
                <div class="flex  space-x-2 items-center">
                    <icon class="text-purple-800" :name="`${item.name.toLowerCase()}`" />
                    <span> {{ item.name }}</span>
                    <span v-if="item.info" class="chip px-1  bg-purple-300 rounded text-gray-700 text-xs">{{ item.info }}</span>
                </div>

            </template>
        </vue3-router-tree>
    </div>

</div>
</template>

<script>
import Vue3RouterTree from "@/components/Vue3RouterTree/index";
import snippets from "@/utils/snippets";
import Icon from '@/components/icons/Icon.vue';
export default {
    name: "OpenAll",
    data: () => ({
        code: snippets.OpenAll,
        showCode: false,
        items: [{
                header: "Preview",
            },
            {
                header: "Code",
            },
        ],
        docSidebar: [{
                name: "Installation",
                children: [{
                        name: "Releases Notes",
                    },
                    {
                        name: "Vue Devtools",
                    },
                    {
                        name: "CDN",
                    },
                    {
                        name: "NPM",
                    },
                    {
                        name: "CLI",
                    },
                    {
                        name: "Vite",
                    },
                ],
            },
            {
                name: "Introduction",
                children: [{
                        name: "What is Vue.js?",
                    },
                    {
                        name: "Getting Started",
                    },
                    {
                        name: "Declarative Rendering",
                    },
                    {
                        name: "Handling User Input",
                    },
                    {
                        name: "Conditionals and Loops",
                    },
                    {
                        name: "Composing with Components",
                        children: [{
                            name: "Relation to Custom Elements",
                        }, ],
                    },
                ],
            },
            {
                name: "Application & Component Instances",
                children: [{
                        name: "Creating an Application Instance",
                    },
                    {
                        name: "The Root Component",
                    },
                    {
                        name: "Component Instance Properties",
                    },
                    {
                        name: "Lifecycle Hooks",
                    },
                    {
                        name: "Lifecycle Diagram",
                    },
                ],
            },
            {
                name: "Template Syntax",
                children: [{
                        name: "Interpolations",
                        children: [{
                                name: "Text",
                            },
                            {
                                name: "Raw HTML",
                            },
                            {
                                name: "Attributes",
                            },
                            {
                                name: "Using JavaScript Expressions",
                            },
                        ],
                    },
                    {
                        name: "Directives",
                        children: [{
                                name: "Arguments",
                            },
                            {
                                name: "Dynamic Arguments",
                            },
                            {
                                name: "Modifiers",
                            },
                        ],
                    },
                ],
            },
            {
                name: "Data Properties and Methods",
            },
            {
                name: "Computed Properties and Watchers",
            },
            {
                name: "Class and Style Bindings",
            },
            {
                name: "Binding Inline Styles",
            },
        ],
    }),
    computed: {},
    methods: {

        changeTab(item) {
            this.showCode = item.header === "Code";
        },
    },
    components: {
        Vue3RouterTree,
        Icon,
    },
    mounted() {},
};
</script>
