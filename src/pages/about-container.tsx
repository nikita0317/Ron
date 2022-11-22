import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { ReactNode } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Server from "../Server";

const configuration = require("../configuration.json");
const content = require("../content.json");

const backendURLs = Server.backendURLs;
const aboutURL = backendURLs.about;

console.log("backendURL = ", backendURLs);
console.log("server = ", Server.responseCodes);

let tempComponent: any;

class About extends React.Component<any, any> {
  loadURL: any;

  constructor(props: any) {
    super(props);
    this.loadURL = aboutURL;
    this.state = {
      error: null,
      isLoading: false,
      description: [],
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
          description: result.description,
        });
      }
    });
  }
  render(): ReactNode {
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
        <Box className="about-container" id="about">
          <Typography variant="h3" fontSize={55} className="title">
            How Does it Work?
          </Typography>
          <Grid container spacing={2}>
            {this.state.description.map((item: any, i: any) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <Box>
                    <img src={`images/about/${i + 1}.png`} />
                    <Typography variant="h5" color="#CB8F6D">
                      {console.log(item.title)}
                      {item.title}
                    </Typography>
                    <Typography variant="body1" color="white">
                      {item.content}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Button>{content.join_button}</Button>
        </Box>
      );
    }
  }
}

export default About;
