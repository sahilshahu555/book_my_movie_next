"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image.js';

const Hero = () => {
  const data=[
    {
        image:"https://assetscdn1.paytm.com/images/catalog/view_item/2491904/1707301240597.jpg?format=webp&imwidth=1024",
        title:"Washing & Detailing",
        main:"Keep your Car Newer",
        desc:"Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac"
  
    },
    {
      image:"https://assetscdn1.paytm.com/images/catalog/view_item/2465377/1706813296995.jpg?format=webp&imwidth=1024",
      title:"Washing & Detailing",
      main:"Quality service for you",
      desc:"Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac"

    },
    {
        image:"https://assetscdn1.paytm.com/images/catalog/view_item/2491597/1707459414970.jpg?format=webp&imwidth=1024",
        title:"Washing & Detailing",
        main:"High Quality of Washing",
        desc:" est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam"
  
    },
    {
        image:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shivrayancha-chhava-et00370805-1705302615.jpg",
        title:"Washing & Detailing",
        main:"Quality service for you",
        desc:"Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac"
  
    },
    
  ]

  const settings = {
    dots:false,
    infinite:true,
    slidesToShow:1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide:1,
          infinite:true,
          dots:false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite:true,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide:1,
          infinite:true,
        }
      }
    ]
  };

  return (
   <div className="" id='HERO'>
      <Slider {...settings}>
        {data.map((elm,i)=>(
          <Image src={elm.image} key={i} alt="background" className=' h-[20rem] md:h-[24rem] w-full ' width={900} height={1000}/>
        
        ))}
      </Slider>
  </div>
  )
}

export default Hero

