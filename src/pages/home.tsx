import { Box } from "@mui/material";
import CookieCard from "../components/CookieCard";
import Footer from "../components/Footer";
import React from "react";
import JoinContainer from "../components/join-container";
import TreatCoin from "../components/treatcoin-container";
import About from "../components/about-container";
import Prize from "../components/prize-container";
import Offer from "../components/offer-container";
import LeaderBoard from "../components/leaderboard-container";

class Home extends React.Component<any, any> {
  render() {
    return (
      <Box sx={{overflowX: 'hidden'}}>
        <JoinContainer/>
        <TreatCoin/>
        <About/>
        <Prize/>
        <LeaderBoard/>
        <Offer/>
        <Footer list={true} />
        <CookieCard />
      </Box>
    );
  }
};

export default Home;