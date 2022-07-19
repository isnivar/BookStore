import React from 'react'
import './navBarStyles.css';
import { TbBook2, TbShoppingCart } from "react-icons/tb";

const NavBar = () => {
    return(
        <nav className="navbar navbar-light" style={{backgroundColor: '#7B8AA7'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href='/' style={{color: 'white'}}>
                    <TbBook2 />
                    Book Store
                </a>

                <div className='d-flex' style={{width: '3rem'}}>
                    <button>
                        <TbShoppingCart />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;