export const DASHBOARD_PAGE_URL = "/dashboard";
export const LOGIN_PAGE_URL = "/login";
export const REGISTER_PAGE_URL = "/register";
export const HOME_PAGE_URL = "/";

export const ADMIN_BASE = `${DASHBOARD_PAGE_URL}/admin`;
export const ADMIN = {
  MOVIES: `${ADMIN_BASE}/movies`,
  THEATERS: `${ADMIN_BASE}/theaters`
}

export const PARTNER_BASE = `${DASHBOARD_PAGE_URL}/partner`;
export const PARTNER = {
  THEATERS: `${PARTNER_BASE}/theaters`
}
