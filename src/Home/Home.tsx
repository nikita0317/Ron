import { Box, Button, Link, Paper, Theme, Typography, Divider, Stack} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from '@mui/icons-material/Menu';
import Footer from "../Footer";
import CookieCard from "../components/CookieCard";
import SwiperContainer from "../components/SwiperContainer";

const useStyles = makeStyles((theme: Theme) => ({
    treatMoneyContainer: {
        padding: '50px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        borderBottom: '13px solid transparent',
        borderImage: 'url("images/border.png") 100 13'
    },
    aboutContainer: {
        padding: '50px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
        textAlign: 'center'
    },
    step: {
        '& h1': {
            opacity: 0.37,
            textShadow: '0px 0px 6px rgba(0, 0, 0, 0.4)'
        }
    },
    prizeContainer: {
        padding: '0 0 50px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
        textAlign: 'center'
    },
    leaderBoardContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        textAlign: 'center'
    },
    awardListContainer: {
        borderRadius: '38px !important',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        textAlign: 'center'
    },
    offerContainer: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        alignItems: 'center',
        textAlign: 'center',
    }
}));

const Home = () => {
    const classes = useStyles();
    const awardLists = [
        {
            id: 1,
            name: 'BLAXX',
            coin: 5965,
            prize: 156
        },
        {
            id: 2,
            name: 'BLAXX',
            coin: 5965,
            prize: 156
        },
        {
            id: 3,
            name: 'BLAXX',
            coin: 5965,
            prize: 156
        },
        {
            id: 4,
            name: 'BLAXX',
            coin: 5965,
            prize: 156
        },
        {
            id: 5,
            name: 'BLAXX',
            coin: 5965,
            prize: 156
        },
        {
            id: 6,
            name: 'BLAXX',
            coin: 5965,
            prize: 156
        },
    ];

    const scrollToDiv = (text: string) => {
        window.scrollTo({
          top: document.getElementById(text)?.offsetTop,
          behavior: 'smooth' // for smoothly scrolling
        });
    };
    
    return (
      <Box>
        <Box 
            className='join-container'
            p={2}
        >
            <MenuIcon/>
            <Paper 
            elevation={15}
            sx={{
                px: 1,
                py: 2,
            }}
            >
            <Box
                className='join-card'
                gap={2}
            >
                <img src='images/Logo white.png' alt="Logo White"/>
                <Typography>
                    Earn big <b>cash</b> & win amazing <b>prizes</b> with Treat Coins you gain by referring your friends and completing <b>fun</b> activities...
                </Typography>
                <Link 
                    href="#" 
                    className='join-link'
                >
                    Tell me more
                </Link>
                <Button
                    className='join-button'
                    onClick={e => scrollToDiv('about')}
                >
                    Join TreatCoin
                </Button>
            </Box>
            </Paper>
        </Box>
        <Box
            className='treatcoin-container'
            flexDirection='column'
            gap={3}
            px={2}
            py={6}
        >
            <Typography className='title' fontSize={44} mb={3}>
            Treat Coins = Money
            </Typography>
            <Typography variant='h5' color='white'>
            You earn:
            </Typography>
            <Box sx={{width: '100%', position: 'relative'}}>
                <SwiperContainer/>
            </Box>
            <Typography variant='h5' color='white'>
            You get:
            </Typography>
            <Box>
            <Typography variant='h5' color='#CB8F6D' fontSize={41}>
                $50
            </Typography>
            <Typography variant='h5' color='#5FC88F'>
                in cash, crypto or gift card value
            </Typography>
            </Box>
            <Typography variant='h5' color='white'>
            Or
            </Typography>
            <Box>
            <Typography variant='h5' color='#CB8F6D' fontSize={41}>
                $100
            </Typography>
            <Typography variant='h5' color='#5FC88F'>
                to buy NFTs
            </Typography>
            </Box>
            <Typography variant='h5' color='white'>
                and
            </Typography>
            <Typography variant='h5' color='#5FC88F'>
                Every month the Top 100 Treat Coin gainers win amazing prizes!
            </Typography>
            <Button sx={{mt: 3}}>
                Start Earning TreatCoins
            </Button>
        </Box>
        <Box className={classes.aboutContainer} id='about'>
            <Typography 
              variant='h3'
              fontSize={55}
            >
                How Does it Work?
            </Typography>
            <Box className={classes.step}>
                <img src='images/about/1.png'/>
                <Typography variant="h5" color='#CB8F6D'>Meet Treat Coin</Typography>
                <Typography variant="body1" color='white'>Treat Coin is our virtual currency that’s worth money. The more Treat Coins you gain, the more they will earn back for you</Typography>
            </Box>
            <Box className={classes.step}>
                <img src='images/about/2.png'/>
                <Typography variant="h5" color='#CB8F6D'>Gain Treat Coins</Typography>
                <Typography variant="body1" color='white'>Build your team of referrals and gain Treat Coins for every 1st & 2nd gen sign up and for every fun activity you or your team members complete</Typography>
            </Box>
            <Box className={classes.step}>
                <img src='images/about/3.png'/>
                <Typography variant="h5" color='#CB8F6D'>Use Your TreatCoins</Typography>
                <Typography variant="body1" color='white'>Use the Treat Coins you gain to convert them to cash, gift cards, cryptocurrency or use them to get NFTs in our coming soon virtual market</Typography>
            </Box>
            <Box className={classes.step}>
                <img src='images/about/4.png'/>
                <Typography variant="h5" color='#CB8F6D'>Big Prizes Every Month</Typography>
                <Typography variant="body1" color='white'>Every month the Top 100 TreatCoin gainers win amazing prizes. Each Treat Coin you gain counts - even if you cashed it!</Typography>
            </Box>
            <Button>Join TreatCoin</Button>
        </Box>
        <Box className={classes.prizeContainer}>
            <Typography
              variant='h3'
              fontSize={55}
            >
              Prizes of May 2022
            </Typography>
            <Box
                sx={{
                    width: '100%',
                    height: '400px',
                    backgroundSize: '100%',
                    background: 'url("images/prize.png") center no-repeat',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        width: 'fit-content',
                        marginTop: '240px',
                        borderRadius: '25px',
                        background: 'linear-gradient(126.82deg, rgba(192, 232, 255, 0.4) 0.03%, rgba(192, 232, 255, 0) 113.88%)',
                        filter: 'drop-shadow(0px 4px 30px #121424)',
                        backdropFilter: 'blur(15px)'
                    }}
                >
                    <Box
                        sx={{
                            padding: '5px 15px',
                            background: 'linear-gradient(126.82deg, rgba(192, 232, 255, 0.4) 0.03%, rgba(192, 232, 255, 0) 113.88%)',
                            filter: 'drop-shadow(0px 4px 30px #121424)',
                            backdropFilter: 'blur(15px)',
                            borderRadius: '25px 25px 0px 0px'
                        }}
                    >
                        <Typography color='white'>Divided between the TOP 100:</Typography>
                    </Box>
                    <Box
                        sx={{
                            padding: '25px 25px'
                        }}
                    >
                        <Typography
                            variant='h2'
                            sx={{
                                background: 'linear-gradient(180deg, #AB4FD1 21.67%, #F1C0F8 77.22%)',
                                webkitBackgroundClip: 'text',
                                webkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textFillColor: 'transparent',
                                WebkitTextStroke: '1px #F5CAFA'
                            }}
                        >
                            10K USD
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Typography variant='h6' color='white'>First 3 places:</Typography>
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                <Box
                    sx={{
                        paddingTop: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '13px'
                    }}
                >
                    <img src='images/first3/2.png' width='70px'/>
                    <Typography color='white'>Motorcycle worth $3K</Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '13px'
                    }}
                >
                    <img src='images/first3/1.png'/>
                    <Typography color='white'>$4K</Typography>
                </Box>
                <Box
                    sx={{
                        paddingTop: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '13px'
                    }}
                >
                    <img src='images/first3/3.png' width='70px'/>
                    <Typography color='white'>iPhone 14 worth $1.5K</Typography>
                </Box>
            </Box>
        </Box>
            <Box className={classes.leaderBoardContainer}>
                <Box
                    sx={{
                        background: 'linear-gradient(138.74deg, #8938B9 7.25%, #6219DE 65.79%)',
                        borderRadius: '38px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}
                >
                    <Typography
                      sx={{ mt: 3 }}
                      variant='h4'
                      color='white'
                      fontSize={44}
                    >
                        May's Leaderboards
                    </Typography>
                    <Box 
                        sx={{
                            display: 'flex'
                        }}
                    >
                        <Box sx={{ paddingTop: '20px' }}>
                            <Typography color='white'>2nd</Typography>
                            <img src='images/awards/2.png'/>
                            <Box
                                sx={{
                                    // background: 'url("images/awards/2_back.png") no-repeat',
                                }}
                            >
                                <Typography color='white'>PLAXX</Typography>
                                <Typography color='white'>5980 Treat Coins</Typography>
                                <Typography color='white'>Motorcycle worth $3K</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <img src='images/awards/crown.png'/>
                            <img src='images/awards/1.png'/>
                            <Box
                                sx={{
                                    // background: 'url("images/awards/1_back.png") no-repeat',
                                }}
                            >
                                <Typography color='white'>PLAXX</Typography>
                                <Typography color='white'>5980 Treat Coins</Typography>
                                <Typography color='white'>Motorcycle worth $3K</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ paddingTop: '20px' }}>
                            <Typography color='white'>3rd</Typography>
                            <img src='images/awards/3.png'/>
                            <Box
                                sx={{
                                    // background: 'url("images/awards/3_back.png") no-repeat',
                                }}
                            >
                                <Typography color='white'>PLAXX</Typography>
                                <Typography color='white'>5980 Treat Coins</Typography>
                                <Typography color='white'>Motorcycle worth $3K</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Paper className={classes.awardListContainer} elevation={15}>
                        <Box 
                            sx={{
                                p: 2,
                                background: '#F6F7FB',
                                borderRadius: '38px',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            {
                                awardLists.map((item:any)=>{
                                    return (
                                        <>
                                            <Box sx={{
                                                    py: 3,
                                                    display:'flex',
                                                    justifyContent: 'space-between'
                                                }}
                                            >
                                                <Box 
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '10px'
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            width: '45px',
                                                            height: '45px',
                                                            background: 'url("images/awards/item.png")',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}
                                                    >
                                                        { item.id }
                                                    </Box>
                                                    <Typography variant='h6' color='black'><b>{item.name}</b></Typography>
                                                </Box>
                                                <Box>
                                                    <Typography color='#8D31E4'>{item.coin}</Typography>
                                                    <Typography color='#141629' sx={{opacity: 0.5}}>Treat Coins</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography color='#8D31E4'>{item.prize}</Typography>
                                                    <Typography color='#141629' sx={{opacity: 0.5}}>Prize</Typography>
                                                </Box>
                                            </Box>
                                            <Divider/>
                                        </>
                                    )
                                })
                            }
                        </Box>
                    </Paper>
                </Box>
                <Typography color='white' sx={{fontSize: '12px', fontStyle: 'italic', p: 2}}>*Awards are delivered in money according to the sum shown next to it and in any way you choose to redeem it via Plum: cash, gift card, or a prepaid credit card (depending on what's available via Plum in your country and your voucher's sum).</Typography>
            </Box>
            <Box className={classes.offerContainer}>
                <Typography
                  variant='h3'
                  fontSize={39}
                >
                  Gain Treat Coins by completing fun offers
                </Typography>
                <Box sx={{textAlign: 'left'}}>
                    <img src='images/logos/lmlive.png'/>
                    <Typography color='white' sx={{mt: '10px'}}>Adult webcam platform</Typography>
                    <img src='images/offers/none.png' style={{ marginTop: '20px', width: '100%'}}/>
                </Box>
                <Box sx={{textAlign: 'left'}}>
                    <img src='images/logos/morgi.png'/>
                    <Typography color='white' sx={{mt: '10px'}}>Because doing good is super cool</Typography>
                    <img src='images/offers/morgi_back.png' style={{ marginTop: '20px', width: '100%', borderRadius: '20px'}}/>
                </Box>
                <Box sx={{textAlign: 'left'}}>
                    <img src='images/logos/jantasy.png'/>
                    <Typography color='white' sx={{mt: '10px'}}>Sexy lingerie boutique</Typography>
                    <img src='images/offers/none.png' style={{ marginTop: '20px', width: '100%', borderRadius: '20px'}}/>
                </Box>
                <Link 
                  sx={{ 
                    color: 'white', 
                    textDecorationColor: 'white'
                  }}
                >
                    See all offers
                  </Link>
                <Button sx={{width: 'fit-content', my: '30px'}}>Join TreatCoin</Button>
            </Box>
            <Footer/>
            <CookieCard/>
      </Box>
    )
}

export default Home;