import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Box } from '@material-ui/core';
import { ProductDetail } from '../../components';

const ProductDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
            rate: 3.9,
            count: 120
        }
    });
    const { productId } = useParams();

    useEffect(() => {
        /* Aca estaria llamando a la API por el item con el id */
        setLoading(false);
        console.log(" ProductId: " + productId);
        console.log(" Product: " + { product });
    }, []);

    return (
        <Box minHeight="87vh">
            {loading === true ? <p>Loading ...</p> : <ProductDetail product={product} />}
        </Box>
    )
}

export default ProductDetailContainer;