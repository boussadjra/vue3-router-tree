import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
let app=createApp(App)
app.config.globalProperties.test="test"
app.use(router).mount('#app')
