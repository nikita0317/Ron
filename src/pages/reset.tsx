import React, { useState } from "react";
import {
  Box,
  Theme,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "../components/Header";
import TreatState from "../components/TreatState";
import Footer from "../components/Footer";
import PayoutCard from "../components/PayoutCard";

const useStyles = makeStyles((theme: Theme) => ({
  selectIcon: {
    fill: "#fff !important",
    color: "transparent !important",
  },
}));

const Reset = () => {
  const classes = useStyles();

  const cards = [
    {
      logo: "ethereum-1",
      content:
        "0.34 ETH for 3,456 Treat Coins withdraw by you through Faucet Pay",
      state: "pending",
      date: "10/16/2022",
    },
    {
      logo: "ethereum-2",
      content: "0.24 ETH prize for the 26th place in April 2022",
      date: "05/06/2022",
    },
  ];

  const stateProps = {
    state: "LifeTime Usable",
    total: 155654,
    used: 12533,
    availableTitle: "stateProps",
    available: 2533,
  };

  return (
    <>
      <Header />
      <Box bgcolor="black" sx={{ padding: "17px" }} textAlign="center">
        <Typography variant="h3" py={2} fontWeight="700" textAlign="center">
          My Treat Coin Earnings
        </Typography>
        <Typography
          mt={2}
          textAlign="center"
          fontWeight={400}
          color="white"
          variant="h6"
          mb={3}
        >
          See all your Treat Coin withdrawals, NFT purchases, competition wins
          and your Usable Treat Coin balance
        </Typography>
        <TreatState state={stateProps} />
        <Typography
          mt={2}
          textAlign="center"
          fontWeight={400}
          color="white"
          sx={{ textDecoration: "underline" }}
        >
          My payouts:
        </Typography>
        {cards.map((card, index) => (
          <PayoutCard content={card} key={index} />
        ))}
        <Footer />
      </Box>
    </>
  );
};

export default Reset;
