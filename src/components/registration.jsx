import React, {useState} from 'react';
import logo from '../assets/finalLogo.svg';
import axios from 'axios';
import AuthService from "../service/authservice";
import {useNavigate} from "react-router-dom";
import {Alert} from "flowbite-react";
import {HiInformationCircle} from "react-icons/hi";

const Registration = () => {
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null); // New state for handling errors
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        // Simple password validation
        if (password.length < 6) {
            setError("Password must be at least 8 characters long");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            await AuthService.signup(email, password, firstname, lastname).then(
                (response) => {
                    // check for token and user already exists with 200
                    console.log("Sign up successfully", response);
                    navigate("/");
                    window.location.reload();
                },
                (error) => {
                    setError("user already exists");
                    console.log(error);
                }
            );
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <div className="w-1/3 px-5  mt-5 mx-auto ">
                {error && (
                    <Alert icon={HiInformationCircle} className="text-center" isOpen={true} color="failure"  >
                        <span className="font-medium ">{error}</span>
                    </Alert>
                )}
            </div>

            <div className="flex flex-col items-center justify-center px-6 py-3 mx-auto md:h-screen lg:py-0">
                <a
                    href="/#"
                    className="flex items-center mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src={logo} alt="logo"/>
                    BilimSpace
                </a>
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Создать аккаунт
                        </h1>
                        <form onSubmit={handleSignup} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Введите почту
                                </label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Введите Имя
                                </label>
                                <input
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Maksat"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="surname"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Введите Фамилию
                                </label>
                                <input
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    type="text"
                                    name="surname"
                                    id="surname"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Olzhasov"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Пароль
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="confirm-password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Повторите пароль
                                </label>
                                <input
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    type="password"
                                    name="confirm-password"
                                    id="confirm-password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Создать аккаунт
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Уже есть аккаунт ?{' '}
                                <a
                                    href="/login"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Войдите здесь
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
