<template>
<div>
    <div class="section__title">Basic example</div>
    <p class="py-4 px-2">
        The following example shows a basic usage of the tree menu, for example
        for rendering a table of content
    </p>
    <tab-view :items="items" @change-tab="changeTab"></tab-view>
    <div class="p-4 bg-green-50">
        <div v-if="showCode">
            <prism language="html" :code="code"></prism>
        </div>
        <vue3-router-tree v-else :items="routes" class="bg-purple-100 "> </vue3-router-tree>
    </div>

</div>
</template>

<script>
import Vue3RouterTree from "@/components/Vue3RouterTree/index";
import snippets from "@/utils/snippets";
export default {
    name: "BasicExample",
    data: () => ({
        code: snippets.BasicExample,
        showCode: false,
        items: [{
                header: "Preview",
            },
            {
                header: "Code",
            },
        ],
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
    }),
    computed: {},
    methods: {

        changeTab(item) {
            this.showCode = item.header === "Code";
        },
    },
    components: {
        Vue3RouterTree,
    },
    mounted() {},
};
</script>
