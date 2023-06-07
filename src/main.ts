import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import initializeIcons from "./icons";

const icons = initializeIcons();

createApp(App).component("font-awesome-icon", icons).use(router).mount("#app");
