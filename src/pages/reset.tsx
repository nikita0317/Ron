import React, { useEffect, useState } from "react";
import { Box, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "../components/Header";
import TreatState from "../components/TreatState";
import Footer from "../components/Footer";
import PayoutCard from "../components/PayoutCard";

const Reset = () => {
  const [cards, setCards] = useState([]);

  const getData = async () => {
    const data = await fetch("Data/Data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      });

    setCards(data.payoutCard);
  };

  useEffect(() => {
    getData();
  }, []);

  const stateProps = {
    state: "LifeTime Usable",
    total: 155654,
    used: 12533,
    availableTitle: "stateProps",
    available: 2533,
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <>
      <Header overlap={false}/>
      <Box bgcolor="black" sx={{ padding: "17px" }} textAlign="center" display='flex' flexDirection='column' alignItems='center' >
        <Box width={isMobile ? '100%' : '800px'}>
          <Typography variant="h3" className="title" py={2} textAlign="center">
            My Treat Coin Earnings
          </Typography>
          <Typography mt={2} textAlign="center" fontWeight={400} color="white" variant="h6" mb={3}>
            See all your Treat Coin withdrawals, NFT purchases, competition wins and your Usable Treat Coin balance
          </Typography>
          <TreatState state={stateProps} />
          <Typography mt={2} textAlign="center" fontWeight={400} color="white" sx={{ textDecoration: "underline" }}>
            My payouts:
          </Typography>
          {cards.map((card, index) => (
            <PayoutCard content={card} key={index} />
          ))}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Reset;
