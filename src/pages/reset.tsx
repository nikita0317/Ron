import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../components/header";
import Footer from "../components/footer";
import StateCardContainer from "../components/state-card-container";
import PayoutCardContainer from "../components/payout-card-container";

const content = require("../content.json");

class Reset extends React.Component<any, any> {
  render() {
    return (
      <>
        <Header overlap={false} />
        <Box bgcolor="black" sx={{ padding: "17px" }} textAlign="center" display="flex" flexDirection="column" alignItems="center">
          <Box className="reset-page">
            <Typography variant="h3" className="title" py={2} textAlign="center">
              {content.reset_page_title}
            </Typography>
            <Typography mt={2} textAlign="center" fontWeight={400} color="white" variant="h6" mb={3}>
              {content.reset_page_description}
            </Typography>
            <StateCardContainer/>
            <Typography mt={2} textAlign="center" fontWeight={400} color="white" sx={{ textDecoration: "underline" }}>
              {content.my_payouts_label}
            </Typography>
            <PayoutCardContainer/>
          </Box>
          <Footer />
        </Box>
      </>
    );
  }
}

export default Reset;
