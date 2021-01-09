export default {
	BasicExample: `<template>
  <div>
       <vue3-router-tree :items="routes"> </vue3-router-tree>
  </div>
</template>

<script>
import Vue3RouterTree from "vue3-router-tree";

export default {
  name: "BasicExample",
  data: () => ({
    routes: [
      {
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
        children: [
          {
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
            children: [
              {
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
                children: [
                  {
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
            children: [
              {
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
        children: [
          {
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
  methods: {},
  components: {
    Vue3RouterTree,
  },
  mounted() {},
};
</script>

  `,
  WithIcons: `<template>
  <div>
       <vue3-router-tree :items="routes"> 
       <template #item="{ item }">
                <div class="flex  space-x-2 items-center">
                    <icon :name="item.name.toLowerCase()" />
                    <span> {{ item.name }}</span>
                </div>

         </template>
       </vue3-router-tree>
  </div>
</template>

<script>
import Vue3RouterTree from "vue3-router-tree";

export default {
  name: "BasicExample",
  data: () => ({
    routes: [
      {
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
        children: [
          {
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
            children: [
              {
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
                children: [
                  {
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
            children: [
              {
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
        children: [
          {
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
  methods: {},
  components: {
    Vue3RouterTree,
  },
  mounted() {},
};
</script>

  `,
  DefaultOpenExample: `<template>
  <div>
       <vue3-router-tree :items="routes" defaultOpen="Components"> 
       <template #item="{ item }">
                <div class="flex  space-x-2 items-center">
                    <icon :name="item.name.toLowerCase()" />
                    <span> {{ item.name }}</span>
                </div>

         </template>
       </vue3-router-tree>
  </div>
</template>

<script>
import Vue3RouterTree from "vue3-router-tree";

export default {
  name: "BasicExample",
  data: () => ({
    routes: [
      {
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
        children: [
          {
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
            children: [
              {
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
                children: [
                  {
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
            children: [
              {
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
        children: [
          {
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
  methods: {},
  components: {
    Vue3RouterTree,
  },
  mounted() {},
};
</script>

  `,
 OpenAll: `<template>
  <div>
       <vue3-router-tree :items="routes" open-all> 
       <template #item="{ item }">
                <div class="flex  space-x-2 items-center">
                    <icon :name="item.name.toLowerCase()" />
                    <span> {{ item.name }}</span>
                </div>

         </template>
       </vue3-router-tree>
  </div>
</template>

<script>
import Vue3RouterTree from "vue3-router-tree";

export default {
  name: "BasicExample",
  data: () => ({
    routes: [
      {
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
        children: [
          {
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
            children: [
              {
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
                children: [
                  {
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
            children: [
              {
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
        children: [
          {
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
  methods: {},
  components: {
    Vue3RouterTree,
  },
  mounted() {},
};
</script>

  `
};
