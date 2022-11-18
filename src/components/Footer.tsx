import { Box, Theme, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box className='footer'>
        <Typography color="white" textAlign="center">
          © TreatBot.io
        </Typography>
        <Typography color="#7674F5" textAlign="center">
          All Rights Reserved 2021
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
