import { useState } from 'react';
import Books from '../components/books'
import Cart from '../components/cart'

const BooksCatalog = (props) => {
    const [newBooks, setNewBooks] = useState([])

    const getNewBooks = (booksList) => {
        if(newBooks.length > 0){
            setNewBooks([...newBooks, booksList]);
        }else{
            setNewBooks([booksList]);
        }
    }

    return (
        <section style={{display: 'flex'}}>
            <div className="container-md mt-4">
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
                        <Books getNewBooks={getNewBooks}/>
                    </tbody>
                </table>

            </div>
            {
                props.opened && <Cart books={newBooks}/>
            }
        </section>
    );
}
 
export default BooksCatalog;