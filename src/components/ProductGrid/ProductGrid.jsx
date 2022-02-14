import React from 'react'
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const dummyProducts = [{
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
}];

const ProductGrid = () => {
    const classes = useStyles();
    return (
        <main>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {dummyProducts.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default ProductGrid;