import React, { useState } from "react";

import { Layout } from "antd";
import Sidebar from "./Sidebar";
import AppHeader from "./Header";
import AppContent from "./Content";



const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar collapsed={collapsed}/>
      <Layout>
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <AppContent />
      </Layout>
    </Layout>
  );
};

export default Dashboard;
