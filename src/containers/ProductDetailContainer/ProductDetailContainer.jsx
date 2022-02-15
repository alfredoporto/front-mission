import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Box } from '@material-ui/core';
import { ProductDetail } from '../../components';
import Spinner from '../../components/Shared/Spinner';

const ProductDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    const { productId } = useParams();



    useEffect(() => {
        /* Aca estaria llamando a la API por el item con el id */
        const fetchData = async () => {
            const res = await fetch('https://fakestoreapi.com/products/' + productId).then(r => r.json());
            setProduct(res);
            setLoading(false);
        }

        fetchData();
    }, [productId]);

    return (
        <Box minHeight="87vh">
            {loading === true ? <Spinner /> : <ProductDetail product={product} />}
        </Box>
    )
}

export default ProductDetailContainer;