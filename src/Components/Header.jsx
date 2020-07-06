import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          background: "#1e272e",
          color: "d2dae2",
          fontFamily: "Georgia",
        }}
      >
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Rooshan's Shoe Store
          </Typography>
          <Button
            variant="contained"
            style={{ margin: "10px" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Shop Now
          </Button>
          <Button
            variant="contained"
            className={classes.btn}
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </Button>
          <IconButton
            onClick={() => {
              navigate("/cart");
            }}
          >
            <ShoppingCartIcon style={{ color: "d2dae2" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
