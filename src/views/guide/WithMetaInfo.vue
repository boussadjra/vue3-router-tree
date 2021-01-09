<template>
<div>
    <div class="section__title">Open a default path</div>
    <p class="py-4 px-2">
        We could use `item` slot to change the default display by adding icons and meta info to our items
    </p>
    <tab-view :items="items" @change-tab="changeTab"></tab-view>
    <div class="p-4 bg-green-50">
        <div v-if="showCode">
            <prism language="html" :code="code"></prism>
        </div>
        <vue3-router-tree v-else :items="routes" class="bg-purple-100 ">
            <template #item="{ item }">
                <div class="flex  space-x-2 items-center">
                    <icon :name="`${item.name.toLowerCase()}`" />
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
    name: "WithMetaInfo",
    data: () => ({
        code: snippets.WithMetaInfo,
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
        Icon,
    },
    mounted() {},
};
</script>
