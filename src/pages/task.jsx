import { useParams } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

const Task = () => {
  const { id } = useParams();

  const [file, setFile] = React.useState(null);

  const handleFileChange = (event) => {
    // setFile(e.target.files[0]);

    if (event.target && event.target.files) {
      setFile(event.target.files[0]);
    } else {
      setFile(undefined);
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:5000/api/file/test', formData);
      console.log('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };

  return (
    <>
      <div className="p-4 sm:ml-64 mt-5">
        <div>
          <span className=" text-lg"> Course ID : {id} </span>
          <hr className="my-5" />
        </div>
        <div className="container course justify-between px-5">
          <div className=" text-blue-800 font-medium mb-5 ">
            <div className="py-2">
              <a href="/" className="">
                {' '}
                О курсе
              </a>
            </div>
            <div className="py-2">
              <a href="/" className="link">
                {' '}
                Задания
              </a>
            </div>
            <div className="py-2">
              <a href="/" className="link">
                {' '}
                Оценки
              </a>
            </div>
            <div className="py-2">
              <a href="/course" className="link">
                {' '}
                Пользователи
              </a>
            </div>
            <div className="py-2">
              <a href="/" className="link">
                {' '}
                Файлы
              </a>
            </div>
            <div className="py-2">
              <a href="/" className="link">
                {' '}
                Оценки
              </a>
            </div>
          </div>

          <div className="mb-5 w-full sm:w-2/3">
            <h4 className="text-3xl text-left  ">Лабораторная работа 1 </h4>
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
                <span className="font-medium"> Тип</span>
                <span> ВСК 2 </span>
              </div>
              <div>
                <span className="font-medium"> Оценка: </span>
                <span className="text-red-600 font-medium"> 60 </span>
              </div>
            </div>
            <hr className="my-2 " />
            <div>
              <p>
                Для оценки финального проекта по предмету MEAN Stack следующие критерии:
                Функциональность (25 баллов): Реализация основных функций, связанных с выбранными
                темами. Работоспособность всех компонентов и модулей. Взаимодействие между Angular,
                Express и MongoDB. Дизайн и пользовательский опыт (15 баллов): Удобство
                использования интерфейса. Внешний вид и структура веб-приложения. Адаптивность
                дизайна к разным устройствам. Безопасность (10 баллов): Защита от уязвимостей, таких
                как инъекции, атаки CSRF, XSS и других. Аутентификация и авторизация пользователей.
                Тестирование (10 баллов):
              </p>
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
                      Drop files to Attach, or
                      <span className="text-blue-600 underline">browse</span>
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

          <div className="mb-5 mr-10">
            Результат
            <hr />
            <div className="mt-2 mb-3">
              <a href="/" className="hover:underline">
                <div className="text-blue-700">ISC 2</div>
                <div className="text-sm">10 из 20</div>
              </a>
            </div>
            <div className="mt-2 mb-3">
              <a href="/" className="hover:underline">
                <div className="text-blue-700">ISC 2</div>
                <div className="text-sm">10 из 20</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
