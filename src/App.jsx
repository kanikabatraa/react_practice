import Navbar from './components/Navbar';
import Product from './components/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import SearchItem from './components/SearchItem';
import Cart from './components/Cart';
import { items } from './components/Data';
import { useState } from 'react';

function App() {
    const [data, setData] = useState([...items]);

    const [cart, setCart] = useState([]);
    return (
        <>
            <Router>
                <Navbar setData={setData} cart={cart} />
                <Routes>
                    <Route
                        path='/'
                        element={<Product items={data} cart={cart} setCart={setCart} />}
                    />
                    <Route path='/product/:id' element={<ProductDetail cart={cart} setCart={setCart} />} />
                    <Route
                        path='/search/:term'
                        element={<SearchItem cart={cart} setCart={setCart} />}
                    />
                    <Route
                        path='/cart'
                        element={<Cart cart={cart} setCart={setCart} />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
