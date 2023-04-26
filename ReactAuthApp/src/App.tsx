import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dasbhoard from "./components/Dashboard";
import { getAuthStatusInitialState, AuthStatus } from "./constants";

function App() {
  const [authState, setAuthState] = useState<AuthStatus>(getAuthStatusInitialState);

  function handleLogin (data: {user: object}) {
    setAuthState({loggedInStatus: "LOGGED_IN", user: data.user})
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home handleLogin={handleLogin} loggedInStatus={authState.loggedInStatus} />}/>
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<Dasbhoard loggedInStatus={authState.loggedInStatus} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
