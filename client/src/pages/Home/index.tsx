import { Typography } from "antd";
import { getUserData } from "../../utils/users";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/slices/users";
import { sidebarRoutes } from "../../routes";

const {Title} = Typography;

const Home = () => {
  const userData = getUserData();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setUserData(userData));
  }, [userData]);

  if(!userData) {
    navigate("/login");
    return null;
  };
  return (
    <Title className="text-center mt-4" level={3}>
      Welcome, {userData?.name}!
    </Title>
  );
};

export default Home;
