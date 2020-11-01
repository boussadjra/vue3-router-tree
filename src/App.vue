<template>
<div class="demo">
    <div>
        <h3>Sidebar menu</h3>
        <vue3-router-tree :items="routes">
            <template #item="{ item }">
                <icon :name="`${item.name.toLowerCase()}`" />
                <span> {{ item.name }}</span>

                <span v-if="item.info" class="chip">{{ item.info }}</span>
            </template>
        </vue3-router-tree>
    </div>
    <div>
        <h3>File structure</h3>
        <vue3-router-tree :items="files">
            <template #item="{ item }">
                <icon :name="`${item.type || 'file'}`" />
                <span> {{ item.name }}</span>

                <span v-if="item.info" :style="{ color: colors[item.info] }">{{
            item.info
          }}</span>
            </template>
        </vue3-router-tree>
    </div>

    <div>
        <h3>Vue 3 docs sidebar</h3>
        <vue3-router-tree :items="docSidebar" activeColor="#42b983" style="background-color: #35495e; color: #f9f9f9"></vue3-router-tree>
    </div>

    <div>
        <h3>Usage with vue router</h3>
        <demo-with-router />
    </div>

</div>
</template>

<script lang="ts">
import {
    defineComponent
} from "vue";
import DemoWithRouter from "./DemoWithRouter";
import Vue3RouterTree from "./components/Vue3RouterTree/index";
import Icon from "./components/icons/Icon.vue";
export default defineComponent({
    data() {
        return {
            routes: [{
                    path: "/",
                    name: "Home",
                    hasIcon: true,
                },
                {
                    path: "/dashboard",
                    name: "Dashboard",
                    hasIcon: true,

                    info: "updated",
                },
                {
                    path: "/component",
                    name: "Components",
                    info: "+5",
                    hasIcon: true,
                    children: [{
                            path: "/alerts",
                            name: "Alerts",
                        },
                        {
                            path: "/avatars",
                            name: "Avatars",
                        },
                        {
                            path: "/buttons",
                            name: "Buttons",
                        },
                        {
                            path: "/forms",
                            name: "Forms",
                            children: [{
                                    path: "/autocompletes",
                                    name: "Autocompletes",
                                },
                                {
                                    path: "/checkboxes",
                                    name: "Checkboxes",
                                },
                                {
                                    path: "/inputs",
                                    name: "Inputs",
                                    children: [{
                                            path: "/file-inputs",
                                            name: "File inputs",
                                        },
                                        {
                                            path: "/text-inputs",
                                            name: "Text inputs",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            path: "/pickers",
                            name: "Pickers",
                            children: [{
                                    path: "/date-picker",
                                    name: "Date picker",
                                },
                                {
                                    path: "/time-picker",
                                    name: "Time picker",
                                },
                                {
                                    path: "/color-picker",
                                    name: "Color picker",
                                },
                            ],
                        },
                    ],
                },
                {
                    path: "/mail",
                    name: "Mail",
                    hasIcon: true,
                    children: [{
                            path: "/sent",
                            name: "Sent",
                        },
                        {
                            path: "/avatars",
                            name: "Avatars",
                        },
                        {
                            path: "/buttons",
                            name: "Buttons",
                        },
                    ],
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

            colors: {
                U: "#44ee44",
                A: "#1222dd",
                M: "#ee2245",
                C: "#4425ff",
            },
        };
    },
    components: {
        Vue3RouterTree,

        Icon,
        DemoWithRouter,
    },
});
</script>

<style lang="scss">
html,
body {
    margin: 0;
    box-sizing: border-box;
    overflow-x: hidden;
}

.demo {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    background-color: #f9f9f9;
    color: #777;
    width: min-content;
    min-width: 280px;
    padding: 24px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 16px;
    width: 100%;

    &>div {
        padding: 8px;
    }
}

.chip {
    padding: 2px 4px;
    background: #f1ac5c;
    color: rgb(66, 65, 65);
    border-radius: 4px;
    max-width: min-content;
}
</style>
