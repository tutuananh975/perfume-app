import HomePage from "../pages/HomePage";
import BestSellers from "../pages/BestSellers";
import Brands from "../pages/Brands";
import Customeraccount from "../pages/Customeraccount";
import Fragrance from "../pages/Fragrance";
import Gift from "../pages/Gift";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Help from "../pages/Help";
import Cart from "../pages/Cart";
import { FC } from "react";
import NotSideBarLayOut from "../components/layouts/NotSideBarLayOut";

const publicRoutes: {path: string, component: FC, layout?: any }[] = [
  { path: "/", component: HomePage, layout: NotSideBarLayOut },
  { path: "/best-sellers", component: BestSellers },
  { path: "/brands", component: Brands, layout: NotSideBarLayOut },
  { path: "/customeraccount", component: Customeraccount, layout: null },
  { path: "/fragrance", component: Fragrance, layout: null },
  { path: "/gift", component: Gift },
  { path: "/men", component: Men },
  { path: "/women", component: Women },
  { path: "/help", component: Help, layout: NotSideBarLayOut },
  { path: "/cart", component: Cart, layout: NotSideBarLayOut }
];

const privateRoutes: [] = [];

export { publicRoutes, privateRoutes };