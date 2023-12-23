import React from "react";

const CreateTask = () => {
    return (
        <div>
            <div className="p-4 sm:ml-64">
                <div className="p-4 ">
                    <section
                        className="max-w-5xl p-6 mx-auto bg-gray-50 border-2 rounded-md shadow-md pb-24 "  >
                        <h1 className="text-xl font-medium text-black capitalize dark:">Создать новое задание</h1>
                        <form  >
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label className=" dark:text-gray-200"
                                           htmlFor="passwordConfirmation">Дисцплина в которую хотите добавить задание</label>
                                    <select
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                        <option>STACK MEAN</option>
                                        <option>Jakarta</option>
                                        <option>Tangerang</option>
                                        <option>Bandung</option>
                                    </select>
                                </div>
                                <div>
                                    <label className=" dark:text-gray-200" htmlFor="username">Название задания</label>
                                    <input id="username" type="text"
                                           className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                                </div>
                                <div>
                                    <label className=" dark:text-gray-200"
                                           htmlFor="passwordConfirmation">Срок</label>
                                    <input id="date" type="date"
                                           className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                                </div>
                                <div>
                                    <label className=" dark:text-gray-200" htmlFor="emailAddress"> Количество баллов</label>
                                    <input id="emailAddress" type="number"
                                           className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                                </div>
                                <div>
                                    <label className=" dark:text-gray-200" htmlFor="passwordConfirmation">
                                        Требования / описание к работе </label>
                                    <textarea id="textarea" rows="5" type="textarea"
                                              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                                </div>




                                <div>
                                    <label className="block text-sm font-medium ">
                                        Дополнительный файл
                                    </label>
                                    <div
                                        className="mt-1 flex justify-center px-8 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            <svg className="mx-auto h-12 w-12 " stroke="currentColor"
                                                 fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                <path
                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <div class="flex text-sm text-gray-600">
                                                <label for="file-upload"
                                                       class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                    <span class="">Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file"
                                                           class="sr-only"/>
                                                </label>
                                                <p class="pl-1 ">or drag and drop</p>
                                            </div>
                                            <p class="text-xs ">
                                                PNG, JPG, GIF up to 10MB
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end mt-16">
                                <button
                                    class="px-6 py-2 leading-5 text-white  transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-gray-600"> Добавить
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
)
}

export default CreateTask