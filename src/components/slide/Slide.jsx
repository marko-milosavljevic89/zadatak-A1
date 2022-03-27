import React from 'react'
import slider1 from '../../assets/car.png'
import slider2 from '../../assets/comfyphone.png'
import './slide.css'
import {AiOutlineCheck} from 'react-icons/ai'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slide() {
  return (
    <section id='dodaci'>
      <Swiper className='container'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        <SwiperSlide className='slide-item'>          
          <img src={slider1} alt="" />
          <div className='inner-content'>
            <h1  className='bigH'>Trebaju ti dodaci?</h1>
            <div className='inner-paragraph'>
              <p>Uzmi dodatne gigabajte za surf i društvene mreže, a tu su roming dodaci za put u inostranstvo.</p>
              <div className='red-button'>
                <a href="">Pogledaj dodatke</a>
                <AiOutlineCheck className='check-logo'/>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide-item'>        
          <img src={slider2} alt="" />
          <div className='inner-content'>
            <p>Vreme je za promenu!</p>
            <h1 className='bigH'>Prenesi broj u A1</h1>
            <div className='inner-paragraph'>
              <p>Saznaj sve o tome kako brzo i lako možeš da preneseš broj u A1 mrežu</p>
              <div className='red-button'>
              <a href="">Pogledaj dodatke</a>
              <AiOutlineCheck className='check-logo'/>
            </div>
            </div>
            
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Slide