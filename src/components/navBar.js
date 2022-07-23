import React, { useEffect, useState } from 'react'
import './styles.css';
import { TbBook2, TbShoppingCart } from "react-icons/tb";

const NavBar = (props) => {

    const {openCart} = props;

    const [openCard, setOpenCard] = useState(false);

    useEffect(() => {
        openCart(openCard)
    }, [openCard])
    

    return(
        <nav className="navbar navbar-light" style={{backgroundColor: '#7B8AA7'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href='/' style={{color: 'white'}}>
                    <TbBook2 />
                    Book Store
                </a>

                <div className='d-flex' style={{width: '3rem'}}>
                    {/* <button className='customBtn' onClick={handleClick}>
                        <TbShoppingCart style={{color: 'white'}} size= '1.5em'/>
                    </button> */}
                    <button className='customBtn' onClick={() => setOpenCard(!openCard)}>
                        <TbShoppingCart style={{color: 'white'}} size= '1.5em'/>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;