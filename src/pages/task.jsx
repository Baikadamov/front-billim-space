import {useParams} from 'react-router-dom'

const Task = () => {
    const {id} = useParams()
    return <>
        <div className="p-4 sm:ml-64 mt-5">
            <div>
                <span className=" text-lg"> Course ID : {id} </span>
                <hr className="my-5"/>
            </div>
            <div className="container course justify-between px-5">
                <div className=" text-blue-800 font-medium mb-5 ">
                    <div className="py-2">
                        <a href="/" className=""> О курсе</a>
                    </div>
                    <div className="py-2">
                        <a href="/" className="link"> Задания</a>
                    </div>
                    <div className="py-2">
                        <a href="/" className="link"> Оценки</a>
                    </div>
                    <div className="py-2">
                        <a href="/" className="link"> Пользователи</a>
                    </div>
                    <div className="py-2">
                        <a href="/" className="link"> Файлы</a>
                    </div>
                    <div className="py-2">
                        <a href="/" className="link"> Оценки</a>
                    </div>
                </div>

                <div className="mb-5">
                    Лекция 1
                </div>

                <div className="mb-5 mr-10">
                    Результат
                    <hr/>
                    <div className="mt-2 mb-3">
                        <a href="/" className="hover:underline">
                            <div className="text-blue-700">
                                ISC 2
                            </div>
                            <div className="text-sm">
                                10 из 20
                            </div>
                        </a>
                    </div>
                    <div className="mt-2 mb-3">
                        <a href="/" className="hover:underline">
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

    </>
}

export default Task