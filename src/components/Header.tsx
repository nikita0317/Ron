import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  Theme,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    background:
      "linear-gradient(46.77deg, #DEF5FE 14.02%, #F9E7FF 48.07%, #FEEBE3 69.02%, #FFF1CC 91.84%);",
    display: "flex",
    padding: "20px",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  logo: {
    width: "150px",
  },
  menu: {
    left: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    //marginRight: 'auto',
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: "0",
  },
  link: {
    textDecoration: "none",
    color: "#333",
  },
}));

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setMenuOpen(open);
    };
  const classes = useStyles();

  return (
    <>
      <Box className={classes.header}>
        <IconButton
          onClick={toggleDrawer(true)}
          className={classes.menu}
          size="large"
          sx={{ position: "absolute" }}
        >
          {" "}
          <MenuIcon fontSize="large" sx={{ color: "#282B54" }} />
        </IconButton>
        <img
          src="images/Logo white.svg"
          alt="Logo White"
          className={classes.logo}
        />
      </Box>

      <Drawer anchor="left" open={menuOpen} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <Link to="/" className={classes.link}>
                  Home
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <Link to="/reset-password" className={classes.link}>
                  Reset Password
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <Link to="/reset" className={classes.link}>
                  Reset
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
