'use client'
import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick';
import Hero1 from '@/public/hero/hero1.webp'
import Hero2 from '@/public/hero/hero2.webp'
import Hero3 from '@/public/hero/hero3.webp'
import Hero4 from '@/public/hero/hero4.webp'
import Hero5 from '@/public/hero/hero5.webp'
import Hero6 from '@/public/hero/hero6.webp'
import Hero7 from '@/public/hero/hero7.webp'
import Hero8 from '@/public/hero/hero8.webp'

const HeroSlider = () => {
    const images = [Hero1, Hero2, Hero3, Hero4, Hero5, Hero6, Hero7, Hero8]
    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} className="relative w-full h-[calc(100vh+200px)]">
                    <Image
                        src={image}
                        alt={`Hero-${index + 1}`}
                        fill
                        className="object-cover object-center"
                    />
                </div>
            ))}
        </Slider>
    )
}

export default HeroSlider