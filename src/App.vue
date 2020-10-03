<template>
<div class="demo">
    <vue3-router-tree :items="routes" title="My Tree">
        <template #item="{item}">
            <component :is="'Carbon'+item.name.replace(/ /g,'')"></component>
            {{item.name}}
        </template>
    </vue3-router-tree>

</div>
</template>

<script lang="ts">
import {
    defineComponent
} from "vue";

import CarbonHome from "./components/icons/CarbonHome.vue";
import CarbonDashboard from "./components/icons/CarbonDashboard.vue";
import CarbonComponents from "./components/icons/CarbonComponents.vue";
import CarbonMail from "./components/icons/CarbonMail.vue";

import Vue3RouterTree from "./components/Vue3RouterTree/index";
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
                },
                {
                    path: "/component",
                    name: "Components",
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
        };
    },
    components: {
        Vue3RouterTree,
        CarbonComponents,
        CarbonDashboard,
        CarbonHome,
        CarbonMail,
    },
});
</script>

<style lang="scss">
.demo {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;

    width: min-content;
    min-width: 280px;
}
</style>
