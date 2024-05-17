import type { RouteRecordRaw } from "vue-router";
import A from "@/views/a.vue";
import B from "@/views/b.vue";
import Search from "@/views/search.vue";
import RankList from "@/views/rankList.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/rankList" },
  { path: "/a", component: A },
  { path: "/b", component: B },
  { path: "/search", component: Search },
  { path: "/rankList", component: RankList },
];

export default routes;
