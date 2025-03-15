import { Layout, theme } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import routes from "../routes";
import { useAppSelector } from "../store";
import { useEffect } from "react";
import { ROLES } from "../constants/auth";
import { ADMIN_MOVIES_PAGE_URL } from "../routes/admin";

const { Content } = Layout;

const AppContent = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const user = useAppSelector((state) => state.user.user);
  
  const redirectAsPerRole = (role: `${ROLES}`) => {    
    switch (role) {
      case ROLES.ADMIN: {
        navigate(ADMIN_MOVIES_PAGE_URL);
        break;
      }
      default: 
        navigate("/");
    }
  }

  useEffect(() => {
    redirectAsPerRole(user.role);
  }, [user.role]);
  
  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <Routes>
        {routes.map(({ url, component }, index) => {
          return <Route key={index} path={url} Component={component} />;
        })}
      </Routes>
    </Content>
  );
};

export default AppContent;
