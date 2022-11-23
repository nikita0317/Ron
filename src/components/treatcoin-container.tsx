import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { ReactNode } from "react";
import SwiperContainer from "./SwiperContainer";

class TreatCoin extends React.Component {
  constructor( props: any) {
    super( props );
  }

  render(): ReactNode {
    return (
      <Box className="treatcoin-container" flexDirection="column" gap={3} px={2} py={6}>
        <Typography className="title" fontSize={44} mb={3}>
          Treat Coins = Money
        </Typography>
        <Typography variant="h5" color="white">
          You earn:
        </Typography>
        <Box sx={{ width: "100%", position: "relative" }}>
          <SwiperContainer />
        </Box>
        <Typography variant="h5" color="white">
          You get:
        </Typography>
        <Box>
          <Typography variant="h5" color="#CB8F6D" fontSize={41}>
            $50
          </Typography>
          <Typography variant="h5" color="#5FC88F">
            in cash, crypto or gift card value
          </Typography>
        </Box>
        <Typography variant="h5" color="white">
          Or
        </Typography>
        <Box>
          <Typography variant="h5" color="#CB8F6D" fontSize={41}>
            $100
          </Typography>
          <Typography variant="h5" color="#5FC88F">
            to buy NFTs
          </Typography>
        </Box>
        <Typography variant="h5" color="white">
          and
        </Typography>
        <Typography variant="h5" color="#5FC88F">
          Every month the Top 100 Treat Coin gainers win amazing prizes!
        </Typography>
        <Button sx={{ mt: 3 }}>Start Earning TreatCoins</Button>
      </Box>
    )
  }
}

export default TreatCoin;