import { useAppSelector } from "hooks/store-hooks";
import { useEffect, useState } from "react";
import Swiper from "swiper";

export const useLogic = () => {
  const slider = useAppSelector((root) => root.slider);

  const [swiper, setswiper] = useState<Swiper>();

  useEffect(() => {
    if (swiper && !swiper.destroyed) swiper?.slideTo(slider.activeSlideIndex);
  }, [slider, swiper]);

  return { setswiper, activeSliderIndex: slider.activeSlideIndex };
};
