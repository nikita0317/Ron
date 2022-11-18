import React, { FC } from "react";
import { Box, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

type CardProps = {
  content: {
    logo: string;
    content: string;
    state?: string;
    date: string;
  };
};

const PayoutCard: FC<CardProps> = ({ content }) => {

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
                bgcolor={content.state == "pending" ? "#ebb018" : "#fff"}
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
};

export default PayoutCard;
