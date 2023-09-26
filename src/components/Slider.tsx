import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import "../App.css";
// import useBreakpoint from "../hooks/useBreakPoint";
export default function MySlider() {
  //   const isDesktop = useBreakpoint(1000);
  //   const isTablet = useBreakpoint(640);
  //   const isMobile = useBreakpoint(375);

  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={1}
      loop={true}
      //   centeredSlides={true}
      //   centeredSlidesBounds={true}
      modules={[Navigation, Pagination]}
      navigation={true}
      className="w-full"
    >
      <SwiperSlide className="flex justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <img className="w-full" src="/Logo.png" alt="Project Image" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Project Title</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #tag2
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        {" "}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/Logo.png" alt="Project Image" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Project Title</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #tag2
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        {" "}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/Logo.png" alt="Project Image" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Project Title</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #tag2
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        {" "}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/Logo.png" alt="Project Image" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Project Title</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #tag2
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        {" "}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/Logo.png" alt="Project Image" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Project Title</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #tag2
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        {" "}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/Logo.png" alt="Project Image" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Project Title</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #tag2
            </span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
