import { createRouter, createWebHistory } from "vue-router";
import Articles from "@/components/articles/index.vue";
import Contact from "@/components/contact/index.vue";
import Home from "@/components/home.vue";
import Article from "@/components/articles/article.vue";
import NotFound from "@/components/404.vue";
import Notify from "@/components/notify.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/articles", component: Articles },
    {
      path: "/contact",
      components: {
        default: Contact,
        notify: Notify,
      },
      name: "contact",
    },
    { path: "/articles/:articleID", component: Article, props: true },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
});

export default router;
