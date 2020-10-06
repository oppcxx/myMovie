import Home from "./pages/home";
import List from "./pages/list";
export const routes = [
  {
    path: "/",
    component: Home,
    label: "首页",
    exact: true,
  },
  {
    path: "/list",
    component: List,
    label: "热映",
    exact: false,
  },
];
