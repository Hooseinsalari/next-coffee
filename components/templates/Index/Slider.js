// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <h2 className="text-primary font-weight-medium m-0">
            We Have Been Serving
          </h2>
          <h1 className="display-1 text-white m-0">COFFEE</h1>
          <h2 className="text-white m-0">* SINCE 1950 *</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <h2 className="text-primary font-weight-medium m-0">
            We Have Been Serving
          </h2>
          <h1 className="display-1 text-white m-0">COFFEE</h1>
          <h2 className="text-white m-0">* SINCE 1950 *</h2>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
