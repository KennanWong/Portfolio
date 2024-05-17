import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import './ProjectCarousel.css';

import {ProjectDetails} from '../Data/ProjectDetails'

// import required modules
import { Pagination, EffectCards } from 'swiper/modules';
import ProjectMobile from './ProjectMobile';

export default function ProjectCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={'1.1'}
        centeredSlides={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        effect={'coverflow'}
        modules={[Pagination]}
        className="mySwiper"
        style={{
            "--swiper-pagination-color": "#52796F",
            "--swiper-pagination-bullet-inactive-color": "#999999",
        }}
      >
        {ProjectDetails.map((project, key) => (
            <SwiperSlide key={key} >
                {({ isActive }) => (
                    <ProjectMobile language={project.language} title={project.title} description={project.description} year={project.year} url={project.url} active={isActive}/>
                )}
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
