import { createApp } from 'vue'
import router from "./router/index";
import App from "./App.vue";
import "./styles/index.scss"
import 'prismjs'
import './styles/prism-nocture-birds.css'
import Prism from '@/devComponents/Prism'
import TabView from "@/devComponents/navigation/TabView.vue";
let app = createApp(App);

app.component('Prism',Prism)
app.component('TabView',TabView)
app.use(router).mount("#app");
