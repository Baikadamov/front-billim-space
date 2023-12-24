import {useParams} from 'react-router-dom';
import React, {useState} from 'react';
import axios from 'axios';
import AuthService from "../service/authservice";

const Task = () => {
  const { id } = useParams();

  const [file, setFile] = React.useState(null);
  const [data, setData] = React.useState('');
  const [grade, setGrade] = React.useState(0);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/assignment/${id}`);
        setData(response.data);
        console.log('Task:', response.data);

        // get grade
        const user = JSON.parse(localStorage.getItem('user'));

        console.log(user.user.id);
        console.log(response.data._id);

        const gradeResponse = await axios.post('http://localhost:5000/api/assignment/grade', {
          assignmentId: response.data._id,
          studentId: user.user.id,
        });

        setGrade(gradeResponse.data);
      } catch (error) {
        console.error('Error fetching course:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleFileChange = (event) => {
    if (event.target && event.target.files) {
      setFile(event.target.files[0]);
    } else {
      setFile(undefined);
    }
  };

  const handleUpload = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    const formData = new FormData();
    formData.append('file', file);
    formData.append('assignmentId', id);
    formData.append('userId', user.user.id);

    console.log(formData);

    try {
      await axios
        .put(`http://localhost:5000/api/file/test/${id}/${user.user.id}`, formData)
        .then(() => {
          console.log('File uploaded successfully');
        });
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };

  return (
    <>
      <div className="p-4 sm:ml-64 mt-5">
        <div className="container course justify-between px-5">
          <div className="mb-5 w-full sm:w-2/3">
            <h4 className="text-3xl text-left  ">{data.title} </h4>
            <hr className="my-2 " />
            <div className="flex justify-between mb-2">
              <div>
                <span className="font-medium"> Дедлайн: </span>
                <span> 25 декабря </span>
              </div>
              <div>
                <span className="font-medium"> Максимальное количество баллов:</span>
                <span> 100 </span>
              </div>
              <div>
                <span className="font-medium"> <p>Тип {data.typeOfGrade}</p></span>
              </div>
              <div>
                <span className="font-medium"> Оценка: </span>
                <span className="text-red-600 font-medium"> {grade} </span>
              </div>
            </div>
            <hr className="my-2 " />
            <div>
              <p>{data.description}</p>
            </div>
            <div className="mt-5">
              <div className="w-full">
                <label className="flex justify-center w-full h-24 px-24 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  <span className="flex items-center space-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2">
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <span className="font-medium text-gray-600">
                        {file ? (
                            <span>{file.name}</span>
                        ) : (
                            <>
                              Drop files to Attach, or
                              <span className="text-blue-600 underline"> browse</span>
                            </>
                        )}
                      </span>
                  </span>
                                    <input
                                        onChange={handleFileChange}
                                        type="file"
                                        name="file_upload"
                                        className="hidden"
                                    />
                                </label>
                            </div>
                            <div className="mt-5 ">
                                <button
                                    onClick={handleUpload}
                                    className="p-2  bg-blue-700 rounded-lg border-2 border-blue-700 text-white hover:text-blue-700 hover:bg-white text-sm">
                                    Отправить задание
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Task;
