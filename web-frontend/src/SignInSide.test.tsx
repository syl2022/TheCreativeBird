import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react'
// @ts-ignore
import Button from "@mui/material/Button";
import userEvent from "@testing-library/user-event";
import SignInSide from "./pages/SignInSide";

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUsedNavigate,
}));
jest.mock("./__mocks__/common.service")
const onSubmit = jest.fn()

beforeEach(()=>{
    const {  } = render(<SignInSide />)
    onSubmit.mockClear()
})

test('Login ', async () => {
    screen.getByRole("form", { name: "login-form" }).onsubmit =
        onSubmit;
    // eslint-disable-next-line testing-library/await-async-query
    const eMail = await screen.findByRole("textbox", { name: /email/i });
    const password = screen.getByText('Password')
    userEvent.type(eMail, "fillWithTestUsername")
    userEvent.type(password, "fillWithTestPassword")

    userEvent.click(screen.getByRole("button", { name: "Sign In" }));

    await waitFor(()=>{
        expect(onSubmit).toHaveBeenCalledTimes(1)
    })
})