import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Sidebar from "./components/Home/sidebar";
import Registration from "./pages/registration";
import Login from "./pages/login";
import Courses from "./pages/courses";
import Course from "./pages/course";
import Grades from "./pages/grades";
import Task from "./pages/task";
import Users from "./pages/users";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Sidebar/>
            <Routes>
                <Route path="" element={<Courses/>}/>
                <Route path="/course/:id/" element={<Course/>}/>
                <Route path="/course/:id/users" element={<Users/>}/>
                <Route path="/task/:id" element={<Task/>}/>
                <Route path="/grades" element={<Grades/>}/>
                <Route path="/registration" element={<Registration/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

