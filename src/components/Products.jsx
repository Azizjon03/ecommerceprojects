import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const fetchedData = await response.json();
                setData(fetchedData);
                setFilter(fetchedData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const Loading = () => {
        return (
            <>
                {[...Array(4)].map((_, index) => (
                    <div className='col-md-3' key={index}>
                        <Skeleton height={350} />
                    </div>
                ))}
            </>
        );
    };

    const filterProducts = (category) => {
        console.log(data, 'tets dat')
        if (category === 'All') {
            setFilter(data);
        } else {
            const updatedList = data.filter((item) => item.category === category);
            setFilter(updatedList);
        }
    };

    const ShowProducts = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProducts('All')}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProducts("men's clothing")}>Boys' clothes</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProducts("women's clothing")}>Girls' clothes</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProducts('jewelery')}>Jewellery</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProducts("electronics")}>Electronics</button>
                </div>

                <div className='row'>
                    {filter.map((product) => (
                        <div className='col-md-3 mb-4' key={product.id}>
                            <div className='card h-100 text-center p-4'>
                                <img src={product.image} className='card-image-top' alt={product.title} height="250px" />
                                <div className='card-body'>
                                    <h5 className='card-title mb-0'>{product.title.substring(0, 12)}</h5>
                                    <p className='card-text lead fw-bold'>${product.price}</p>
                                    <NavLink to={`/products/${product.id}`} className='btn btn-outline-dark'>
                                        Buy now
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    };

    return (
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-12 mb-5'>
                    <h1 className="display-6 fw-bold text-center">Latest products</h1>
                    <hr />
                </div>
            </div>
            <div className='row justify-content-center'>
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    );
};

export default Products;
