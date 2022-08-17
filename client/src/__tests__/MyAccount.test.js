import React from 'react'
import "@testing-library/jest-dom";
//render: lets us render the component as React would, screen: a utility for finding elements the same way the user does
import {render, screen} from '@testing-library/react' 
import userEvent from "@testing-library/user-event";
import MyAccount from '../components/MyAccount'

//writing a test block:
//render a component to test
//find elements we want to interact with
//interact with those elements
//assert that the results are as expected

test("renders without any errors", () => {
    const errorSpy = jest.spyOn(global.console, "error");
    render(<MyAccount />);
    expect(errorSpy).not.toHaveBeenCalled();
    errorSpy.mockRestore();
});

//renders 'Edit Profile'
test("renders 'Edit Profile' in header", () => {
    render(<MyAccount />);
    // you can render the component first and then debug what's visible for RTL's renderer in the test
    // screen.debug();
    const headingEl = screen.getByText(/Edit Profile/)
    expect(headingEl).toBeInTheDocument();
})

//renders NavBar

//form: Input texts must have correct value


//test button
test("renders update button", () => {
    render(<MyAccount />);
    const buttonEl = screen.getByText(/Update/);
    screen.debug();
      
    userEvent.click(buttonEl);
    expect(buttonEl).toBeInTheDocument();
});
