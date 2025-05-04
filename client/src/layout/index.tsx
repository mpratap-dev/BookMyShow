import React, { useEffect, useState } from "react";

import { Layout } from "antd";
import Sidebar from "./Sidebar";
import AppHeader from "./Header";
import AppContent from "./Content";
import { useNavigate } from "react-router-dom";
import useSidebarMenuItems from "../hooks/useSidebarMenuItems";
import { setUserData } from "../store/slices/users";
import { getUserData } from "../utils/users";
import { useDispatch } from "react-redux";

const Dashboard: React.FC = () => {
  const userData = getUserData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const { sideBarMenuItems } = useSidebarMenuItems();

  useEffect(() => {
    dispatch(setUserData(userData));
  }, [JSON.stringify(userData)]);

  useEffect(() => {
    const firstValidPage = sideBarMenuItems[0]?.key;
    if (firstValidPage) navigate(String(firstValidPage));
  }, [JSON.stringify(sideBarMenuItems)]);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <AppContent />
      </Layout>
    </Layout>
  );
};

export default Dashboard;
