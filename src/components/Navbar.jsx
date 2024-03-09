import React, { useEffect, useState } from 'react'
import { Form, Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { items } from './Data'
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = ({ setData , cart}) => {
    const location = useLocation();
    const { term } = useParams();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const filterByCategory = (category) => {
        console.log(category);

        const element = items.filter(
            (product) => product.category == category
        )
        setData(element);
    }

    const filterByPrice = (price) => {
        const priceElement = items.filter((product) => product.price >= price)
        setData(priceElement);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
    }

    return (
        <>
            <header className='sticky-top'>
                <div className="nav-bar">
                    <Link to={"/"} className="brand">E-cart</Link>
                    <form onSubmit={handleSubmit} className="search-bar">
                        <input type="text" value={term} onChange={(e) => setSearchTerm(e.target.value)} placeholder='search product' />
                    </form>
                    <Link to={"/cart"} className="cart">
                        <button type="button" className="btn btn-primary position-relative">
                        <FaCartArrowDown />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cart.length}+
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>
                    </Link>

                </div>
                {location.pathname == '/' &&
                <div className="nav-bar-wrapper">
                <div className="items">Filter by {"->"}</div>
                <div className="items">No Filter</div>
                <div onClick={() => filterByCategory('mobiles')} className="items">Mobile</div>
                <div onClick={() => filterByCategory('laptops')} className="items">Laptop</div>
                <div onClick={() => filterByCategory('tablets')} className="items">Tablets</div>
                <div onClick={() => filterByPrice('29999')} className="items">{">="}29999</div>
                <div onClick={() => filterByPrice('49999')} className="items">{">="}49999</div>
                <div onClick={() => filterByPrice('69999')} className="items">{">="}69999</div>
                <div onClick={() => filterByPrice('89999')} className="items">{">="}89999</div>
                </div>
                }
                
            </header>
        </>
    )
}

export default Navbar