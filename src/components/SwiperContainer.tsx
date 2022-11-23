import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import { Typography } from "@mui/material";
import React from "react";
import Server from "../Server";

const content = require("../content.json");
const backendURLs = Server.backendURLs;
const treatCoinURL = backendURLs.treatCoin;

console.log("treat Coin = ", treatCoinURL)
let tempComponent: any;

class SwiperContainer extends React.Component <any, any> {
  loadURL: any;

  constructor( props: any ){
    super(props);
    this.loadURL = treatCoinURL;
    this.state = {
      slidesPerView: [2, 3, 4, 5, 6],
      swiperData: []
    }
    tempComponent = this;
  }

  componentDidMount() {
    fetch(this.loadURL, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async function (res) {
      if (res.status !== Server.responseCodes.OK) {
        tempComponent.setState({
          error: true,
          isLoading: false,
        });
      } else {
        let result = await res.json();
        console.log("swiper = ", result);
        tempComponent.setState({
          error: null,
          isLoading: false,
          swiperData: result.swiperData
        });
      }
    });
  }

  render(){
    const { slidesPerView, swiperData } = this.state;
    return (
      <>
        <Swiper
          slidesPerView={slidesPerView[0]}
          spaceBetween={50}
          freeMode={true}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            600: {
              slidesPerView: slidesPerView[0]
            },
            768: {
              slidesPerView: slidesPerView[1]
            },
            992: {
              slidesPerView: slidesPerView[2]
            },
            1200: {
              slidesPerView: slidesPerView[3]
            },
          }}
          className="mySwiper"
        >
          {swiperData.map((item: any, i: any) => {
            return (
              <SwiperSlide key={i}>
                <Typography
                  variant="h5"
                  fontSize={41}
                  fontWeight={500}
                  sx={{
                    userSelect: "none",
                  }}
                >
                  {item.toLocaleString("en-US")}
                  <sub style={{ fontSize: "14px" }}>{content.tc_label}</sub>
                </Typography>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    );
  }
};

export default SwiperContainer;
