import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

createApp(App).component("fas", FontAwesomeIcon).mount("#app");
