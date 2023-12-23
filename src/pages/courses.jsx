import React, {useEffect, useState} from "react";
import axios from 'axios';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/courses/');
                // Assuming each course has a 'description' property
                const truncatedCourses = response.data.map(course => ({
                    ...course,
                    description: truncateDescription(course.description, 140) // Adjust the max length as needed
                }));
                setCourses(truncatedCourses);
                console.log('Courses:', truncatedCourses);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchData();
    }, []);

    // Truncate the description function
    const truncateDescription = (description, maxLength) => {
        return description.length > maxLength
            ? `${description.slice(0, maxLength)}...`
            : description;
    };
    // The rest of your component logic here

    return (
        <div>
            <div className="p-4 sm:ml-64">
                <div className="p-4 ">
                    <span className="font-medium text-2xl p-3 mb-5 ">Сводка по курсам</span>
                    <div className="mx-auto mt-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                            {
                                courses.map((item, index) => (

                                    <div className="mx-3  " key={item._id}  >
                                        <div
                                            className="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                                            <div className="p-5">
                                                <a href="/">
                                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">    {item.title} </h5>
                                                </a>
                                                <p className="mb-2">{item.description}</p>
                                                <a href={`/course/${item._id}`}
                                                   className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    Open
                                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 14 10">
                                                        <path stroke="currentColor" strokeLinecap="round"
                                                              strokeLinejoin="round" strokeWidth="2"
                                                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Courses