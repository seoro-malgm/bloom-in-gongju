import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./layouts/default.vue"),
      children: [
        {
          path: "",
          component: () => import("./pages/home.vue"),
        },
      ],
    },
  ],
});

router.options.scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return {
      ...savedPosition,
      behavior: "smooth",
    };
  } else {
    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  }
};

export default router;
