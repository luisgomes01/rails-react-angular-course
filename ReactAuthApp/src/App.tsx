import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Dasbhoard from "./components/Dashboard";
import { getAuthStatusInitialState, AuthStatus } from "./constants";

function App() {
  const [authState, setAuthState] = useState<AuthStatus>(
    getAuthStatusInitialState
  );

  function handleLogin(data: { user: object }) {
    setAuthState({ loggedInStatus: true, user: data.user });
  }

  function handleLogout() {
    setAuthState({
      loggedInStatus: false,
      user: {},
    });
  }

  function checkLoginStatus() {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in && authState.loggedInStatus === false) {
          setAuthState({
            loggedInStatus: true,
            user: response.data.user,
          });

          return;
        }

        if (!response.data.logged_in && authState.loggedInStatus === true) {
          setAuthState({
            loggedInStatus: false,
            user: {},
          });

          return;
        }
      })
      .catch((error) => console.error("check login error", error));
  }

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                loggedInStatus={authState.loggedInStatus}
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/dashboard"
            element={<Dasbhoard loggedInStatus={authState.loggedInStatus} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
