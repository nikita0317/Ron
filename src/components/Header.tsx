import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, Box, List, ListItem, ListItemButton, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

type headerProps = {
  overlap: boolean
}

class Header extends React.Component<any, any> {

  constructor( props: headerProps ){
    super( props );
    this.state = {
      menuOpen: false
    }
  }
  toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
      return;
    }

    this.setState({ menuOpen: open});
  };

  render() {
    const { overlap } = this.props;
    const { menuOpen } = this.state;
    const toggleDrawer = this.toggleDrawer;
    return (
      <>
        <Box className={`header ${overlap && "overlap"}`}>
          <IconButton onClick={toggleDrawer(true)} className="menu-icon" size="large" sx={{ position: "absolute" }}>
            {" "}
            <MenuIcon fontSize="large" sx={{ color: "#282B54" }} />
          </IconButton>
          <img src="images/Logo white.svg" alt="Logo White" className="logo" />
        </Box>
  
        <Drawer anchor="left" open={menuOpen} onClose={toggleDrawer(false)}>
          <Box role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link to="/" className="menu-link">
                    Home
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link to="/reset-password" className="menu-link">
                    Reset Password
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link to="/reset" className="menu-link">
                    Reset
                  </Link>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </>
    );
  }
};

export default Header;
