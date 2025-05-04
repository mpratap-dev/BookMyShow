import { ROLES } from "../constants/auth";
import adminRoutes from "./admin";
import partnerRoutes from "./partner";

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

const routes: Route[] = [...adminRoutes, ...partnerRoutes];

export default routes;
