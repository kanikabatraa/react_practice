import { useParams } from 'react-router-dom';
import { items } from './Data';
import { useEffect, useState } from 'react';
import Product from './Product';
const SearchItem = ({ cart, setCart }) => {
    const [filterData, setFilterData] = useState([]);
    const { term } = useParams();

    useEffect(() => {
        const filteredData = () => {
            const data = items.filter((product) =>
                product.title.toLowerCase().includes(term.toLowerCase())
            );
            console.log(data);
            setFilterData(data);
        };
        filteredData();
    }, [term]);
    return (
        <div>
            <Product items={filterData} cart={cart} setCart={setCart} />
        </div>
    );
};

export default SearchItem;
