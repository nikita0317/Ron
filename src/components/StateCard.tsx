import React from "react";
import { Box, Theme, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const content = require("../content.json");

type CardProps = {
  states: {
    logo: string;
    bgCol: string;
    coin: number;
    subtitle?: string;
    state: string;
    description: string;
    datetime: string;
    more?: number;
    link?: string;
  };
};

class StateCard extends React.Component <any, any>{
  constructor( props: CardProps ){
    super( props );
  }
  render(): React.ReactNode {
    const { states } = this.props; 
    return (
      <Box
        bgcolor={states.bgCol}
        className='state-card'
      >
        <Box display="flex" justifyContent="space-between">
          <img src={`images/${states.logo}.png`} alt="client-logo" />
          <Box textAlign="right">
            <Typography
              lineHeight={1.2}
              fontWeight={400}
              color="#5FC88F"
              fontSize={20}
            >
              +{states.coin.toLocaleString("en-US")} {content.treat_coins_label}
            </Typography>
            <Typography
              lineHeight={1.2}
              fontWeight={400}
              color="#5FC88F"
              fontSize={12}
            >
              {states.subtitle}
            </Typography>
            <Typography
              lineHeight={1.2}
              fontWeight={400}
              color="#5FC88F"
              fontSize={12}
            >
              ({states.state})
            </Typography>
          </Box>
        </Box>
        <Box display="flex" gap={2} justifyContent="space-between">
          <Box textAlign="left">
            <Typography py={2} color="white" fontSize={12}>
              {states.description}
            </Typography>
          </Box>
          <Box textAlign="right">
            <Typography py={2} color="white" fontSize={12}>
              {states.datetime}
            </Typography>
          </Box>
        </Box>
        {states.more && (
          <Box borderTop="1px dashed #ffffff36">
            <Link to="" className='state-card-link'>
              +{states.more} {content.more_offers_from_this_brand_label}
            </Link>
          </Box>
        )}
      </Box>
    );
  }
};

export default StateCard;
