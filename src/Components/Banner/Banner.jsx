// Import Swiper
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {
  return (
    <div className="mt-24  w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
        }}
        // style={{ width: '100%', height: '70vh' }} // Explicit height for the container
        className='w-full  h-1/2 md:h-[60vh]'
      >
        <SwiperSlide>
          <div className="w-full  h-full">
            <img
              className="w-full h-52 md:h-full "
              src="https://raw.githubusercontent.com/Razzak118348/CraftedCanvas_Image/main/images/dioT%20lab%20banner/DIoT%20Banner.jpg"
              alt="Banner 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full  h-full">
            <img
              className="w-full h-full "
              src="https://raw.githubusercontent.com/Razzak118348/CraftedCanvas_Image/main/images/dioT%20lab%20banner/bannaer.png"
              alt="Banner 2"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
