

const CartItems = (props) => {
    
    const {books} = props;
    console.log(books);
    return(
        <>
            {
                books.map(book => {
                    return(
                        <div className="card m-2" key={book.number}>
                            <div className="card-header customCard">
                                <div>{book.autor}</div>
                                <div><button>X</button></div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{book.number+' '+book.name}</h5>
                                <p className="card-text">Cost ${book.cost}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CartItems;