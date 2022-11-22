import { Box, Typography } from "@mui/material";
import React from "react";
import { ReactNode } from "react";

class Prize extends React.Component {
  constructor(props: any) {
    super(props);
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
          <Box className="prize-award-item" pt={3}>
            <img src="images/first3/2.png" width="70px" alt="Prize Award Second" />
            <Typography color="white">Motorcycle worth $3K</Typography>
          </Box>
          <Box className="prize-award-item">
            <img src="images/first3/1.png" alt="Prize Award First" />
            <Typography color="white">$4K</Typography>
          </Box>
          <Box className="prize-award-item" pt={3}>
            <img src="images/first3/3.png" width="70px" alt="Prize Award Third" />
            <Typography color="white">iPhone 14 worth $1.5K</Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Prize;
