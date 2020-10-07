import Home from "./pages/home";
import Movies from "./pages/movies";
import Sort from "./pages/sort";
export const routes = [
  {
    path: "/",
    component: Home,
    label: "首页",
    exact: true,
  },
  {
    path: "/sort",
    component: Sort,
    label: "分类",
    exact: false,
  },
  {
    path: "/movies",
    component: Movies,
    label: "影库",
    exact: false,
  },
];
