import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Home from "./components/Home/home";
import Registration from "./pages/registration";
import Login from "./pages/login";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/registration" element={<Registration/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

