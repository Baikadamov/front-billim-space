import React, {useEffect, useState} from "react";
import axios from "axios";

const Grades = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/courses/');

                setCourses(response.data);
                console.log('Courses:', courses);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <div className="p-4 sm:ml-64">
                <div className="p-4 ">
                    <p className="font-medium text-2xl"> Общая оценка по курсам </p>
                    <hr/>
                    <div className="mt-3 text-lg p-3">
                        {
                            courses.map((item, index) => (
                                <div key={item._id} className="mb-2 w-2/4  ">
                                    <div className="flex">
                                        <a href={`/course/${item._id}`}
                                           className="mb-2 text-xl hover:underline hover:text-blue-700  text-gray-900 dark:text-white">    {item.title} </a>
                                        <span className="ms-auto font-medium">92 %</span>
                                    </div>
                                    <hr/>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grades