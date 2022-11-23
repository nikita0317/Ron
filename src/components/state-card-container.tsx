import React from "react";
import TreatState from "./treat-state";
import Server from "../Server";
import { Box, FormControl, MenuItem, OutlinedInput, Select } from "@mui/material";
import Loading from "./Loading";
import Error from "./Error";

const backendURLs = Server.backendURLs;
const stateCardURL = backendURLs.stateCard;

let tempComponent: any;

class StateCardContainer extends React.Component<any, any> {
  loadURL: any;

  constructor(props: any) {
    super(props);
    this.loadURL = stateCardURL;
    this.state = {
      isLoading: true,
      date: '2022-3',
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
          isLoading: false
        });
      } else {
        let result = await res.json();
        tempComponent.setState({
          error: null,
          isLoading: false,
          stateProps: result.stateProps,
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
          <TreatState state={this.state.stateProps} />
        </>
      );
    }
  }
}

export default StateCardContainer;
