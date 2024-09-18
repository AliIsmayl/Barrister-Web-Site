import React from 'react'
import './header.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { IoEarth } from "react-icons/io5";
import { GiPyromaniac } from "react-icons/gi";
import { GiBookshelf } from "react-icons/gi";

function Header() {
  return (
    <header>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="headerSwiperBox">
            <div className="upBox">

              <h1>Lorem ipsum   <p>dolor</p> sit amet. </h1>
            </div>
            <div className="dowBox">
              <div className="headerCart">
                <IoEarth className='icon' />
                <div className="div">
                  <h1>Lorem, ipsum.</h1>
                  <button>VIEW MORE</button>
                </div>
              </div>
              <div className="headerCart">
                <GiBookshelf />
                <div className="div">
                  <h1>Lorem, ipsum.</h1>
                  <button>VIEW MORE</button>
                </div>
              </div>
              <div className="headerCart">
                <GiPyromaniac />
                <div className="div">
                  <h1>Lorem, ipsum.</h1>
                  <button>VIEW MORE</button>
                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="headerSwiperBox">
            <div className="upBox">
              <h1>Lorem ipsum   <p>dolor</p> sit amet. </h1>

            </div>
            <div className="dowBox">
              <div className="headerCart">
                <IoEarth className='icon' />
                <div className="div">
                  <h1>Lorem, ipsum.</h1>
                  <button>VIEW MORE</button>
                </div>
              </div>
              <div className="headerCart">
                <GiBookshelf />
                <div className="div">
                  <h1>Lorem, ipsum.</h1>
                  <button>VIEW MORE</button>
                </div>
              </div>
              <div className="headerCart">
                <GiPyromaniac />
                <div className="div">
                  <h1>Lorem, ipsum.</h1>
                  <button>VIEW MORE</button>
                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="headerSwiperBox">
            <div className="upBox">
              <h1>Lorem ipsum   <p>dolor</p> sit amet. </h1>

            </div>
            <div className="dowBox">
              <div className="headerCart">
                <IoEarth className='icon' />
                <div className="div">
                  <h1>Lorem, ipsum.</h1>
                  <button>VIEW MORE</button>
                </div>
              </div>
              <div className="headerCart">
                <GiBookshelf />
                <div className="div">
                  <h1>Lorem, ipsum.</h1>
                  <button>VIEW MORE</button>
                </div>
              </div>
              <div className="headerCart">
                <GiPyromaniac />
                <div className="div">
                  <h1>Lorem, ipsum.</h1>
                  <button>VIEW MORE</button>
                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  )
}

export default Header