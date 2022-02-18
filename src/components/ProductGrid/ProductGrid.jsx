import React from 'react'
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const ProductGrid = ({ products }) => {
    const classes = useStyles();

    const randomGenerator = (min, max) => { return Math.floor(Math.random() * (max - min)) + min }


    return (
        <main>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} timeLeft={randomGenerator(10, 20)} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default ProductGrid;