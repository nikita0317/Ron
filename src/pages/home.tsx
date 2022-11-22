import { Box, Button, Link, Paper, Typography, Divider, Stack, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CookieCard from "../components/CookieCard";
import SwiperContainer from "../components/SwiperContainer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getData } from "../utils/helpers";
import Loading from "../components/Loading";
import React from "react";

const configuration = require('../configuration.json');
const content = require('../content.json');
const about = require('../variants/guest/about');

const imgPath = configuration.paths.images_path;

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
    
    fetch(about)
      .then((r)=>r.text())
      .then(text=>
        this.setState({ description: JSON.parse(text).description}
      ))

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
        <Box className="join-container" p={2}>
          <Header overlap={true} />
          <Paper elevation={15} className="join-card">
            <Box className="join-card-content">
              <img src="images/Logo white.png" alt="Logo White" />
              <Typography dangerouslySetInnerHTML={{__html: content.join_description}}>
              </Typography>
              <Link href="#" className="join-link">
                {content.tell_me_more}
              </Link>
              <Button className="join-button" onClick={(e) => this.scrollToDiv("about")}>
                {content.join_button}
              </Button>
            </Box>
          </Paper>
        </Box>
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
        <Box className="about-container" id="about">
          <Typography variant="h3" fontSize={55} className="title">
            How Does it Work?
          </Typography>
          <Grid container spacing={2}>
            {this.state.description.map((item: any, i: any) => {
              return(
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <Box>
                    <img src={`${imgPath}/about/${i+1}.png`} />
                    <Typography variant="h5" color="#CB8F6D">
                      {console.log(item.title)}{ item.title}
                    </Typography>
                    <Typography variant="body1" color="white">
                      {item.content}
                    </Typography>
                  </Box>
                </Grid>
              )
            })}
          </Grid>
          <Button>{content.join_button}</Button>
        </Box>
        <Box className="prize-container">
          <Typography variant="h3" fontSize={55} className="title">
            Prizes of May 2022
          </Typography>
          <Box className="prize-card-container">
            <Box className="prize-card">
              <Box className="prize-card-title">
                <Typography color="white">Divided between the TOP 100:</Typography>
              </Box>
              <Box className="prize-card-content">
                <Typography variant="h2">10K USD</Typography>
              </Box>
            </Box>
          </Box>
          <Typography variant="h6" color="white">
            First 3 places:
          </Typography>
          <Box className="prize-award-container">
            <Box className="prize-award-item" pt={3}>
              <img src="images/first3/2.png" width="70px" alt="Prize Award Second" />
              <Typography color="white">Motorcycle worth $3K</Typography>
            </Box>
            <Box className="prize-award-item">
              <img src="images/first3/1.png" alt="Prize Award First" />
              <Typography color="white">$4K</Typography>
            </Box>
            <Box className="prize-award-item" pt={3}>
              <img src="images/first3/3.png" width="70px" alt="Prize Award Third" />
              <Typography color="white">iPhone 14 worth $1.5K</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="leader-board-container">
          <Box className="leader-board-card">
            <Typography
              mt={3}
              variant="h4"
              color="white"
              fontSize={44}
            >
              May's Leaderboards
            </Typography>
            <Box 
              className='top-awards'
            >
              <Box sx={{ paddingTop: "20px", position: "relative" }}>
                <Typography color="white">2nd</Typography>
                <img src="images/awards/2.png" alt="Second Award" />
                <Box>
                  <Typography color="white">PLAXX</Typography>
                  <Typography color="white">5980 Treat Coins</Typography>
                  <Typography color="white">Motorcycle worth $3K</Typography>
                  <Box className='backRectangle1'/>
                </Box>
              </Box>
              <Box sx={{ position: 'relative' }}>
                <Box>
                  <img src="images/awards/crown.png" alt="Award Crown Logo" />
                </Box>
                <img src="images/awards/1.png" alt="First Award" />
                <Box>
                  <Typography color="white">PLAXX</Typography>
                  <Typography color="white">5980 Treat Coins</Typography>
                  <Typography color="white">Motorcycle worth $3K</Typography>
                  <Box className='backRectangle2'/>
                </Box>
              </Box>
              <Box sx={{ marginTop: '20px', position: 'relative' }}>
                <Typography color="white">3rd</Typography>
                <img src="images/awards/3.png" alt="Third Award" />
                <Box>
                  <Typography color="white">PLAXX</Typography>
                  <Typography color="white">5980 Treat Coins</Typography>
                  <Typography color="white">Motorcycle worth $3K</Typography>
                  <Box className='backRectangle3'/>
                </Box>
              </Box>
            </Box>
            <Paper elevation={15} className="award-lists">
              <Box className="award-lists-content">
                {this.state.awardLists.map((item: any, i: any) => {
                  return (
                    <Box key={i}>
                      <Box className="award-lists-item">
                        <Box display="flex" alignItems="center" gap={2}>
                          <Box className="award-lists-item-number">#{item.id}</Box>
                          <Typography variant="h6" color="black">
                            <b>{item.name}</b>
                          </Typography>
                        </Box>
                        <Box>
                          <Typography color="#8D31E4" fontWeight={700}>{item.coin}</Typography>
                          <Typography color="#141629" sx={{ opacity: 0.5 }}>
                            Treat Coins
                          </Typography>
                        </Box>
                        <Box>
                          <Typography color="#8D31E4" fontWeight={700}>{item.prize}</Typography>
                          <Typography color="#141629" sx={{ opacity: 0.5 }}>
                            Prize
                          </Typography>
                        </Box>
                      </Box>
                      <Divider />
                    </Box>
                  );
                })}
              </Box>
            </Paper>
          </Box>
          <Typography color="white" className="comments">
            *Awards are delivered in money according to the sum shown next to it and in any way you choose to redeem it via Plum: cash, gift card, or a
            prepaid credit card (depending on what's available via Plum in your country and your voucher's sum).
          </Typography>
        </Box>
        <Box className="offer-container">
          <Typography variant="h3" fontSize={39} className="title">
            Gain Treat Coins by completing fun offers
          </Typography>
          <Box className="offer-item">
            <img src="images/logos/lmlive.png" alt="LmLive Logo" />
            <Typography color="white">Adult webcam platform</Typography>
            <img src="images/offers/none.png" />
          </Box>
          <Box className="offer-item">
            <img src="images/logos/morgi.png" alt="Morgi Logo" />
            <Typography color="white">Because doing good is super cool</Typography>
            <img src="images/offers/morgi_back.png" />
          </Box>
          <Box className="offer-item">
            <img src="images/logos/jantasy.png" alt="Jantasy Logo" />
            <Typography color="white">Sexy lingerie boutique</Typography>
            <img src="images/offers/none.png" />
          </Box>
          <Link>{content.see_all_offers}</Link>
          <Button className="join-button">{content.join_button}</Button>
        </Box>
        <Footer list={true} />
        <CookieCard />
      </Box>
    );
  }
};

export default Home;