import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import vuetify from "./vuetify";
import Toast from "vue-toastification";
import toastOptions from "./utils/constants/toastify";
import "vue-toastification/dist/index.css";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(vuetify);
app.use(Toast, toastOptions);

app.mount("#app");
