import React from "react";
import { Box, Select, Typography, MenuItem, IconButton, FormControl, OutlinedInput } from "@mui/material";
import Header from "../components/header";
import TreatState from "../components/treat-state";
import StateCard from "../components/state-card";
import RefreshIcon from "@mui/icons-material/Refresh";
import Footer from "../components/footer";
import Server from "../Server";

const content = require("../content.json");
const backendURLs = Server.backendURLs;
const stateCardURL = backendURLs.stateCard;

let tempComponent: any;

class ResetPassword extends React.Component<any, any> {
  loadURL: any;

  constructor(props: any) {
    super(props);
    this.loadURL = stateCardURL;
    this.state = {
      date: "2022-5",
      cards: [],
      stateProps: null
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
        console.log("stateCards = ", result);
        tempComponent.setState({
          error: null,
          isLoading: false,
          cards: result.stateCards,
          stateProps: result.stateProps
        });
      }
    });
  }

  dateChange = (event: any) => {
    this.setState({ date: event.target.value as string });
  };

  componentDidUpdate(prevProps: any, prevState: any) {
    if (prevState.date !== this.state.date)
      this.setState({
        stateProps: {
          ...this.state.stateProps,
          date: this.state.date,
        },
      });
  }

  render() {
    return (
      <>
        <Header overlap={false} />
        <Box bgcolor="black" sx={{ padding: "17px" }} textAlign="center" display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h3" className="title" py={2} fontWeight="700" textAlign="center">
            {content.reset_password_page_title}
          </Typography>
          <Typography mt={2} textAlign="center" fontWeight={400} color="white" variant="h6">
            {content.reset_password_page_description}
          </Typography>
          <Box display="flex" justifyContent="center" pt={4} pb={2}>
            <FormControl
              sx={{
                m: 1,
                textAlign: "center",
              }}
            >
              <Select
                value={this.state.date}
                onChange={this.dateChange}
                input={<OutlinedInput />}
                sx={{ color: "#BBA7EF", border: "1px solid #685EBF" }}
                inputProps={{
                  "aria-label": "Without label",
                  classes: {
                    icon: "select-icon",
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
          <Box className="reset-password-content">
            {this.state.stateProps && <TreatState state={this.state.stateProps} />}
            <IconButton>
              <RefreshIcon sx={{ color: "white", padding: "14px" }} fontSize="large" />
            </IconButton>
            {this.state.cards.map((card: any, index: any) => (
              <StateCard key={index} states={card} />
            ))}
          </Box>
          <Footer />
        </Box>
      </>
    );
  }
}

export default ResetPassword;
