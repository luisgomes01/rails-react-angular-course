import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  loggedInStatus: boolean;
  handleLogout: () => void;
}

export default function Dasbhoard({ loggedInStatus, handleLogout }: Props) {
    const navigate = useNavigate()

    function handleLogoutClick() {
        axios
          .delete("http://localhost:3001/logout", { withCredentials: true })
          .then(() => {
            handleLogout();
            if(!loggedInStatus) {
                navigate("/")
            }
          })
          .catch((error) => {
            console.log("logout error", error);
          });
      }

      useEffect(() => {
        if(!loggedInStatus) {
            navigate("/")
        }
      }, [loggedInStatus, navigate])

  return (
    <nav>
      <div>
        <h1>Dashboard</h1>
        <h1>Status: {loggedInStatus.toString()}</h1>
        <button onClick={() => handleLogoutClick()}>Logout</button>
      </div>
    </nav>
  );
}
