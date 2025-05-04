import { useEffect, useState } from "react";
import { useAppSelector } from "../store";
import routes from "../routes";
import { ItemType, MenuItemType } from "antd/es/menu/interface";

const useSidebarMenuItems = () => {
  const [sideBarMenuItems, setSidebarMenuItems] = useState<ItemType<MenuItemType>[]>([]);
  const user = useAppSelector((state) => state.user.user);

  const filterSidebarRoutes = () => {
    const filteredRoutes = (routes
      .filter((route) => route.sidebar && route.roles?.includes(user.role))
      .map((route) => ({
        ...route.sidebar,
        key: route.sidebar ? route.sidebar?.url || route.url : route.url,
      })) || []) as ItemType<MenuItemType>[];
    setSidebarMenuItems(filteredRoutes);
  };

  useEffect(() => {
    console.log(user);
    
    filterSidebarRoutes();
  }, [user.role]);

  return {
    sideBarMenuItems,
  };
};

export default useSidebarMenuItems;
