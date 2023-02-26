// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectCards, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { dataSlides, dataSlidesType } from '../../assets/data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect } from 'react';

type SwiperProps = {
  data: [];
  mode: string;
  setBgUrl: any;
}

export default (props :SwiperProps) => {
  const {data = [], mode = 'gallery', setBgUrl= undefined} = props;

  // useEffect(()=>{
  //   if(dataSlides?.length > 0 && setBgUrl){
  //     setBgUrl(dataSlides[0].imageUrl)
  //   }
  // },[dataSlides]);

  return (
    <Swiper
      // install Swiper modules
      // spaceBetween={50}
      // slidesPerView={3}
      // navigation
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => {
        if(dataSlides?.length > 0 && setBgUrl){
              setBgUrl(dataSlides[0].imageUrl)
            }
      }}
      pagination={{ clickable: true }}
      autoplay={true}
      onSlideChange={(e) => {
        const bgData = dataSlides[e.realIndex];
        if(bgData && setBgUrl){
          setBgUrl(bgData.imageUrl);
        }
       
      }}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      effect={mode === 'gallery' ? "cards" : "coverflow"}
        grabCursor={true}
        modules={mode === 'gallery' ? [EffectCards] : [EffectCoverflow, Pagination]}
    >
      {dataSlides.length > 0 && dataSlides.map((slide: dataSlidesType, index: number) => (
      <SwiperSlide key={index} className='w-auto relative rounded-md overflow-hidden'>
        <img className='w-full object-cover h-[400px]' src={slide.imageUrl}/>
        <div className="absolute bg-black/50 text-white p-4 bottom-4 w-full shadow-md">
          <h3 className="">{slide.name}</h3>
          <p className='truncate max-h-[20px]'>{slide.desc}</p>
        </div>
      </SwiperSlide>
      ))}
     
    </Swiper>
  );
};