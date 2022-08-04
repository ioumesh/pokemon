import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Features from "./pages/Features/Features";
import Login from "./pages/Login/Login";
import PokemonContext from "./PokemonContext";
import Search from "./pages/Search/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="appContainer">
          <PokemonContext>
            <Topbar />
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="features" element={<Features />} />
                <Route path="login" element={<Login />} />
                <Route path="search" element={<Search />} />
              </Route>
            </Routes>
          </PokemonContext>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
