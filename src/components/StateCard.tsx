import React, { FC } from "react";
import { Box, Theme, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    color: "white",
    fontSize: "14px",
    width: "100%",
  },
}));

type CardProps = {
  content: {
    logo: string;
    bgCol: string;
    coin: number;
    subtitle?: string;
    state: string;
    description: string;
    datetime: string;
    more?: number;
    link?: string;
  };
};

const StateCard: FC<CardProps> = ({ content }) => {
  const classes = useStyles();

  return (
    <Box
      bgcolor={content.bgCol}
      className='state-card'
    >
      <Box display="flex" justifyContent="space-between">
        <img src={`images/${content.logo}.png`} alt="client-logo" />
        <Box textAlign="right">
          <Typography
            lineHeight={1.2}
            fontWeight={400}
            color="#5FC88F"
            fontSize={20}
          >
            +{content.coin.toLocaleString("en-US")} Treat Coins
          </Typography>
          <Typography
            lineHeight={1.2}
            fontWeight={400}
            color="#5FC88F"
            fontSize={12}
          >
            {content.subtitle}
          </Typography>
          <Typography
            lineHeight={1.2}
            fontWeight={400}
            color="#5FC88F"
            fontSize={12}
          >
            ({content.state})
          </Typography>
        </Box>
      </Box>
      <Box display="flex" gap={2} justifyContent="space-between">
        <Box textAlign="left">
          <Typography py={2} color="white" fontSize={12}>
            {content.description}
          </Typography>
        </Box>
        <Box textAlign="right">
          <Typography py={2} color="white" fontSize={12}>
            {content.datetime}
          </Typography>
        </Box>
      </Box>
      {content.more && (
        <Box borderTop="1px dashed #ffffff36">
          <Link to="" className={classes.link}>
            +{content.more} more offers from this brand
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default StateCard;
