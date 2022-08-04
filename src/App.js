import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Features from "./pages/Features/Features";
import Login from "./pages/Login/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="appContainer">
          <Topbar />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="features" element={<Features />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
