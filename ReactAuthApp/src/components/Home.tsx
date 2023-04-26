import { useNavigate } from "react-router-dom";
import Registration from "./auth/Registration";
import Login from "./auth/Login";

interface Props {
  loggedInStatus: string
  handleLogin: (data: {user: object}) => void
}

export default function Home({loggedInStatus, handleLogin}: Props) {
  const navigate = useNavigate()

  function handleSuccessfulAuth(data: {user: object}) {
    handleLogin(data)
    navigate("/dashboard")
  }

  return (
    <div>
      <h1>Home</h1>
      <h1>Status: {loggedInStatus}</h1>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
}
