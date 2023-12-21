import {useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import axios from "axios";

const Users = () => {
    const {id} = useParams()
    const [course, setCourse] = useState(null);
    const [studentCount, setStudentCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/course/${id}`);
                setCourse(response.data); // Assuming the response contains the course data
                console.log('Course:', response.data);
                const count = response.data.studentsData.length;
                setStudentCount(count);
            } catch (error) {
                console.error('Error fetching course:', error);
            }
        };

        fetchData();
    }, [id]);
    return <>
        {course ? (
            <div className="p-4 sm:ml-64 mt-5">
                <div>
                    <span className=" text-lg"> Course Name : <span
                        className="font-medium text-xl"> {course.title}</span>  </span>
                    <hr className="my-5"/>
                </div>
                <div className="container course justify-between px-5">
                    <div className=" text-blue-800 font-medium mb-5 ">
                        <div className="py-2">
                            <a href={'/'} className="link"> Задания</a>
                        </div>
                        <div className="py-2">
                            <a href={'/'} className="link">Добавить новое задание</a>
                        </div>
                        <div className="py-2">
                            <a href={'/'} className="link"> Оценки</a>
                        </div>
                        <div className="py-2">
                            <a href={`/course/${course._id}/users`} className="link"> Пользователи</a>
                        </div>
                        <div className="py-2">
                            <a href={'/'} className="link"> Файлы</a>
                        </div>
                        <div className="py-2">
                            <a href={'/'} className="link"> Оценки</a>
                        </div>
                    </div>


                    <div className="tasks mb-5">
                        <span className="text-lg "> Список студентов</span>
                        <p className=" mb-2"> Количество студентов : {studentCount} </p>
                        <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <div className="flex items-center justify-between space-x-4 rtl:space-x-reverse">
                                <div>
                                    Имя
                                </div>
                                <div>
                                    Роль
                                </div>
                            </div>
                            {course.studentsData.map((studentData) => (
                                <li key={studentData._id} className="pb-3 sm:pb-4">
                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full"
                                                 src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <a href="/"
                                               className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Student ID: {studentData.student}
                                            </a>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                email@flowbite.com
                                            </p>
                                        </div>
                                        <div
                                            className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            студент
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-5">
                        Последние оценки
                        <hr/>
                        <div className="mt-2 mb-3">
                            <a href={'/'} className="hover:underline">
                                <div className="text-blue-700">
                                    ISC 2
                                </div>
                                <div className="text-sm">
                                    10 из 20
                                </div>
                            </a>
                        </div>
                        <div className="mt-2 mb-3">
                            <a href={'/'} className="hover:underline">
                                <div className="text-blue-700">
                                    ISC 2
                                </div>
                                <div className="text-sm">
                                    10 из 20
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        ) : (
            <p>Loading...</p>
        )}
    </>
}

export default Users