import React from 'react';
import { useParams } from 'react-router-dom';
import dummyData from '../../Data/FakeData';
import { Grid, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: 2,
        textAlign: 'center',
        color: "secondary",
    },
});

const Products = () => {

    const classes = useStyles();
    const { shoe } = useParams();
    const shoeData = dummyData[shoe];

    if(!shoeData){
        return <h2>Not Found</h2>
    }

    const { name,  imgUrl } = shoeData;

    return(
        <div>
            <h2 style={{ "textAlign": "center" }}>About {name}</h2>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <img src={imgUrl[0]} alt={name} width={250} height={250} style={{ "margin": "10px" }} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <img src={imgUrl[1]} alt={name} width={250} height={250} style={{ "margin": "10px" }} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <img src={imgUrl[2]} alt={name} width={250} height={250} style={{ "margin": "10px" }} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <img src={imgUrl[3]} alt={name} width={250} height={250} style={{ "margin": "10px" }} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
export default Products