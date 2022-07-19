import { useState } from 'react';
import Books from '../components/books'
import Cart from '../components/cart'

const BooksCatalog = () => {
    const [cart, setCart] = useState(false)
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
                        <Books/>
                    </tbody>
                </table>

            </div>
            {
                cart && <Cart/>
            }
        </section>
    );
}
 
export default BooksCatalog;