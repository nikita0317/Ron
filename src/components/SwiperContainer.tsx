import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

const SwiperContainer = () => {
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

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        freeMode={true}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
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
