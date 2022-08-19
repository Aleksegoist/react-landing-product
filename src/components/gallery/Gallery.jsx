import React from 'react';
import style from './Gallery.module.css';
import Gallery1 from '../../assets/gallery1.png';
import Gallery2 from '../../assets/gallery2.png';
import Gallery3 from '../../assets/gallery3.png';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import Card from './Card';

const Gallery = () => {
  return (
    <div className={style.gallery}>
      <div className='container'>
        <div className={style.box}>
          <div className={style.title}>
            <h1>Contents Strategies</h1>
            <p>
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={32}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className={style.myswiper}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1060: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <Card
                image={Gallery1}
                make='By Wahid Ari |  03 March 2019'
                title='Increasing Prosperity With Positive Thinking'
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                image={Gallery2}
                make='By Wahid Ari |  03 March 2019'
                title='Motivation Is The First Step To Success'
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                image={Gallery3}
                make='By Wahid Ari |  03 March 2019'
                title='Success Steps For Your Personal Or Business'
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                image={Gallery2}
                make='By Wahid Ari |  03 March 2019'
                title='Motivation Is The First Step To Success'
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                image={Gallery3}
                make='By Wahid Ari |  03 March 2019'
                title='Increasing Prosperity With Positive Thinking'
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
