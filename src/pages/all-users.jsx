import React, {useEffect, useState} from "react";
import axios from "axios";

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [count,SetCount] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/users/`);
                setUsers(response.data); // Assuming the response contains the course data
                console.log('Users', response.data.length);
                SetCount(response.data.length)
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <div className="p-4 sm:ml-64">
                <div className="p-4 ">
                    <p className="font-medium text-2xl"> Все пользователи  </p>
                    <p className="text-sm">Количество всех пользователей : {count}</p>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table
                            className="w-full mt-5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Имя
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Почта
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Роль
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {users.map((user) => (

                                <tr key={user._id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {user.firstname}     {user.lastname}
                                    </th>
                                    <td className="px-6 py-4">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.role === 'TEACHER'? 'Преподователь' : 'Студент'}
                                    </td>
                                </tr>
                            ))}

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AllUsers