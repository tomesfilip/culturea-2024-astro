import { useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Lightbox from 'yet-another-react-lightbox';

import 'swiper/css';
import 'yet-another-react-lightbox/styles.css';
import '../../styles/swiper.css';

const images = [
  { id: 0, src: './galerie/galerie_foto1.webp?url' },
  { id: 1, src: './galerie/galerie_foto2.webp?url' },
  { id: 2, src: './galerie/galerie_foto3.webp?url' },
  { id: 3, src: './galerie/galerie_foto4.webp?url' },
  { id: 4, src: './galerie/galerie_foto5.webp?url' },
];

export const LastYearSlider = () => {
  const [selectedImgId, setSelectedImgId] = useState(-1);

  return (
    <div className="w-full">
      <div className="w-full text-center text-white">
        <p className="text-xl lg:text-[45px] uppercase xl:leading-[60px] font-headline">
          DÁNSKO A BHÚTÁN
        </p>
        <p className="text-xl lg:text-[45px] font-bold xl:leading-[60px] font-headline">
          2023
        </p>
      </div>
      <Lightbox
        index={selectedImgId}
        open={selectedImgId >= 0}
        close={() => setSelectedImgId(-1)}
        slides={images}
      />
      <Swiper
        modules={[Navigation]}
        navigation
        loop
        autoHeight
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          1600: {
            slidesPerView: 5,
          },
        }}
      >
        {images.map(({ id, src }) => (
          <SwiperSlide key={id} onClick={() => setSelectedImgId(id)}>
            <img
              className="object-contain object-center max-w-[512px] max-h-[342px] px-4 cursor-pointer"
              src={src}
              width={512}
              height={342}
              loading="lazy"
              alt={src}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
