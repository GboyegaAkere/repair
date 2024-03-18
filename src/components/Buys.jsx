import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Money from '../assets/images/money-pile.png'

export default function Buys() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
      <div className='flex flex-row items-center justify-center gap-3'>
        <div className='w-[200px] h-[100px] bg-green-700 flex items-center pl-3'>
            <div>
              <div className='flex flex-row items-center'>
               <p>Stock:</p>
               <p>R$ 1,161</p>
              </div>
              <div className='flex flex-row items-center'>
               <p>Rate:</p>
               <p>$7.00 per 1,000</p>
              </div>
              <div className='flex flex-row items-center'>
               <p>Payment:</p>
               <p>icon</p>
              </div>
            </div>
          </div>

          <div className='w-[200px] h-[100px] bg-green-700 flex items-center pl-3'>
            <div>
              <div className='flex flex-row items-center'>
               <p>Stock:</p>
               <p>R$ 1,161</p>
              </div>
              <div className='flex flex-row items-center'>
               <p>Rate:</p>
               <p>$7.00 per 1,000</p>
              </div>
              <div className='flex flex-row items-center'>
               <p>Payment:</p>
               <p>icon</p>
              </div>
            </div>
          </div>

          <div className='w-[200px] h-[100px] bg-green-700 flex items-center pl-3'>
            <div>
              <div className='flex flex-row items-center'>
               <p>Stock:</p>
               <p>R$ 1,161</p>
              </div>
              <div className='flex flex-row items-center'>
               <p>Rate:</p>
               <p>$7.00 per 1,000</p>
              </div>
              <div className='flex flex-row items-center'>
               <p>Payment:</p>
               <p>icon</p>
              </div>
            </div>
          </div>

          <div className='w-[190px] h-[100px] bg-green-700 flex items-center pl-3'>
            <div>
              <div className='flex flex-row items-center'>
               <p>Stock:</p>
               <p>R$ 1,161</p>
              </div>
              <div className='flex flex-row items-center'>
               <p>Rate:</p>
               <p>$7.00 per 1,000</p>
              </div>
              <div className='flex flex-row items-center'>
               <p>Payment:</p>
               <p>icon</p>
              </div>
            </div>
          </div>

          <div className='w-[200px] h-[100px] bg-green-700 flex items-center pl-3'>
            <div>
              <div className='flex flex-row items-center'>
               <p>Stock:</p>
               <p>R$ 1,161</p>
              </div>
              <div className='flex flex-row items-center'>
               <p>Rate:</p>
               <p>$7.00 per 1,000</p>
              </div>
              <div className='flex flex-row items-center'>
               <p>Payment:</p>
               <p>icon</p>
              </div>
            </div>
          </div>

          <div className='w-[220px] h-[100px] bg-green-700 flex items-center pl-3'>
            <div>
              <div className='flex flex-row items-center'>
               <p>Stock:</p>
               <p>R$ 1,161</p>
              </div>
              <div className='flex flex-row items-center'>
               <p>Rate:</p>
               <p>$7.00 per 1,000</p>
              </div>
              <div className='flex flex-row items-center'>
               <p>Payment:</p>
               <p>icon</p>
              </div>
            </div>
          </div>


          <div className='w-[220px] h-[100px] bg-green-700 flex items-center pl-3'>
            <div>
              <div className='flex flex-row items-center'>
               <p>Stock:</p>
               <p>R$ 1,161</p>
              </div>
              <div className='flex flex-row items-center'>
               <p>Rate:</p>
               <p>$7.00 per 1,000</p>
              </div>
              <div className='flex flex-row items-center'>
               <p>Payment:</p>
               <p>icon</p>
              </div>
            </div>
          </div>

          <div className='w-[220px] h-[100px] bg-green-700 flex items-center pl-3'>
            <div>
              <div className='flex flex-row items-center'>
               <p>Stock:</p>
               <p>R$ 1,161</p>
              </div>
              <div className='flex flex-row items-center'>
               <p>Rate:</p>
               <p>$7.00 per 1,000</p>
              </div>
              <div className='flex flex-row items-center'>
               <p>Payment:</p>
               <p>icon</p>
              </div>
            </div>
          </div>


          <div className='w-[220px] h-[100px] bg-green-700 flex items-center pl-3'>
            <div>
              <div className='flex flex-row items-center'>
               <p>Stock:</p>
               <p>R$ 1,161</p>
              </div>
              <div className='flex flex-row items-center'>
               <p>Rate:</p>
               <p>$7.00 per 1,000</p>
              </div>
              <div className='flex flex-row items-center'>
               <p>Payment:</p>
               <p>icon</p>
              </div>
            </div>
          </div>

          <div className='w-[220px] h-[100px] bg-green-700 flex items-center pl-3'>
            <div>
              <div className='flex flex-row items-center'>
               <p>Stock:</p>
               <p>R$ 1,161</p>
              </div>
              <div className='flex flex-row items-center'>
               <p>Rate:</p>
               <p>$7.00 per 1,000</p>
              </div>
              <div className='flex flex-row items-center'>
               <p>Payment:</p>
               <p>icon</p>
              </div>
            </div>
          </div>

          </div>
        </div>
      </Slider>
    </div>
  );
}