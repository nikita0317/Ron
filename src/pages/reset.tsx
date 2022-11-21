import React, { useEffect, useState } from "react";
import { Box, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "../components/Header";
import TreatState from "../components/TreatState";
import Footer from "../components/Footer";
import PayoutCard from "../components/PayoutCard";
import { getData } from "../utils/helpers";
import Loading from "../components/Loading";

const Reset = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAssetData = async () => {
    setIsLoading(true);
    const data: any = await getData();
    setTimeout(()=> {
      setCards(data.payoutCard);
    }, 500);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAssetData();
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
  
  if( isLoading ) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center' color='white' height='100vh'>
        <Loading/>
      </Box>
    )
  }
  
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
