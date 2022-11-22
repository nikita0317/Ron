import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import ResetPassword from "./pages/resetPassword";
import Reset from "./pages/reset";

import "./App.css";
import "./styles/global.css";
import React from "react";

class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/reset" element={<Reset />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
