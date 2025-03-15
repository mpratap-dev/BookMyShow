import { Route } from ".";
import { ROLES } from "../constants/auth";
import Movies from "../pages/Admin/Movies";
import {
  FundProjectionScreenOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Theater from "../pages/Admin/Theaters";

export const ADMIN_BASE_URL = "admin";
export const ADMIN_MOVIES_PAGE_URL = `${ADMIN_BASE_URL}/movies`;
export const ADMIN_THEATER_PAGE_URL = `${ADMIN_BASE_URL}/theater`;

const adminRoutes: Route[] = [
  {
    url: `${ADMIN_MOVIES_PAGE_URL}/:id`,
    component: Movies,
    exact: true,
    private: true,
    roles: [ROLES.ADMIN]
  },
  {
    url: ADMIN_MOVIES_PAGE_URL,
    component: Movies,
    exact: true,
    private: true,
    roles: [ROLES.ADMIN],
    sidebar: {
      label: "Movies",
      icon: <VideoCameraOutlined/>,
    }
  },
  {
    url: ADMIN_THEATER_PAGE_URL,
    component: Theater,
    exact: true,
    private: true,
    roles: [ROLES.ADMIN],
    sidebar: {
      label: "Theater",
      icon: <FundProjectionScreenOutlined/>,
    }
  }
];

export default adminRoutes;
