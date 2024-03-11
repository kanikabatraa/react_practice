import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';
import Product from './Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDetail = ({ cart, setCart }) => {
    const { id } = useParams();

    const [item, setItem] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const filterProduct = items.filter((item) => item.id == id);
        // console.log(filterProduct);

        setItem(filterProduct[0]);
        const relatedProduct = items.filter(
            (product) => product.category === item.category
        );
        // console.log(relatedProduct)

        setRelatedProducts(relatedProduct);
    }, [id, item.category]);

    const addToCart = (id, price, title, description, imgSrc) => {
        const obj = {
            id,
            price,
            title,
            description,
            imgSrc,
        };

        setCart([...cart, obj]);

        console.log(cart);

        toast.success('Item added on Cart!!', {
            position: 'top-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        });
    };

    return (
        <div>
            <ToastContainer
                position='top-right'
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
            />
            <div className='container d-flex justify-content-center align-items-center'>
                <div className='image'>
                    <img src={item.imgSrc} alt='' />
                </div>

                <div className='text-center'>
                    <h1 className='card-title'>{item.title}</h1>
                    <p className='card-text'>{item.description}</p>
                    <button className='btn btn-primary mx-3'>{item.price} ₹</button>
                    <button
                        className='btn btn-danger'
                        onClick={() =>
                            addToCart(
                                item.id,
                                item.pricetitle,
                                item.description,
                                item.imgSrc
                            )
                        }
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            <h2 className='text-center' style={{ color: '#053e84' }}>
                Related Products
            </h2>
            <Product items={relatedProducts} cart={cart} setCart={setCart} />
        </div>
    );
};

export default ProductDetail;
