import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import ResetPassword from "./pages/resetPassword";
import Reset from "./pages/reset";

import "./App.css";
import "./styles/global.css";
import React from "react";

const configuration = require('./configuration.json');
const access_points = configuration.access_points;

const path_home = access_points.home;
const path_reset = access_points.reset;
const path_reset_password = access_points.path_reset_password;

class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <Routes>
                    <Route path={path_home} element={<Home />} />
                    <Route path={path_reset} element={<ResetPassword />} />
                    <Route path={path_reset_password} element={<Reset />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
