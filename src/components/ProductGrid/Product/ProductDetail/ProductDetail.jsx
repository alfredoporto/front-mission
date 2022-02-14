import React from 'react';

import { Avatar, Box, Button, CardHeader, CardMedia, Chip, Grid, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';


const ProductDetail = ({ product }) => {
    const classes = useStyles();

    return (
        <Grid>
            <Grid>
                <CardHeader
                    avatar={
                        <Avatar alt="" src="https://yt3.ggpht.com/ytc/AKedOLRAPZLAzlT7sqxT2cxsX1AEsOgUIinaNlVigDNVzw=s900-c-k-c0x00ffffff-no-rj" />
                    }
                    title="Make It Real"
                    subheader="Product Detail"

                />
            </Grid>

            <Grid container spacing={4} className={classes.gridContainer}>
                <Grid item xs={12} sm={4} justify="center">
                    <CardMedia className={classes.cardMedia}
                        sx={{ maxWidth: 200 }}
                        component="img"
                        height="auto"
                        image={product.image}
                        alt={product.title}
                    />
                    <Typography variant="caption" display="block" gutterBottom align="center">
                        Roll over image to zoom in
                    </Typography>

                </Grid>

                <Grid item xs={12} sm={6} >
                    <Typography variant="h3" gutterBottom align="left" className={classes.typographyTitle}>
                        {product.title}
                    </Typography>

                    <div className={classes.cardContent}>
                        <Typography variant="h4">
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {product.category}
                        </Typography>
                    </div>
                    <Box display='flex' flexDirection='row-reverse'>
                        <Chip label={`S/ ${product.price}`} color="primary" />
                    </Box>

                    <div className={classes.cardContent}>
                        <Rating name="read-only" value={product.rating.rate} readOnly />
                        <Typography variant="body2" color="textSecondary">
                            Reviews:
                            {product.rating.count}
                        </Typography>
                    </div>
                    <Typography paragraph>
                        {product.description}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2} align="center" className={classes.gridButtons}>
                    <Button variant="contained">Add to basket</Button>
                    <Button variant="contained">Buy Now</Button>
                    <Typography variant="body2" color="textSecondary">
                        Secured Transaction
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProductDetail;