import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { ReactNode } from "react";

const configuration = require('../configuration.json');
const content = require('../content.json');
const imgPath = configuration.paths.images_path;

class About extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      description: []
    }
  }

  render(): ReactNode {
    return (
      <Box className="about-container" id="about">
        <Typography variant="h3" fontSize={55} className="title">
          How Does it Work?
        </Typography>
        <Grid container spacing={2}>
          {this.state.description.map((item: any, i: any) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box>
                  <img src={`${imgPath}/about/${i + 1}.png`} />
                  <Typography variant="h5" color="#CB8F6D">
                    {console.log(item.title)}
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
