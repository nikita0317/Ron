import React from "react";
import Server from "../Server";
import { Box } from "@mui/material";
import Loading from "./Loading";
import Error from "./Error";
import PayoutCard from "./payout-card";

const backendURLs = Server.backendURLs;
const payoutCardURL = backendURLs.payoutCard;

let tempComponent: any;

class PayoutCardContainer extends React.Component<any, any> {
  loadURL: any;

  constructor(props: any) {
    super(props);
    this.loadURL = payoutCardURL;
    this.state = {
      isLoading: true,
      cards: [],
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
        tempComponent.setState({
          error: null,
          isLoading: false,
          cards: result.payoutCard,
        });
      }
    });
  }

  render() {
    if (this.state.error) {
      return (
        <Box display="flex" justifyContent="center" alignItems="center" color="white" height="100vh">
          <Error />
        </Box>
      );
    } else if (this.state.isLoading) {
      return (
        <Box display="flex" justifyContent="center" alignItems="center" color="white" height="100vh">
          <Loading />
        </Box>
      );
    } else {
      return (
        <>
          {this.state.cards.map((card: any, index: any) => (
            <PayoutCard content={card} key={index} />
          ))}
        </>
      );
    }
  }
}

export default PayoutCardContainer;
