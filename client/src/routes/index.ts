import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { ROLES } from "../constants/auth";
import adminRoutes from "./admin";

export type Route = {
  url: string;
  component: () => React.ReactElement;
  exact?: boolean;
  private?: boolean;
  roles?: `${ROLES}`[];
  sidebar?: {
    label: string;
    icon: React.ReactNode;
    url?: string;
  };
};

const routes: Route[] = [...adminRoutes];

export const sidebarRoutes = (routes
  .filter((route) => route.sidebar)
  .map((route) => ({
    ...route.sidebar,
    key: route.sidebar ? (route.sidebar?.url || route.url) : route.url,
  })) || []) as ItemType<MenuItemType>[];

  

export default routes;
