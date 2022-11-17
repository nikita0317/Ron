import { Box, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    textAlign: "center",
    padding: "20px",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.footer}>
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
