import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardContent, CardMedia, Chip, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MirHeader from '../../Shared/MirHeader';

import useStyles from './styles';

const Product = ({ product, timeLeft }) => {
    const classes = useStyles();



    const [countDown, setCountDown] = useState(timeLeft);

    useEffect(() => {
        if (!countDown) return;
        const timeout = setTimeout(() => {
            setCountDown(countDown => countDown - 1);
            console.log(countDown);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };

    }, [countDown]);



    return (
        <Link to={`/products/${product.id}`} className={countDown ? classes.linkOn : classes.linkOff}>
            <Card className={classes.cardRootSameHeight} variant="outlined">
                <MirHeader headers={{ title: product.title, subheader: product.category }} />
                <div>
                    <Link to={`/products/${product.id}`} >
                        <CardMedia className={classes.cardMedia}
                            sx={{ maxWidth: 200 }}
                            component="img"
                            height="auto"
                            image={product.image}
                            alt={product.title}
                        />
                    </Link>
                </div>
                <CardContent >
                    <Grid container spacing={2} alignItems="center" justify="center" style={{ paddingBottom: '15px' }}>
                        <Grid sm={3}>Price: </Grid>
                        <Grid sm={3}> <Box display='flex' flexDirection='row-reverse'>
                            <Chip label={`S/ ${product.price}`} color="primary" />
                        </Box>
                        </Grid>


                    </Grid>
                    <Grid container spacing={2} alignItems="center" justify="center">
                        <Grid sm={3}>Timer: </Grid>
                        <Grid sm={3}> <Box display='flex' flexDirection='row-reverse'>
                            <Chip label={`${countDown}`} color="secondary" />
                        </Box>
                        </Grid>
                    </Grid>

                </CardContent>


            </Card>
        </Link >
    )
}

export default Product;