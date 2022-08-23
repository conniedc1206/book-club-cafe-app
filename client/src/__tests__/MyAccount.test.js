// import dependencies
import React from 'react'
import { MemoryRouter } from 'react-router-dom';
// import API mocking utilities from Mock Service Worker
// import {rest} from 'msw'
// import {setupServer} from 'msw/node'
// import react-testing methods
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// the component to test
import MyAccount from '../components/MyAccount'
import NavBar from '../components/NavBar'
import Home from '../components/Home'

// For the Navbar, we need to test that the links are pointing to the correct target.
describe('NavBar', () => {
    test('"Explore" link points to the correct page', () => {
        render(
            <MemoryRouter>
              <NavBar />
            </MemoryRouter>
        );
        const link = screen.getByRole('link', { name: /explore/i });
        // screen.debug(link);
        userEvent.click(link);
        // After clicking the link we expect to see a url with "/home".
        expect(link.getAttribute('href')).toBe('/home');
    });
});

// For the form, we should test changing and submitting the form, the loading state, and the rendered response.
// The user enters a value in the form's input and submits.
// When the response arrives the data is rendered.
describe('Form', () => {
    test('form inputs', () => {
        render(
            <MemoryRouter>
              <MyAccount />
            </MemoryRouter>
        );
        screen.debug()
    });
});
