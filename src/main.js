import { createApp } from "vue";
import router from "./router";
import { Icon } from "@iconify/vue";

import "./assets/style/index.css";
import App from "./App.vue";

const app = createApp(App);

// Icon 컴포넌트를 전역적으로 등록
app.component("Icon", Icon);

app.use(router).mount("#app");
