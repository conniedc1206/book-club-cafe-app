import React from 'react'
import { MemoryRouter } from 'react-router-dom';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import fetchMock from 'jest-fetch-mock';
import mockResponse from '../__mocks__/response.json';
// the component to test
import MyAccount from '../components/MyAccount'
import NavBar from '../components/NavBar'

fetchMock.enableMocks();

function setup() {
    return render(
      <MemoryRouter>
        <MyAccount />
      </MemoryRouter>
    );
}

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
    test("renders 'Edit Profile' in header", () => {
        setup();
        const headingEl = screen.getByText(/Edit Profile/i)
        expect(headingEl).toBeInTheDocument();
    });

    test("user enters a value in the form's input and submits", async () => {
        fetch.once(JSON.stringify(mockResponse));
        setup();
        const input = screen.getByPlaceholderText(/your full name/i);
        userEvent.type(input, 'Connie Park');

        const button = screen.getByRole('button', { name: /update/i });  
        userEvent.click(button);
        
        expect(await screen.findByText(/Connie Park/i)).toBeInTheDocument();
    });
});
