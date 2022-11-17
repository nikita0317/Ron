import React, { FC } from "react";
import { Box, Theme, Typography } from "@mui/material";
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
    content: string;
    state?: string;
    date: string;
  };
};

const PayoutCard: FC<CardProps> = ({ content }) => {
  const classes = useStyles();

  return (
    <Box
      bgcolor="#fff"
      borderRadius={8}
      boxShadow="0px 4px 4px rgba(159, 125, 219, 0.15)"
      padding="20px"
      my={3}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={5}
      >
        <img src={`images/${content.logo}.png`} alt="client-logo" />
        <Box>
          <Typography
            lineHeight={1.5}
            fontWeight={700}
            textAlign="left"
            fontSize={16}
            mb={0.5}
          >
            {content.content}
          </Typography>
          <Box display="flex" gap={2}>
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
