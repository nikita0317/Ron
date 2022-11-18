import { Box, Button, Link, Paper, Theme, Typography, Divider, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Footer from "../Footer";
import CookieCard from "../components/CookieCard";
import SwiperContainer from "../components/SwiperContainer";

const Home = () => {
    const [awardLists, setAwardLists] = useState([]);

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

        setAwardLists(data.awardLists);
    };

    useEffect(() => {
        getData();
    }, []);

    const scrollToDiv = (text: string) => {
        window.scrollTo({
            top: document.getElementById(text)?.offsetTop,
            behavior: "smooth", // for smoothly scrolling
        });
    };

    return (
        <Box>
            <Box className="join-container" p={2}>
                <MenuIcon fontSize="large" />
                <Paper elevation={15} className="join-card">
                    <Box className="join-card-content">
                        <img src="images/Logo white.png" alt="Logo White" />
                        <Typography>
                            Earn big <b>cash</b> & win amazing <b>prizes</b> with Treat Coins you gain by referring your friends and completing{" "}
                            <b>fun</b> activities...
                        </Typography>
                        <Link href="#" className="join-link">
                            Tell me more
                        </Link>
                        <Button className="join-button" onClick={(e) => scrollToDiv("about")}>
                            Join TreatCoin
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
                <Box>
                    <img src="images/about/1.png" />
                    <Typography variant="h5" color="#CB8F6D">
                        Meet Treat Coin
                    </Typography>
                    <Typography variant="body1" color="white">
                        Treat Coin is our virtual currency that’s worth money. The more Treat Coins you gain, the more they will earn back for you
                    </Typography>
                </Box>
                <Box>
                    <img src="images/about/2.png" />
                    <Typography variant="h5" color="#CB8F6D">
                        Gain Treat Coins
                    </Typography>
                    <Typography variant="body1" color="white">
                        Build your team of referrals and gain Treat Coins for every 1st & 2nd gen sign up and for every fun activity you or your team
                        members complete
                    </Typography>
                </Box>
                <Box>
                    <img src="images/about/3.png" />
                    <Typography variant="h5" color="#CB8F6D">
                        Use Your TreatCoins
                    </Typography>
                    <Typography variant="body1" color="white">
                        Use the Treat Coins you gain to convert them to cash, gift cards, cryptocurrency or use them to get NFTs in our coming soon
                        virtual market
                    </Typography>
                </Box>
                <Box>
                    <img src="images/about/4.png" />
                    <Typography variant="h5" color="#CB8F6D">
                        Big Prizes Every Month
                    </Typography>
                    <Typography variant="body1" color="white">
                        Every month the Top 100 TreatCoin gainers win amazing prizes. Each Treat Coin you gain counts - even if you cashed it!
                    </Typography>
                </Box>
                <Button>Join TreatCoin</Button>
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
                    <Typography mt={3} variant="h4" color="white" fontSize={44}>
                        May's Leaderboards
                    </Typography>
                    <Box display="flex" flexDirection="row" justifyContent="space-between" gap={2} px={2}>
                        <Box pt={3}>
                            <Typography color="white">2nd</Typography>
                            <img src="images/awards/2.png" alt="Second Award" />
                            <Box
                                sx={
                                    {
                                        // background: 'url("images/awards/2_back.png") no-repeat',
                                    }
                                }
                            >
                                <Typography color="white">PLAXX</Typography>
                                <Typography color="white">5980 Treat Coins</Typography>
                                <Typography color="white">Motorcycle worth $3K</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <img src="images/awards/crown.png" alt="Award Crown Logo" />
                            <br />
                            <img src="images/awards/1.png" alt="First Award" />
                            <Box
                                sx={
                                    {
                                        // background: 'url("images/awards/1_back.png") no-repeat',
                                    }
                                }
                            >
                                <Typography color="white">PLAXX</Typography>
                                <Typography color="white">5980 Treat Coins</Typography>
                                <Typography color="white">Motorcycle worth $3K</Typography>
                            </Box>
                        </Box>
                        <Box pt={3}>
                            <Typography color="white">3rd</Typography>
                            <img src="images/awards/3.png" alt="Third Award" />
                            <Box
                                sx={
                                    {
                                        // background: 'url("images/awards/3_back.png") no-repeat',
                                    }
                                }
                            >
                                <Typography color="white">PLAXX</Typography>
                                <Typography color="white">5980 Treat Coins</Typography>
                                <Typography color="white">Motorcycle worth $3K</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Paper elevation={15} className="award-lists">
                        <Box className="award-lists-content">
                            {awardLists.map((item: any) => {
                                return (
                                    <>
                                        <Box className="award-lists-item">
                                            <Box display="flex" alignItems="center" gap={2}>
                                                <Box className="award-lists-item-number">{item.id}</Box>
                                                <Typography variant="h6" color="black">
                                                    <b>{item.name}</b>
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography color="#8D31E4">{item.coin}</Typography>
                                                <Typography color="#141629" sx={{ opacity: 0.5 }}>
                                                    Treat Coins
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography color="#8D31E4">{item.prize}</Typography>
                                                <Typography color="#141629" sx={{ opacity: 0.5 }}>
                                                    Prize
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Divider />
                                    </>
                                );
                            })}
                        </Box>
                    </Paper>
                </Box>
                <Typography color="white" className="comments">
                    *Awards are delivered in money according to the sum shown next to it and in any way you choose to redeem it via Plum: cash, gift
                    card, or a prepaid credit card (depending on what's available via Plum in your country and your voucher's sum).
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
                <Link>See all offers</Link>
                <Button className="join-button">Join TreatCoin</Button>
            </Box>
            <Footer />
            <CookieCard />
        </Box>
    );
};

export default Home;
