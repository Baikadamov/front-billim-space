import {useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import axios from "axios";

const SetGrades = () => {
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


                    <div className=" w-5/6 mb-5">
                        <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Имя студента
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                       Assigment 1
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Assigment 2
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Общая оценка
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                       Байкадамов Максат
                                    </th>
                                    <td className="px-6 py-4">
                                        <a href=" " className="hover:underline">FILE NAME . PDF /</a>
                                        <span className="mx-2 text-black">
                                              Оценка :
                                             <input type="number" className="w-20 border-0 text-black " placeholder="0"/>
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href=" " className="hover:underline">FILE NAME . PDF /</a>
                                        <span className="mx-2 text-black">
                                              Оценка :
                                             <input type="number" className="w-20 border-0 text-black " placeholder="0"/>
                                        </span>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <span className="mx-2 text-black">
                                             <input type="number" className="w-20 border-0 text-black " placeholder="90"/>
                                        </span>
                                    </th>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>


                </div>

            </div>
        ) : (
            <p>Loading...</p>
        )}
    </>
}

export default SetGrades