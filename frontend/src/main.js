import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from "primevue/button"
import InputText from "primevue/inputtext"
import Password from 'primevue/password';
import Card from 'primevue/card';

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.component('Button', Button);
app.component('InputText', InputText);
app.component('Password', Password);
app.component('Card', Card);



app.use(router)

app.mount('#app')
