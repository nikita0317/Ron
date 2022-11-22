import { Box, Button, Link, Paper, Typography, Divider, Stack, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CookieCard from "../components/CookieCard";
import SwiperContainer from "../components/SwiperContainer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getData } from "../utils/helpers";
import Loading from "../components/Loading";
import React from "react";
import JoinContainer from "./join-container";
import TreatCoin from "./treatcoin-container";
import About from "./about-container";
import Prize from "./prize-container";

const configuration = require('../configuration.json');
const content = require('../content.json');

class Home extends React.Component<any, any> {
  constructor( props: any ) {
    super( props );
    this.state = {
      awardLists: [],
      isLoading: false,
      description: []
    }
  }

  fetchAssetData = async () => {
    this.setState({ isLoading: true });
    const data: any = await getData();
    setTimeout(()=> {
      this.setState({ awardLists: data.awardLists });
    }, 500)
    
    this.setState({ isLoading: false });
  };

  componentDidMount(){
    this.fetchAssetData();
  }

  scrollToDiv = (text: string) => {
    window.scrollTo({
      top: document.getElementById(text)?.offsetTop,
      behavior: "smooth", // for smoothly scrolling
    });
  }

  render() {
    if( this.state.isLoading ) {
      return (
        <Box display='flex' justifyContent='center' alignItems='center' color='white' height='100vh'>
          <Loading/>
        </Box>
      )
    } else return (
      <Box sx={{overflowX: 'hidden'}}>
        <JoinContainer/>
        <TreatCoin/>
        <About/>
        <Prize/>
        
        <Footer list={true} />
        <CookieCard />
      </Box>
    );
  }
};

export default Home;