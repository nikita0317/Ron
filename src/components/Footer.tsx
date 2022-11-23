import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";

class Footer extends React.Component<any, any> {
  render(){
    return (
      <Box className="footer">
        {this.props.list && (
          <Grid container spacing={2} sx={{ mb: "30px", maxWidth: '700px' }}>
            <Grid item xs={6} md={3}>
              <Link>Reward Policy</Link>
            </Grid>
            <Grid item xs={6} md={3}>
              <Link>Terms of Use</Link>
            </Grid>
            <Grid item xs={6} md={3}>
              <Link>Privacy Policy</Link>
            </Grid>
            <Grid item xs={6} md={3}>
              <Link>Cookie Policy</Link>
            </Grid>
          </Grid>
        )}
        <Typography color="white">@TreatCoin</Typography>
        <Typography color="#7674F5">Allrights Reserved 2022</Typography>
      </Box>
    );
  }
};

export default Footer;
