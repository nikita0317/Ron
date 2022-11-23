import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { ReactNode } from "react";
import Server from "../Server";

const content = require("../content.json");
const backendURLs = Server.backendURLs;
const awardListsURL = backendURLs.awardLists;

let tempComponent: any;

class LeaderBoard extends React.Component<any, any> {
  loadURL: any;

  constructor(props: any) {
    super(props);
    this.loadURL = awardListsURL;
    this.state = {
      isLoading: false,
      awardLists: [],
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
        console.log("awardLists = ", result);
        tempComponent.setState({
          error: null,
          isLoading: false,
          awardLists: result.awardLists,
        });
      }
    });
  }

  render(): ReactNode {
    const { awardLists } = this.state;
    const topAwards = awardLists.slice(0, 3);

    return (
      <Box className="leader-board-container">
        <Box className="leader-board-card">
          <Typography mt={3} variant="h4" color="white" fontSize={44}>
            {content.leader_board_title}
          </Typography>
          <Box className="top-awards">
            {topAwards.length &&
              topAwards.map((item: any, i: any) => {
                const order = i === 0 ? 2 : i === 1 ? 1 : 3;
                return (
                  <Box
                    sx={{
                      paddingTop: i === 0 ? "0" : "20px",
                      position: "relative",
                      order: order,
                    }}
                  >
                    <Box>
                      {i === 0 ? (
                        <img src="images/awards/crown.png" alt="Award Crown Logo" />
                      ) : i === 1 ? (
                        <Typography color="white">{content.second_label}</Typography>
                      ) : (
                        <Typography color="white">{content.third_label}</Typography>
                      )}
                    </Box>
                    <img src={`images/awards/${i + 1}.png`} alt={`Award ${order}`} />
                    <Box>
                      <Typography color="white">{item.name}</Typography>
                      <Typography color="white">
                        {item.coin} {content.total_coins_label}
                      </Typography>
                      <Typography color="white">{item.prize}</Typography>
                      <Box className={`backRectangle${order}`} />
                    </Box>
                  </Box>
                );
              })}
          </Box>
          <Paper elevation={15} className="award-lists">
            <Box className="award-lists-content">
              {awardLists.map((item: any, i: any) => {
                if (i > 2)
                  return (
                    <Box key={i}>
                      <Box className="award-lists-item">
                        <Box display="flex" alignItems="center" gap={2}>
                          <Box className="award-lists-item-number">#{item.id}</Box>
                          <Typography variant="h6" color="black">
                            <b>{item.name}</b>
                          </Typography>
                        </Box>
                        <Box>
                          <Typography color="#8D31E4" fontWeight={700}>
                            {item.coin}
                          </Typography>
                          <Typography color="#141629" sx={{ opacity: 0.5 }}>
                            {content.total_coins_label}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography color="#8D31E4" fontWeight={700}>
                            {item.prize}
                          </Typography>
                          <Typography color="#141629" sx={{ opacity: 0.5 }}>
                            {content.prize_label}
                          </Typography>
                        </Box>
                      </Box>
                      <Divider />
                    </Box>
                  );
              })}
            </Box>
          </Paper>
        </Box>
        <Typography color="white" className="comments">
          {content.leader_board_comment}
        </Typography>
      </Box>
    );
  }
}

export default LeaderBoard;
