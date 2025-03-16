import { Route } from ".";
import { ROLES } from "../constants/auth";
import {
  FundProjectionScreenOutlined,
} from "@ant-design/icons";
import Theater from "../pages/Shared/Theaters";

export const PARTNER_BASE_URL = "/partner";
export const PARTNER_THEATER_PAGE_URL = `${PARTNER_BASE_URL}/theaters`;

const partnerRoutes: Route[] = [
  {
    url: `${PARTNER_THEATER_PAGE_URL}/:id`,
    component: Theater,
    exact: true,
    private: true,
    roles: [ROLES.PARTNER]
  },
  {
    url: PARTNER_THEATER_PAGE_URL,
    component: Theater,
    exact: true,
    private: true,
    roles: [ROLES.PARTNER],
    sidebar: {
      label: "Theater",
      icon: <FundProjectionScreenOutlined/>,
    }
  }
];

export default partnerRoutes;
