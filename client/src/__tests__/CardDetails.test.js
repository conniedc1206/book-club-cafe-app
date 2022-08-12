import React from 'react'
import "@testing-library/jest-dom";
import {render, screen} from '@testing-library/react' //render: lets us render the component as React would, screen: a utility for finding elements the same way the user does
import CardDetails from '../components/CardDetails'

test("renders without any errors", () => {
    const errorSpy = jest.spyOn(global.console, "error");
    render(<CardDetails />);
    expect(errorSpy).not.toHaveBeenCalled();
    errorSpy.mockRestore();
});

test("renders 'Card Details Page' inside of a <h1 />", () => {
    render(<CardDetails />);
    const h1 = screen.queryByText(/Card Details Page/g);
    expect(h1).toBeInTheDocument();
    expect(h1.tagName).toBe("H1");
})

test("renders a book's title", () => {
    render(<CardDetails />);
    const p = screen.queryByText(/Book Title/g);
    expect(p).toBeInTheDocument();
});