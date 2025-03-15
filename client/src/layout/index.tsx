import React, { useEffect, useState } from "react";

import { Layout } from "antd";
import Sidebar from "./Sidebar";
import AppHeader from "./Header";
import AppContent from "./Content";
import { useNavigate } from "react-router-dom";
import { sidebarRoutes } from "../routes";

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const firstValidPage = sidebarRoutes[0]?.key;
    if (firstValidPage) navigate(String(firstValidPage));
  }, []);

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
