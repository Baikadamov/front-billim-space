import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import AuthService from "../service/authservice";

const Course = () => {
    const {id} = useParams();
    const [course, setCourse] = useState(null);
    const [assignments, setAssignments] = useState([]);
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/course/${id}`);
                setCourse(response.data); // Assuming the response contains the course data
                setAssignments(response.data.assignments);
                console.log('Course:', response.data);
            } catch (error) {
                console.error('Error fetching course:', error);
            }
        };

        const user = AuthService.getCurrentUser();
        console.log(user)
        if (user) {
            setCurrentUser(user);
            console.log("User email:", user.user.email);
            console.log("User role:", user.user.role);
        }

        fetchData();
    }, [id]);
    return (
        <>
            {course ? (
                <div className="p-4 sm:ml-64 mt-5">
                    <div>
            <span className=" text-lg">
              {' '}
                Название Курса : <span className="font-medium text-xl"> {course.title}</span>{' '}
            </span>
                        <hr className="my-5"/>
                    </div>
                    <div className="container course justify-between px-5">
                        <div className=" text-blue-800 font-medium mb-5 ">
                            <div className="py-2">
                                <a href={`/course/${course._id}`} className="link hover:underline">
                                    Задания
                                </a>
                            </div>
                            {currentUser && (currentUser.user.role === 'TEACHER') && (
                                <div className="py-2">
                                    <a href={'/create-task'} className="link hover:underline">
                                        Добавить новое задание
                                    </a>
                                </div>
                            )}
                            <div className="py-2">
                                <a href={`/course/${course._id}/grades`} className="link hover:underline">
                                    {' '}
                                    Оценки
                                </a>
                            </div>
                            <div className="py-2">
                                <a href={`/all-users`} className="link hover:underline">
                                    {' '}
                                    Пользователи
                                </a>
                            </div>
                        </div>

                        <div className=" w-4/5 mb-5">
                            <p className="text-xl font-medium"> {course.title} </p>
                            <p className="mb-4"> {course.description} </p>
                            <div className="border-2">
                                <p className="font-medium p-4 bg-gray-100   "> Новые задания </p>
                                <hr/>

                                {assignments.map((item, index) => {
                                    return (
                                        <div>
                                            <div className="bg-white rounded py-5 p-4 hover:bg-blue-50">
                                                <a href={`/task/${item._id}`} className="hover:underline ">
                                                    {' '}
                                                    {item.title}{' '}
                                                </a>
                                            </div>
                                            <hr/>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="container mt-14 ">
                                <div className="border-2">
                                    <p className="font-medium p-4 bg-gray-100   "> Выполненные работы </p>
                                    <hr/>
                                    <div>
                                        <div className="bg-white rounded py-5 p-4 hover:bg-blue-50">
                                            <a href={'/'} className="hover:underline ">
                                                {' '}
                                                Лабораторная работа номер 2{' '}
                                            </a>
                                        </div>
                                        <hr/>
                                    </div>
                                    <div>
                                        <div className="bg-white rounded py-5 p-4 hover:bg-blue-50">
                                            <a href="/task/1/" className="hover:underline">
                                                {' '}
                                                Лекция 1{' '}
                                            </a>
                                        </div>
                                        <hr/>
                                    </div>
                                    <div>
                                        <div className="bg-white rounded py-5 p-4 hover:bg-blue-50">
                                            <a href="/task/1/" className="hover:underline">
                                                {' '}
                                                Лекция 1{' '}
                                            </a>
                                        </div>
                                        <hr/>
                                    </div>
                                    <div>
                                        <div className="bg-white rounded py-5 p-4 hover:bg-blue-50">
                                            <a href={'/'} className="hover:underline">
                                                {' '}
                                                Лекция 1{' '}
                                            </a>
                                        </div>
                                        <hr/>
                                    </div>
                                    <div>
                                        <div className="bg-white rounded py-5 p-4 hover:bg-blue-50">
                                            <a href={'/'} className="hover:underline">
                                                {' '}
                                                Лекция 1{' '}
                                            </a>
                                        </div>
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default Course;
