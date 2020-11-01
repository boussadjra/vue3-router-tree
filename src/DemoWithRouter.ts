import { defineComponent, h } from 'vue';
import Vue3RouterTree from './components/Vue3RouterTree';

import {RouterView} from 'vue-router'
export default defineComponent({

    name:"DemoWithRouter",

    render(){
        return h("div",{}, [h(Vue3RouterTree),h(RouterView)])
    }
})