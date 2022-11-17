import React, { useState, useEffect } from "react";
import {
  Box,
  Select,
  Theme,
  Typography,
  MenuItem,
  IconButton,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "../components/Header";
import TreatState from "../components/TreatState";
import StateCard from "../components/StateCard";
import RefreshIcon from "@mui/icons-material/Refresh";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme: Theme) => ({
  selectIcon: {
    fill: "#fff !important",
    color: "transparent !important",
  },
}));

const ResetPassword = () => {
  const classes = useStyles();
  const [date, setDate] = useState("2022-4");
  const dateChange = (event: any) => {
    setDate(event.target.value as string);
  };

  const cards = [
    {
      logo: "client-logo1",
      bgCol: "#a0699b",
      coin: 2560,
      subtitle: "worth $500 Apple Watch",
      state: "Usable",
      description: "For finishing at #24 place in ‘Maze competition’",
      datetime: "05/08/2022 11:53:32 pm",
    },
    {
      logo: "client-logo2",
      bgCol: "#a1858e",
      coin: 80,
      state: "Usable & Competition",
      description: "Opened a free account",
      datetime: "05/08/2022 11:53:32 pm",
      more: 2,
      link: "/",
    },
    {
      logo: "client-logo3",
      bgCol: "#9f9eba",
      coin: 50,
      state: "Competition",
      description: "Opened a free account",
      datetime: "05/08/2022 11:53:32 pm",
    },
    {
      logo: "client-logo4",
      bgCol: "#6b9283",
      coin: 250,
      state: "Usable",
      description: "{{Referral}} gifted a Rookie",
      datetime: "05/08/2022 11:53:32 pm",
    },
  ];
  const [stateProps, setStateProps] = useState(
    {
      date: '2022-05',
      state: 'Total',
      total: 155654,
      used: 12533,
      availableTitle: 'Competition Valid Treat Coins',
      available: 2533
    }
  )

  useEffect(()=>{
    setStateProps({...stateProps, date: date})
  }, [date]);

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
        >
          See all the actions that earned you Treat Coins and your current
          Treat Coin balance
        </Typography>
        <Box display="flex" justifyContent="center" pt={4} pb={2}>
          <FormControl sx={{ m: 1, minWidth: "50%", textAlign: "center" }}>
            <Select
              value={date}
              onChange={dateChange}
              input={<OutlinedInput />}
              sx={{ color: "#BBA7EF", border: "1px solid #685EBF" }}
              inputProps={{
                "aria-label": "Without label",
                classes: {
                  icon: classes.selectIcon,
                },
              }}
              SelectDisplayProps={{
                style: { paddingTop: 8, paddingBottom: 8, fontSize: 14 },
              }}
            >
              <MenuItem value="2022-3">March 2022</MenuItem>
              <MenuItem value="2022-4">April 2022</MenuItem>
              <MenuItem value="2022-5">May 2022</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TreatState state={stateProps}/>
        <IconButton>
          <RefreshIcon
          sx={{ color: "white", padding: "14px" }}
          fontSize="large"
        />
        </IconButton>
        
        {cards.map((card, index) => (
          <StateCard key={index} content={card} />
        ))}
        <Footer />
      </Box>
    </>
  );
};

export default ResetPassword;
