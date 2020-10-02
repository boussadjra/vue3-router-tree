<template>
<div class="demo">
    <vue-router-tree :items="routes" defaultOpen="Home" title="My Tree" activeColor="#77dd42"></vue-router-tree>

</div>
</template>

<script lang="ts">
import {
    defineComponent
} from "vue";
import {
    RouteRecordRaw
} from "vue-router";

import VueRouterTree from "./components/VueRouterTree/index";
export default defineComponent({
    data() {
        return {
            routes: [{
                    path: "/",
                    name: "Home",
                },
                {
                    path: "/dashboard",
                    name: "Dashboard",
                },
                {
                    path: "/component",
                    name: "Components",
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
                    ],
                },
                {
                    path: "/mail",
                    name: "Mail",
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
        VueRouterTree,
    },
});
</script>

<style lang="scss">
#demo {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
