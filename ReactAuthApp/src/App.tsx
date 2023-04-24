
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dasbhoard from "./components/Dashboard";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
        <Routes>
          <Route path="/dashboard" Component={Dasbhoard} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
