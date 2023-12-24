import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './index.css';
import Sidebar from './components/Home/sidebar';
import Registration from './components/registration';
import Login from './components/login';
import Courses from './pages/courses';
import Course from './pages/course';
import Grades from './pages/grades';
import Task from './pages/task';
import CreateTask from './pages/create-task';
import AllUsers from './pages/all-users';
import PrivateRoute from "./service/privateRoute";
import SetGrades from "./pages/set-grades";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <Sidebar/>
            <Routes>
                <Route exact path="" element={<PrivateRoute/>}>
                    <Route exact path="" element={<Courses/>}/>
                </Route>
                <Route exact path='/grades' element={<PrivateRoute/>}>
                    <Route exact path='/grades' element={<Grades/>}/>
                </Route>
                <Route exact path='/course/:id/grades' element={<PrivateRoute/>}>
                    <Route exact path='/course/:id/grades' element={<SetGrades/>}/>
                </Route>
                <Route exact path='/create-task' element={<PrivateRoute/>}>
                    <Route exact path='/create-task' element={<CreateTask/>}/>
                </Route>
                <Route exact path='/all-users' element={<PrivateRoute/>}>
                    <Route exact path='/all-users' element={<AllUsers/>}/>
                </Route>
                <Route exact path='/task/:id' element={<PrivateRoute/>}>
                    <Route exact path='/task/:id' element={<Task/>}/>
                </Route>
                <Route exact path='/course/:id/' element={<PrivateRoute/>}>
                    <Route exact path='/course/:id/' element={<Course/>}/>
                </Route>
                <Route exact path='*' element={<PrivateRoute/>}>
                    <Route exact path='*' element={<Courses/>}/>
                </Route>

                <Route path="/registration" element={<Registration/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<Navigate to="/login"/>}/>
            </Routes>
        </BrowserRouter>
    </>,
);
