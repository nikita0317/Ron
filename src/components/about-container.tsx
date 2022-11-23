import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { ReactNode } from "react";

const content = require("../content.json");

class About extends React.Component<any, any> {

  render(): ReactNode {
    return (
      <Box className="about-container" id="about">
        <Typography variant="h3" fontSize={55} className="title">
          How Does it Work?
        </Typography>
        <Grid container spacing={2}>
          {content.description.map((item: any, i: any) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box>
                  <img src={`images/about/${i + 1}.png`} alt={`About_image ${i + 1}`} />
                  <Typography variant="h5" color="#CB8F6D">
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="white">
                    {item.content}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
        <Button>{content.join_button}</Button>
      </Box>
    );
  }
}

export default About;
