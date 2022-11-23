import { Box, Typography } from "@mui/material";
import React from "react";
import { ReactNode } from "react";
import Server from "../Server";

const backendURLs = Server.backendURLs;
const top3PrizesURL = backendURLs.top3Prizes;

console.log("top3 url = ", top3PrizesURL);

let tempComponent: any;

class Prize extends React.Component<any, any> {
  loadURL: any;

  constructor(props: any) {
    super(props);
    this.loadURL = top3PrizesURL;
    this.state = {
      error: null,
      isLoading: false,
      prizes: [],
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
        console.log("top3 = ", result.prizes);
        tempComponent.setState({
          error: null,
          isLoading: false,
          prizes: result.prizes,
        });
      }
    });
  }

  render(): ReactNode {
    return (
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
          {this.state.prizes.map((item: any, i: any) => {
            return (
              <Box className="prize-award-item" pt={i === 1 ? 0 : 3} key={i}>
                <img src={`images/${item.img}`} width={i !== 1 ? "70px" : "100%"} alt="Prize Award Second" />
                <Typography color="white">{item.title}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    );
  }
}

export default Prize;
