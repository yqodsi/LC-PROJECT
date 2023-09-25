import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function Projects() {
  return (
    <div className="flex flex-col items-center py-10 px-[100px]">
      <p className="text-3xl">ALCUNI NOSTRI PROGETTI</p>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Projects;
