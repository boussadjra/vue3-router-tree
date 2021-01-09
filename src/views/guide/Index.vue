<template>
<div class="flex flex-row">
    <aside class="md:flex flex-col bg-p-indigo-50 py-6 w-64 sticky min-h-screen shadow-lg">

        <div class="flex w-full py-4 overflow-x-hidden">
            <!--  <ul class="flex flex-col w-full  overflow-auto">
                <li class="relative w-full " v-for="(component, index) in components" :key="index">
                    <router-link active-class="text-p-indigo-500 bg-p-indigo-200" class="relative flex  text-gray-600 w-full pl-4 p-2 items-center" :to="'/guide/'+component.path">

                        <span class="text-sm py-1 whitespace-nowrap">{{ component.name }}</span>
                    </router-link>
                </li>
            </ul> -->

            <vue3-router-tree class="bg-p-indigo-50 w-64 max-w-min" exclude-field="exludedOnSidebar" :defaultOpen="'Guide'">
                <template #item="{ item }">
                    <div class="flex space-x-2 items-center">
                        <router-link class="relative flex text-gray-600 w-full items-center" :to="'/guide/' + item.path">
                            <span class="text-sm py-1 whitespace-nowrap">{{
                  item.name
                }}</span>
                        </router-link>
                    </div>
                </template>
            </vue3-router-tree>
        </div>
    </aside>

    <section class="w-full transition-all overflow-x-hidden" style="overflow-y: auto; max-height: calc(100vh - 64px)">
        <div class="w-full items-center sticky top-0 z-20 flex bg-gray-100"></div>
        <main class="pl-8 pr-16 pt-4 pb-32 w-full">
            <router-view></router-view>
        </main>
    </section>
</div>
</template>

<script>
import Vue3RouterTree from "@/components/Vue3RouterTree/index";
import {
    routes
} from "@/router";
export default {
    name: "guide",
    computed: {
        components() {
            return routes.find((route) => route.path.includes("/guide")).children;
        },
    },
    components: {
        Vue3RouterTree,
    },

    mounted() {
        console.log("---------route-----------");
        console.log(this.$route);
        console.log("--------------------");
    },
};
</script>

<style>
</style>
