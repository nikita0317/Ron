import { FC } from 'react';
import { Box, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Server from "../Server";
import React from 'react';

const content = require("../content.json");
const backendURLs = Server.backendURLs;
const payoutCardURL = backendURLs.payoutCard;

type StateProps = {
  state: {
    date?: string,
    state: string,
    total: number,
    used: number,
    availableTitle: string,
    available: number
  }
}
class TreatState extends React.Component <any, any>{
  constructor( props: StateProps) {
    super( props );
  }

  getMonthName(monthNumber: number) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('en-US', { month: 'long' });
  }

  render(): React.ReactNode {
    const { state } = this.props;
    const getMonthName = this.getMonthName;

    return (
      <Box
        bgcolor="#2b2d3e"
        borderRadius={10}
        boxShadow="0px 4px 4px rgba(159, 125, 219, 0.15)"
        textAlign="center"
        padding="20px"
      >
        <HelpOutlineIcon sx={{ color: "#fff", opacity: "0.5" }} />
        {
          state.date && (
            <Typography
              mt={2}
              textAlign="center"
              fontWeight={400}
              color="white"
              sx={{ opacity: "0.5" }}
            >
              Lifetime Treat Coins Earned: {state.total.toLocaleString('en-US')}
            </Typography>
  
          )
        }
        <Box
          sx={{
            borderTop: "1px dashed #484848",
            borderBottom: "1px dashed #484848",
          }}
          py={2}
          my={3}
        >
          <Typography
            variant="h3"
            className='title'
            py={2}
            fontWeight="700"
            textAlign="center"
            fontSize={20}
          >
            {state.state} Treat Coins Earned {state.date && 'in ' + getMonthName(Number(state.date.split('-')[1]))}
          </Typography>
          <Typography
            fontWeight="700"
            color="white"
            textAlign="center"
            lineHeight={1}
            fontSize={52}
          >
            {state.total.toLocaleString('en-US')}
          </Typography>
          <Typography
            fontWeight="700"
            color="white"
            textAlign="center"
            lineHeight={1}
            fontSize={33}
          >
            {content.treat_coins_label}
          </Typography>
        </Box>
        <Box display="flex" gap={2} justifyContent="space-between" my={3}>
          <Box>
            <Typography
              variant="h3"
              className='title'
              py={2}
              fontWeight="700"
              textAlign="center"
              fontSize={16}
            >
              {content.treat_coins_label}{" "}{content.used_by_you}
            </Typography>
            <Typography
              fontWeight="700"
              color="white"
              textAlign="center"
              fontSize={32}
            >
              {state.used.toLocaleString('en-US')}
            </Typography>
            <Typography
              fontWeight="700"
              color="white"
              textAlign="center"
              fontSize={20}
            >
              {content.treat_coins_label}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h3"
              className='title'
              py={2}
              fontWeight="700"
              textAlign="center"
              fontSize={16}
            >
              {content.treat_coins_label}{" "}{content.available_to_use}
            </Typography>
            <Typography
              fontWeight="700"
              color="white"
              textAlign="center"
              fontSize={32}
            >
              {state.available.toLocaleString('en-US')}
            </Typography>
            <Typography
              fontWeight="700"
              color="white"
              textAlign="center"
              fontSize={20}
            >
              {content.treat_coins_label}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default TreatState;
