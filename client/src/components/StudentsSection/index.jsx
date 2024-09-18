import React from 'react'
import './studentsSection.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function StudentsSection() {
  return (
    <section id='studentsSection'>
      <div className="notMean"></div>
      <div className="upBox">
        <div className="line"></div>
        <p>News</p>
      </div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="sliderBox">
            <span>"</span>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
            <div className="div">
              <h3>JAMES COOPER</h3>
              <p>Graduate Student</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderBox">
            <span>"</span>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
            <div className="div">
              <h3>JAMES COOPER</h3>
              <p>Graduate Student</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderBox">
            <span>"</span>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
            <div className="div">
              <h3>JAMES COOPER</h3>
              <p>Graduate Student</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </section>
  )
}

export default StudentsSection