export const getUserData = () => {
  const data = localStorage.getItem("user");
  const user = data ? JSON.parse(data) : null;
  return user;
}