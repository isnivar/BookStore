import React, { useEffect, useState } from 'react'
import { getBooks } from '../requests/request';
import { TbPlus } from "react-icons/tb";

const Books = (props) => {
    
    const {getNewBooks, availableBooks} = props;
    const [books, setBooks] = useState([{}]);

    useEffect(() => {
        getBooks().then((books)=>{
            setTimeout(() => {
                setBooks([...books])
            }, 3000);
        });
    }, [])

    useEffect(() => {
        setBooks([...books, availableBooks])
    }, [availableBooks])
    
    console.log(availableBooks)
    const handleClickAdding = (id) => {
        let book = books.filter( book => book.number === id);
        let leftBooks = books.filter(book => book.number !== id);
        getNewBooks(book[0]);
        setBooks([...leftBooks]);
    }
    
    return(
        <>
            {
                books.map(book => {
                    return (
                        <tr key={book.number}>
                            <th scope="row">{book.number}</th>
                            <td>{book.name}</td>
                            <td>{book.autor}</td>
                            <td>${book.cost}</td>
                            <td>
                                <button className="btn btn-sm" onClick={() => handleClickAdding(book.number)}>
                                    <TbPlus/>
                                </button>
                            </td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default Books;