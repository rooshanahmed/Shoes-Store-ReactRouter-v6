import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { GlobalContext } from '../Context/ProductContext';
import { Link } from 'react-router-dom';
import dummyData from '../Data/FakeData';
import shoes from './shoes.png';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        margin: 10,
    },
    paper: {
        textAlign: 'center',

    },
});

const Home = () => {

    const classes = useStyles();
    const { addToCart } = useContext(GlobalContext);

    return (
        <div className={classes.root}>
            <img src={shoes} alt="shoes" style={{ width: '100%', objectFit: 'cover', position: 'relative' }} />
            <h1 style={{ "textAlign": "center" }}>Our Best Selling Products</h1>
            <Grid container spacing={4}>
                {Object.entries(dummyData).map(([shoe, { name, imgUrl, price }]) => {
                    return (
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        component="imgUrl"
                                        className={classes.media}
                                        image={imgUrl[0]}
                                        title={name}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {name}
                                        </Typography>
                                        <Typography variant="h5">
                                            Price: ${price}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" onClick={() => addToCart(shoe)}>
                                        Add To Cart
                                    </Button>
                                    <Button size="small" color="primary">
                                        <Link to={`/detail/${shoe}`} style={{ "textDecoration": "none" }}>
                                            Details
                                        </Link>
                                    </Button>
                                </CardActions>
                            </Card >
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
};
export default Home