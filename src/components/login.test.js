import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';

import Login from './Login'; // Путь к вашему компоненту Login
import AuthService from './AuthService'; // Путь к вашему сервису AuthService

jest.mock('./AuthService'); // Мокаем AuthService, чтобы имитировать его поведение

describe('Login Component', () => {
    test('Успешный вход должен перенаправить на главную страницу', async () => {
        // Mock AuthService.login для успешного входа
        AuthService.login.mockResolvedValueOnce();

        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        // Заполняем форму
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });

        // Нажимаем кнопку входа
        fireEvent.click(screen.getByText('Войти'));

        // Ждем, пока произойдет редирект
        await waitFor(() => {
            expect(window.location.pathname).toBe('/');
        });
    });

    test('Неправильные учетные данные должны вызывать ошибку', async () => {
        // Mock AuthService.login для неудачного входа
        const errorMessage = 'Введенный пароль или почта не верны!';
        AuthService.login.mockRejectedValueOnce({ message: errorMessage });

        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        // Заполняем форму
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'wrongpassword' } });

        // Нажимаем кнопку входа
        fireEvent.click(screen.getByText('Войти'));

        // Ждем, пока появится сообщение об ошибке
        await waitFor(() => {
            expect(screen.getByText(errorMessage)).toBeInTheDocument();
        });
    });
});
