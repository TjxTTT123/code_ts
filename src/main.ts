import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";
import { Icon } from "@iconify/vue";
import router from "@/router";
import store from "@/store";

const app = createApp(App);
app.use(router);
app.use(store);
app.component('Icon',Icon)  
app.mount("#app");
