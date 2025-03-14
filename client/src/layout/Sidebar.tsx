import { Layout, Menu } from "antd";
import { sidebarRoutes } from "../routes";
import LogoSmall from "../assets/logo-sm.svg";
import MenuItem from "antd/es/menu/MenuItem";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;

const Sidebar = ({ collapsed }: { collapsed: boolean }) => {
  const navigate = useNavigate();
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div
        style={{ 
          display: "flex", 
          justifyContent: "center", 
          color: "white",
          alignItems: "center",
          fontSize: "1.5rem",
          padding: "1.5rem",
        }}
      >
        {!collapsed && <span>book</span>}
        <img
          src={LogoSmall}
          alt="logo"
          style={{
            width: "46px",
          }}
        />
        {!collapsed && <span>show</span>}
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[sidebarRoutes[0]?.key as string]}
        items={sidebarRoutes}
        onClick={({key}) => {
          navigate(key);
        }}
      />
    </Sider>
  );
};

export default Sidebar;
