import React from "react";
import { Box, Typography } from "@mui/material";

class PayoutCard extends React.Component<any, any> {

  render(): React.ReactNode {
    const { content } = this.props;
    return (
      <Box
        className='payout-card'
      >
        <Box className='payout-card-content'>
          <img src={`images/${content.logo}.png`} alt="client-logo" />
          <Box className='payout-card-description'>
            <Typography>
              {content.content}
            </Typography>
            <Box className='payout-card-actions'>
              {content.state && (
                <Typography
                  color="#fff"
                  bgcolor={content.state === "pending" ? "#ebb018" : "#fff"}
                >
                  {content.state}
                </Typography>
              )}
              <Typography color="#8D31E4" fontWeight={700}>
                {content.date}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default PayoutCard;
