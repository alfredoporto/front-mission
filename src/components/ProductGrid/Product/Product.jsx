import React from 'react'
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Chip, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Product = ({ product }) => {
    const classes = useStyles();

    return (
        <Link to={`/products/${product.id}`}>
            <Card className={classes.root} variant="outlined">
                <CardHeader
                    avatar={
                        <Avatar alt="" src="https://yt3.ggpht.com/ytc/AKedOLRAPZLAzlT7sqxT2cxsX1AEsOgUIinaNlVigDNVzw=s900-c-k-c0x00ffffff-no-rj" />
                    }
                    title={product.title}
                    subheader={product.category}

                />
                <div>
                    <Link to={`/products/${product.id}`}>
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
                    <Grid container spacing={2} alignItems="center" justify="center">
                        <Grid sm={3}>Price: </Grid>
                        <Grid sm={3}> <Box display='flex' flexDirection='row-reverse'>
                            <Chip label={`S/ ${product.price}`} color="primary" />
                        </Box>
                        </Grid>

                    </Grid>

                </CardContent>


            </Card>
        </Link>

    )
}

export default Product;