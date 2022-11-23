import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";
import { ReactNode } from "react";

const content = require('../content.json');

class Offer extends React.Component {

  render(): ReactNode {
    return (
      <Box className="offer-container">
        <Typography variant="h3" fontSize={39} className="title">
          Gain Treat Coins by completing fun offers
        </Typography>
        <Box className="offer-item">
          <img src="images/logos/lmlive.png" alt="LmLive_Logo" />
          <Typography color="white">Adult webcam platform</Typography>
          <img src="images/offers/none.png" alt="None_Logo"/>
        </Box>
        <Box className="offer-item">
          <img src="images/logos/morgi.png" alt="Morgi_Logo" />
          <Typography color="white">Because doing good is super cool</Typography>
          <img src="images/offers/morgi_back.png" alt="Morgi_Logo"/>
        </Box>
        <Box className="offer-item">
          <img src="images/logos/jantasy.png" alt="Jantasy_Logo" />
          <Typography color="white">Sexy lingerie boutique</Typography>
          <img src="images/offers/none.png" alt="None_Logo"/>
        </Box>
        <Link>{content.see_all_offers}</Link>
        <Button className="join-button">{content.join_button}</Button>
      </Box>
    );
  }
}

export default Offer;
