export const getUserData = () => {
  const data = localStorage.getItem("user");
  const user = data ? JSON.parse(data) : null;
  return user;
}

export const getCurrentRole = () => {
  const user = getUserData();
  return user?.role;
}