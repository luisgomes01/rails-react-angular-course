import axios from "axios";
import { useNavigate } from "react-router-dom";
import Registration from "./auth/Registration";
import Login from "./auth/Login";

interface Props {
  loggedInStatus: boolean;
  handleLogin: (data: { user: object }) => void;
  handleLogout: () => void;
}

export default function Home({
  loggedInStatus,
  handleLogin,
  handleLogout,
}: Props) {
  const navigate = useNavigate();

  function handleSuccessfulAuth(data: { user: object }) {
    handleLogin(data);
    navigate("/dashboard");
  }

  function handleLogoutClick() {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then(() => {
        handleLogout();
      })
      .catch((error) => {
        console.log("logout error", error);
      });
  }

  return (
    <div>
      <h1>Home</h1>
      <h1>Status: {loggedInStatus.toString()}</h1>
      <button onClick={() => handleLogoutClick()}>Logout</button>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
}
