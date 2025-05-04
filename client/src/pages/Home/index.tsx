import { Button, Typography } from "antd";
import { getUserData } from "../../utils/users";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/slices/users";
import { LOGIN_PAGE_URL } from "../../routes/URL";

const {Title} = Typography;

const Home = () => {
  const userData = getUserData();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setUserData(userData));
  }, [userData]);

  if(!userData) {
    navigate(LOGIN_PAGE_URL);
    return null;
  };
  return (
    <Title className="text-center mt-4" level={3}>
      Welcome, {userData?.name}!
      {/* <Link></Link> */}
      <Button href="/dashboard/admin/movies">Admin</Button>
    </Title>
  );
};

export default Home;
