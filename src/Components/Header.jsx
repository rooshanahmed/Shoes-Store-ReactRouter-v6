import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useNavigate } from "react-router-dom";
import log from "./log.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: "FreeMono, monospace",
  },
}));

export default function Header() {
  const classes = useStyles();

  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{
          background: "#1e272e",
          color: "d2dae2",
        }}
      >
        <Toolbar>
          <img src={log} alt="logo" width="80px" height="80px" />
          <Typography variant="h4" className={classes.title}>
            Rooshan's Shoe Store
          </Typography>
          <Button
            variant="contained"
            style={{ margin: "12px" }}
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
