import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import { Typography } from "@mui/material";

const SwiperContainer = () => {
    const data = [ 5000, 10000, 5000, 10000, 5000, 10000, 5000, 10000 ];

    return (
        <>
          <Swiper
            slidesPerView={3}
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
            {
              data.map((item)=>{
                return (
                  <SwiperSlide>
                    <Typography
                      variant='h5'
                      fontSize={41}
                      fontWeight={500}
                      sx={{
                        userSelect: 'none'
                      }}
                    >
                      {item.toLocaleString('en-US')}<sub style={{fontSize: '14px'}}>TC</sub>
                    </Typography>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </>
    )
}

export default SwiperContainer;