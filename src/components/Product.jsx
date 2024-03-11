import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ items, cart, setCart }) => {
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
        <>
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
            <div className='container my-5'>
                <div className='row'>
                    {items?.map((item) => {
                        return (
                            <div
                                className='col-lg-4 col-md-6 my-3 text-center'
                                key={item.id}
                            >
                                {console.log(item)}
                                <div className='card' style={{ width: '18rem' }}>
                                    <Link to={`/product/${item.id}`}>
                                        <img
                                            src={item?.imgSrc}
                                            className='card-img-top'
                                            alt='...'
                                        />
                                    </Link>
                                    <div className='card-body'>
                                        <h5 className='card-title'>{item.title}</h5>
                                        <p className='card-text'>{item.description}</p>
                                        <button className='btn btn-primary mx-3'>
                                            {item.price} ₹
                                        </button>
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
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Product;
