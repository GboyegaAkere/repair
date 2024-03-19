import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import phone from '../assets/images/phone.jpeg'

export default function Slide() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      <div>
            <div  className="flex flex-row items-center gap-1">
                <img src={phone} alt=""  className='w-16 h-16 rounded-full'/>
                <div className="text-sm">
                    <p>RS $1000</p>
                    <p>Sold for $7</p>
                </div> 
            </div>
        </div>
        <div>
            <div  className="flex flex-row items-center gap-1">
            <img src={phone} alt=""  className='w-16 h-16 rounded-full'/>
                <div className="text-sm">
                    <p>RS $1000</p>
                    <p>Sold for $7</p>
                </div> 
            </div>
        </div>
        <div>
            <div  className="flex flex-row items-center gap-1">
            <img src={phone} alt=""  className='w-16 h-16 rounded-full'/>
                <div className="text-sm">
                    <p>RS $1000</p>
                    <p>Sold for $7</p>
                </div> 
            </div>
        </div>
        <div>
            <div  className="flex flex-row items-center gap-1">
            <img src={phone} alt=""  className='w-16 h-16 rounded-full'/>
                <div className="text-sm">
                    <p>RS $1000</p>
                    <p>Sold for $7</p>
                </div> 
            </div>
        </div>

        <div>
            <div  className="flex flex-row items-center gap-1">
            <img src={phone} alt=""  className='w-16 h-16 rounded-full'/>
                <div className="text-sm">
                    <p>RS $1000</p>
                    <p>Sold for $7</p>
                </div> 
            </div>
        </div>

        <div>
            <div  className="flex flex-row items-center gap-1">
            <img src={phone} alt=""  className='w-16 h-16 rounded-full'/>
                <div className="text-sm">
                    <p>RS $1000</p>
                    <p>Sold for $7</p>
                </div> 
            </div>
        </div>

        <div>
            <div  className="flex flex-row items-center gap-1">
            <img src={phone} alt=""  className='w-16 h-16 rounded-full'/>
                <div className="text-sm">
                    <p>RS $1000</p>
                    <p>Sold for $7</p>
                </div> 
            </div>
        </div>

        <div>
            <div  className="flex flex-row items-center gap-1">
            <img src={phone} alt=""  className='w-16 h-16 rounded-full'/>
                <div className="text-sm">
                    <p>RS $1000</p>
                    <p>Sold for $7</p>
                </div> 
            </div>
        </div>

        <div>
            <div  className="flex flex-row items-center gap-1">
            <img src={phone} alt=""  className='w-16 h-16 rounded-full'/>
                <div className="text-sm">
                    <p>RS $1000</p>
                    <p>Sold for $7</p>
                </div> 
            </div>
        </div>

        <div>
            <div  className="flex flex-row items-center gap-1">
            <img src={phone} alt=""  className='w-16 h-16 rounded-full'/>
                
                <div className="text-sm">
                    <p>RS $1000</p>
                    <p>Sold for $7</p>
                </div> 
            </div>
        </div>

        <div>
            <div  className="flex flex-row items-center gap-1">
            <img src={phone} alt=""  className='w-16 h-16 rounded-full'/>
                <div className="text-sm">
                    <p>RS $1000</p>
                    <p>Sold for $7</p>
                </div> 
            </div>
        </div>

        <div>
            <div  className="flex flex-row items-center gap-1">
            <img src={phone} alt=""  className='w-16 h-16 rounded-full'/>
                <div className="text-sm">
                    <p>RS $1000</p>
                    <p>Sold for $7</p>
                </div> 
            </div>
        </div>
      </Slider>
    </div>
  );
}