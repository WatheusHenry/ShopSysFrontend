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
import Dialog from 'primevue/dialog';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';
import Chart from 'primevue/chart';



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
app.component('Dialog', Dialog);
app.component('Chart', Chart);
app.component('DataTable', DataTable);
app.component('Chart', Chart);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);





app.use(router)

app.mount('#app')
