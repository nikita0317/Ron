import { Box, Grid, Link, Typography } from "@mui/material";
import { FC } from "react";

type footerProps = {
  list?: boolean;
};

const Footer: FC<footerProps> = ({ list }) => {
  return (
    <Box className="footer">
      {list && (
        <Grid container spacing={2} sx={{ mb: "30px" }}>
          <Grid item xs={6}>
            <Link>Reward Policy</Link>
          </Grid>
          <Grid item xs={6}>
            <Link>Terms of Use</Link>
          </Grid>
          <Grid item xs={6}>
            <Link>Privacy Policy</Link>
          </Grid>
          <Grid item xs={6}>
            <Link>Cookie Policy</Link>
          </Grid>
        </Grid>
      )}
      <Typography color="white">@TreatCoin</Typography>
      <Typography color="#7674F5">Allrights Reserved 2022</Typography>
    </Box>
  );
};

export default Footer;
