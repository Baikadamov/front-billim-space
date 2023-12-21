import React from "react";
import axios from 'axios';
const Courses = () => {

    const [courses, setCourses] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/courses/');
                setCourses(response.data); // Assuming the response contains the courses data
                console.log('Courses:', response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchData();
    }, []); // The empty dependency array means this effect will run once when the component mounts

    // The rest of your component logic here

    return (
        <div>
            <div className="p-4 sm:ml-64">
                <div className="p-4 ">
                    <span className="text-l font-semibold">Сводка по курсам</span>
                    <div className="mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="mx-3">
                                <div
                                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div className="bg-amber-500 mb-2 ">
                                    </div>

                                    <div className="p-5">
                                        <a href="/">
                                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Mean </h5>
                                        </a>
                                        <p className="mb-2">The MEAN stack is a JavaScript-based framework for
                                            developing web applications. MEAN is named after MongoDB, Express, Angular,
                                            and Node</p>
                                        <a href="/course/2"
                                           className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Open
                                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                      stroke-linejoin="round" stroke-width="2"
                                                      d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Courses