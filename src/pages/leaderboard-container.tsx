import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { ReactNode } from "react";

class LeaderBoard extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      awardLists: [],
    }
  }

  render(): ReactNode {
    return (
      <Box className="leader-board-container">
        <Box className="leader-board-card">
          <Typography mt={3} variant="h4" color="white" fontSize={44}>
            May's Leaderboards
          </Typography>
          <Box className="top-awards">
            <Box sx={{ paddingTop: "20px", position: "relative" }}>
              <Typography color="white">2nd</Typography>
              <img src="images/awards/2.png" alt="Second Award" />
              <Box>
                <Typography color="white">PLAXX</Typography>
                <Typography color="white">5980 Treat Coins</Typography>
                <Typography color="white">Motorcycle worth $3K</Typography>
                <Box className="backRectangle1" />
              </Box>
            </Box>
            <Box sx={{ position: "relative" }}>
              <Box>
                <img src="images/awards/crown.png" alt="Award Crown Logo" />
              </Box>
              <img src="images/awards/1.png" alt="First Award" />
              <Box>
                <Typography color="white">PLAXX</Typography>
                <Typography color="white">5980 Treat Coins</Typography>
                <Typography color="white">Motorcycle worth $3K</Typography>
                <Box className="backRectangle2" />
              </Box>
            </Box>
            <Box sx={{ marginTop: "20px", position: "relative" }}>
              <Typography color="white">3rd</Typography>
              <img src="images/awards/3.png" alt="Third Award" />
              <Box>
                <Typography color="white">PLAXX</Typography>
                <Typography color="white">5980 Treat Coins</Typography>
                <Typography color="white">Motorcycle worth $3K</Typography>
                <Box className="backRectangle3" />
              </Box>
            </Box>
          </Box>
          <Paper elevation={15} className="award-lists">
            <Box className="award-lists-content">
              {this.state.awardLists.map((item: any, i: any) => {
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
                          Treat Coins
                        </Typography>
                      </Box>
                      <Box>
                        <Typography color="#8D31E4" fontWeight={700}>
                          {item.prize}
                        </Typography>
                        <Typography color="#141629" sx={{ opacity: 0.5 }}>
                          Prize
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
          *Awards are delivered in money according to the sum shown next to it and in any way you choose to redeem it via Plum: cash, gift card, or a
          prepaid credit card (depending on what's available via Plum in your country and your voucher's sum).
        </Typography>
      </Box>
    );
  }
}

export default LeaderBoard;
