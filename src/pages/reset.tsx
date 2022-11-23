import React, { useEffect, useState } from "react";
import { Box, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "../components/Header";
import TreatState from "../components/TreatState";
import Footer from "../components/Footer";
import PayoutCard from "../components/PayoutCard";
import { getData } from "../utils/helpers";
import Loading from "../components/Loading";
import Server from "../Server";

const content = require("../content.json");
const backendURLs = Server.backendURLs;
const payoutCardURL = backendURLs.payoutCard;

let tempComponent: any;

class Reset extends React.Component<any, any> {
  loadURL: any;

  constructor(props: any) {
    super(props);
    this.loadURL = payoutCardURL;
    this.state = {
      cards: [],
      isLoading: false,
      stateProps: {
        state: "LifeTime Usable",
        total: 155654,
        used: 12533,
        availableTitle: "stateProps",
        available: 2533,
      },
    };
    tempComponent = this;
  }

  componentDidMount() {
    fetch(this.loadURL, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async function (res) {
      if (res.status !== Server.responseCodes.OK) {
        tempComponent.setState({
          error: true,
          isLoading: false,
        });
      } else {
        let result = await res.json();
        console.log("payoutCard = ", result);
        tempComponent.setState({
          error: null,
          isLoading: false,
          cards: result.payoutCard,
        });
      }
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Box display="flex" justifyContent="center" alignItems="center" color="white" height="100vh">
          <Loading />
        </Box>
      );
    }

    return (
      <>
        <Header overlap={false} />
        <Box bgcolor="black" sx={{ padding: "17px" }} textAlign="center" display="flex" flexDirection="column" alignItems="center">
          <Box className="reset-page">
            <Typography variant="h3" className="title" py={2} textAlign="center">
              {content.reset_page_title}
            </Typography>
            <Typography mt={2} textAlign="center" fontWeight={400} color="white" variant="h6" mb={3}>
              {content.reset_page_description}
            </Typography>
            <TreatState state={this.state.stateProps} />
            <Typography mt={2} textAlign="center" fontWeight={400} color="white" sx={{ textDecoration: "underline" }}>
              {content.my_payouts_label}
            </Typography>
            {this.state.cards.map((card: any, index: any) => (
              <PayoutCard content={card} key={index} />
            ))}
          </Box>
          <Footer />
        </Box>
      </>
    );
  }
}

export default Reset;
