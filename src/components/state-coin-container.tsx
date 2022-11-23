import React from "react";
import Server from "../Server";
import { Box } from "@mui/material";
import Loading from "./Loading";
import Error from "./Error";
import StateCoinCard from "./state-card";

const backendURLs = Server.backendURLs;
const stateCardURL = backendURLs.stateCard;

let tempComponent: any;

class StateCoinContainer extends React.Component<any, any> {
  loadURL: any;

  constructor(props: any) {
    super(props);
    this.loadURL = stateCardURL;
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
          cards: result.stateCards,
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
            <StateCoinCard key={index} states={card} />
          ))}
        </>
      );
    }
  }
}

export default StateCoinContainer;
