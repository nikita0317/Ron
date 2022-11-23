import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import Header from "../components/header";
import RefreshIcon from "@mui/icons-material/Refresh";
import Footer from "../components/footer";
import StateCardContainer from "../components/state-card-container";
import StateCoinContainer from "../components/state-coin-container";

const content = require("../content.json");

class ResetPassword extends React.Component<any, any> {
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
          
          <Box className="reset-password-content">
            <StateCardContainer />
            <IconButton>
              <RefreshIcon sx={{ color: "white", padding: "14px" }} fontSize="large" />
            </IconButton>
            <StateCoinContainer />
          </Box>
          <Footer />
        </Box>
      </>
    );
  }
}

export default ResetPassword;
