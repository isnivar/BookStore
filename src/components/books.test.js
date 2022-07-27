import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {renderHook}  from '@testing-library/react'

describe('Books functionality', () => {
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

    it('books will be updated when calling useEffect', () => {
    
        const availableBook = {
            isSameBook: false,
            book: {
                number: '1003',
                name: 'Holy Bible',
                autor: 'Unknown',
                cost: 5
            }
        }
        
        const {result} = renderHook(() => {
            const [book, setBook] = React.useState([{}]);
            
            React.useEffect(() => {
                setBook([...books, availableBook.book])
            }, [availableBook])

            return book;
        })


        expect(result.current.length).toEqual(3)
        expect(result.current[0].name).toEqual('Harry Potter')
        expect(result.current[1].name).toEqual('Sherlock Holmes')
        expect(result.current[2].name).toEqual('Holy Bible')
    })
    
    it('Component will retrieve all the books from the API', async () => {
        const {result} = renderHook(() => {
            const [booksList, setBooksList] = React.useState([{}]);
            
            React.useEffect(() => {
                setBooksList([...books])
            }, [])

            return booksList;
        })

        expect(result.current.length).toEqual(2)
        expect(result.current[0].name).toEqual('Harry Potter')
        expect(result.current[1].name).toEqual('Sherlock Holmes')
    })
})