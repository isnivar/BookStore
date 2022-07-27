import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render }  from '@testing-library/react'
import CartItems from './cartItems'

describe('CartItems redered', () => {

    const books = [
        {
            number: '1001',
            name: 'Harry Potter',
            autor: 'JK Rowling',
            cost: 10
        },
        {
            number: '1002',
            name: 'Sherlock Holmes',
            autor: 'Arthur Conan Doyle',
            cost: 5
        }
    ];

    it('The cart items will be rendered when the list of books is passed', () => {

        const component = render(<CartItems books={books} />);
        
        expect(component.getByText(`${books[1].number} ${books[1].name}`)).toBeInTheDocument();
        expect(component.getByText(`${books[0].number} ${books[0].name}`)).toBeInTheDocument();
    })
})