import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { Pagination, EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { useLogic } from "./page-slider.logic";
import { slides } from "./page.slider.config";

interface PageSliderProps {}

const PageSlider: FunctionComponent<PageSliderProps> = () => {
  const { setswiper, activeSliderIndex } = useLogic();

  return (
    <Box height={"calc(100vh - 71px)"}>
      <Swiper direction="vertical" preventClicks allowTouchMove={false} effect="flip" slidesPerView={1} modules={[Pagination, EffectCreative]} style={{ height: "100%" }} onSwiper={(swiper) => setswiper(swiper)}>
        {slides.map((item) => (
          <SwiperSlide key={item.index}>
            {activeSliderIndex === item.index}
            <item.component />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default PageSlider;
