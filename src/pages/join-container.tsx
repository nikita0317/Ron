import { Box, Button, Link, Paper, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header";

const content = require('../content.json');

class JoinContainer extends React.Component {
  constructor( props: any ) {
    super( props );
  }
  
  scrollToDiv = (text: string) => {
    window.scrollTo({
      top: document.getElementById(text)?.offsetTop,
      behavior: "smooth", // for smoothly scrolling
    });
  }
  
  render(){
    return (
      <Box className="join-container" p={2}>
        <Header overlap={true} />
        <Paper elevation={15} className="join-card">
          <Box className="join-card-content">
            <img src="images/Logo white.png" alt="Logo White" />
            <Typography dangerouslySetInnerHTML={{__html: content.join_description}}/>
            <Link href="#" className="join-link">
              {content.tell_me_more}
            </Link>
            <Button className="join-button" onClick={(e) => this.scrollToDiv("about")}>
              {content.join_button}
            </Button>
          </Box>
        </Paper>
      </Box>
    )
  }
}

export default JoinContainer;