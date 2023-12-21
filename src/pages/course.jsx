import {useParams} from 'react-router-dom'

const Course = () => {
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
                        <a href={'/'} className=""> О курсе</a>
                    </div>
                    <div className="py-2">
                        <a href={'/'} className="link"> Задания</a>
                    </div>
                    <div className="py-2">
                        <a href={'/'} className="link"> Оценки</a>
                    </div>
                    <div className="py-2">
                        <a href={'/'} className="link"> Пользователи</a>
                    </div>
                    <div className="py-2">
                        <a href={'/'} className="link"> Файлы</a>
                    </div>
                    <div className="py-2">
                        <a href={'/'} className="link"> Оценки</a>
                    </div>
                </div>

                <div className="tasks border-2 mb-5">
                    <p className="font-medium p-4 bg-gray-100   "> Новые задания </p>
                    <hr/>
                    <div>
                        <div className="bg-white rounded py-5 p-4 hover:bg-blue-50">
                            <a href={'/'} className="hover:underline "> Лабораторная работа номер 2 </a>
                        </div>
                        <hr/>
                    </div>
                    <div>
                        <div className="bg-white rounded py-5 p-4 hover:bg-blue-50">
                            <a href="/task/1/" className="hover:underline"> Лекция 1 </a>
                        </div>
                        <hr/>
                    </div>
                    <div>
                        <div className="bg-white rounded py-5 p-4 hover:bg-blue-50">
                            <a href={'/'} className="hover:underline"> Лекция 1 </a>
                        </div>
                        <hr/>
                    </div>
                    <div>
                        <div className="bg-white rounded py-5 p-4 hover:bg-blue-50">
                            <a href={'/'} className="hover:underline"> Лекция 1 </a>
                        </div>
                        <hr/>
                    </div>
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

    </>
}

export default Course