import React from 'react'
import {getByText, render, rerender}  from '@testing-library/react'
import Cart from './cart'
import '@testing-library/jest-dom/extend-expect'

describe('Cart functionality', () => {
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

    it('Will render the component with the list of books and then update the list and render the remain books', () => {
        const removeBook = jest.fn();
        const {container, rerender} = render(<Cart books={books} removeBook={removeBook}/>);
        const firstBook = getByText(container, `${books[0].number} ${books[0].name}`);
        const lastBook = getByText(container, `${books[1].number} ${books[1].name}`);
        
        expect(firstBook).toBeInTheDocument();
        expect(lastBook).toBeInTheDocument();
        const newBooks = books.filter(b => b.number !== '1001')
        rerender(<Cart books={newBooks} removeBook={removeBook}/>)
        
        expect(firstBook).not.toBeInTheDocument();
        expect(lastBook).toBeInTheDocument();
    })
})