import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/styles";

const SwiperContainer = () => {
  const slidesPerView = [2, 3, 4, 5, 6];
  const [swiperData, setSwiperData] = useState<number[]>([]);

  const getData = async () => {
    const data = await fetch("Data/Data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(function (response) {
      return response.json();
    });

    setSwiperData(data.treatCoinSwiperData);
  };

  useEffect(() => {
    getData();
  }, []);

  const theme = useTheme();
  
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
        {swiperData.map((item, i) => {
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
                <sub style={{ fontSize: "14px" }}>TC</sub>
              </Typography>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperContainer;
