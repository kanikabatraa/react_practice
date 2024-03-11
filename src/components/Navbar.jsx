// import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { items } from './Data';
import { useState } from 'react';

const Navbar = ({ setData, cart }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const filterByCategory = (category) => {
        const element = items.filter((product) => product.category === category);

        console.log(element);

        setData(element);
    };

    const filterByPrice = (price) => {
        const element = items.filter((product) => product.price >= price);

        console.log(element);

        setData(element);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${search}`);
        setSearch('');
    };
    return (
        <>
            <header className='sticky-top'>
                <div className='nav_bar'>
                    <Link to={'/'} className='brand'>
                        Trendy Trinkets
                    </Link>
                    <form className='search-bar' onSubmit={handleSubmit}>
                        <FaSearch
                            style={{
                                position: 'absolute',
                                zIndex: '99',
                                color: 'black',
                                marginTop: '5px',
                                marginLeft: '5px',
                            }}
                        />
                        <input
                            type='text'
                            placeholder='Search Products'
                            style={{ position: 'relative', padding: '0px 15px' }}
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                        />
                    </form>
                    <Link to={'/cart'} className='cart'>
                        <button
                            type='button'
                            className='btn text-white fs-5 position-relative'
                        >
                            <FaShoppingCart />
                            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                                {cart.length}
                                <span className='visually-hidden'>unread messages</span>
                            </span>
                        </button>
                    </Link>
                </div>

                {location.pathname == '/' && (
                    <div className='nav-bar-wrapper'>
                        <div className='items'>
                            <FaFilter style={{ color: '#784b8e' }} />
                            Filter by {'->'}
                        </div>
                        <div className='items' onClick={() => setData(items)}>
                            No Filter
                        </div>
                        <div
                            className='items'
                            onClick={() => filterByCategory('mobiles')}
                        >
                            Mobiles
                        </div>
                        <div
                            className='items'
                            onClick={() => filterByCategory('laptops')}
                        >
                            Laptops
                        </div>
                        <div
                            className='items'
                            onClick={() => filterByCategory('tablets')}
                        >
                            Tablets
                        </div>
                        <div onClick={() => filterByPrice(29999)} className='items'>
                            {'>='}29999
                        </div>
                        <div onClick={() => filterByPrice(49999)} className='items'>
                            {'>='}49999
                        </div>
                        <div onClick={() => filterByPrice(69999)} className='items'>
                            {'>='}69999
                        </div>
                        <div onClick={() => filterByPrice(89999)} className='items'>
                            {'>='}89999
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};

export default Navbar;
