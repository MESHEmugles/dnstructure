"use client"
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';


interface Slide {
    id: number;
    image: string;
    title: string;
}

interface InlineStyles {
    [key: string]: React.CSSProperties;
}

interface CarouselProps {
    slides: Slide[];
    spaceBetween?: number;
    slidesPerView?: number;
    centered?: boolean;
    effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip';
    autoplayDelay?: number;
    loop?: boolean;
    width?: number;
    heigth?: number;
    classname?: string;
    inlineSwiper?: React.CSSProperties;
    inlineSwiperSlideStyle?: React.CSSProperties;
    inlineImageStyle?: React.CSSProperties;

}

export default function Swipers({ 
    slides, spaceBetween = 19, classname='w-1/2', 
    width=100, heigth=100, slidesPerView = 1, centered = true, 
    effect = 'fade', autoplayDelay = 4500, loop = true,
    inlineSwiper, inlineSwiperSlideStyle, inlineImageStyle,
    }: CarouselProps) {
    return (
    <>
        <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            effect={effect}
            centeredSlides={centered}
            autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
            }}
            loop={loop}
            // navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, EffectFade, Pagination]}
            className="mySwiper"
            style={inlineSwiper}
        >
            {slides.map((item) => (
                <SwiperSlide key={item.id} style={inlineSwiperSlideStyle}>
                    <Image alt={item.title} width={width} height={heigth} src={item.image} className={classname} style={inlineImageStyle} />
                </SwiperSlide>
            ))}
        </Swiper>
    </>
    )
}
