import { useState } from 'react';
import Books from '../components/books'
import Cart from '../components/cart'

const BooksCatalog = (props) => {
    const [newBooks, setNewBooks] = useState([])
    const [removedBook, setRemovedBook] = useState({
        isSameBook: false,
        book: {}
    })

    const getNewBooks = (booksList) => {
        if(newBooks.length > 0){
            setNewBooks([...newBooks, booksList]);
        }else{
            setNewBooks([booksList]);
        }
    }

    const deleteBook = (book) => {
        if(removedBook.book === book){
            setRemovedBook({
                isSameBook: true,
                book: book
            })
        }else{
            setRemovedBook({
                isSameBook: false,
                book:book
            });
        }
    }

    return (
        <section style={{display: 'flex'}}>
            <div className="container-md mt-4">
                <h1>Available Books</h1>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Autor</th>
                        <th scope="col">Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Books getNewBooks={getNewBooks} availableBooks={removedBook}/>
                    </tbody>
                </table>

            </div>
            {
                props.opened && <Cart books={newBooks} removeBook={deleteBook} updateList={setNewBooks}/>
            }
        </section>
    );
}
 
export default BooksCatalog;