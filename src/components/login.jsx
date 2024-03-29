import React, {useState} from "react";
import logo from "../assets/finalLogo.svg"
import {useNavigate} from "react-router-dom";
import AuthService from "../service/authservice";
import {Alert} from "flowbite-react";
import {HiInformationCircle} from "react-icons/hi";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null); // New state for handling errors
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await AuthService.login(email, password).then(
                () => {
                    navigate("/");
                    window.location.reload();
                },
                (error) => {
                    setError("Введенный пароль или почта не верны!");
                    console.log(error);
                }
            );
        } catch (err) {
            setError("An error occurred during login");
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

            <div className="flex flex-col items-center justify-center px-3 py-8 mx-auto md:h-screen lg:py-0">
                <a href="/#" className="flex items-center mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src={logo}
                         alt="logo"/>
                    BilimSpace
                </a>
                <div style={{height: "450px"}}
                     className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Войти в аккаунт
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Введите
                                    вашу почту
                                </label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"
                                       name="email" id="email"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Пароль</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"
                                       name="password" id="password" placeholder="••••••••"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required=""/>
                            </div>
                            <button type="submit"
                                    className="w-full
                                    text-white bg-blue-600
                                     hover:bg-primary-700
                                     focus:ring-4 focus:outline-none
                                     focus:ring-primary-300 font-medium
                                     rounded-lg text-sm px-5 py-2.5 text-center
                                     dark:bg-primary-600 dark:hover:bg-primary-700
                                     dark:focus:ring-primary-800">
                                Войти
                            </button>
                        </form>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Нет аккаунта ?{' '}
                            <a
                                href="/registration"
                                className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Зарегистрируйтесь здесь
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login