import { Route } from ".";
import { ROLES } from "../constants/auth";
import {
  FundProjectionScreenOutlined,
} from "@ant-design/icons";
import Theater from "../pages/Shared/Theaters";
import { PARTNER } from "./URL";

const partnerRoutes: Route[] = [
  {
    url: `${PARTNER.THEATERS}/:id`,
    component: Theater,
    exact: true,
    private: true,
    roles: [ROLES.PARTNER]
  },
  {
    url: PARTNER.THEATERS,
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
