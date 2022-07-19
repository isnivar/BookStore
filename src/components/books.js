import React, { useEffect, useState } from 'react'
import { getBooks } from '../requests/request';
import { TbPlus } from "react-icons/tb";

const Books = () => { 
    const [books, setBooks] = useState([{}]);

    useEffect(() => {
        getBooks().then((books)=>{
            setTimeout(() => {
                setBooks([...books])
            }, 3000)
        })
    }, [books])
    
    
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
                            <td><button className="btn btn-sm"><TbPlus/></button></td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default Books;