import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Icons from '@/components/ui/Icons.vue'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { MaskInput } from 'vue-3-mask';


const app = createApp(App)
const pinia = createPinia();

app.use(pinia);
pinia.use(piniaPluginPersistedstate)

app.component('Icons', Icons);
app.component('MaskInput', MaskInput);

app.use(router)

app.mount('#app')
